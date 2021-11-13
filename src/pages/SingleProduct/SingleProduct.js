import { Alert, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const SingleProduct = () => {
    const { user } = useAuth();
    const [singleProduct, setSinglsProduct] = useState({});

    const initialData = { userName: user.displayName, email: user.email }
    const [productData, setProductData] = useState(initialData);

    const [orderSuccess, setOrderSuccess] = useState(false);
    const { sunglassId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/sunglasses/${sunglassId}`)
            .then(res => res.json())
            .then(data => setSinglsProduct(data));
    }, [])

    const history = useHistory();

    const handleField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData };
        newProductData[field] = value;
        setProductData(newProductData);
    }
    const handleSubmitButton = e => {
        const productInfo = {
            ...initialData,
            image: singleProduct?.img,
            productName: singleProduct?.name,
            phone: productData.phone,
            address: productData.address,
            status: singleProduct?.status
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                    history.push('/');
                }
            })
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={0} sx={{ p: 5 }}>
                            <img style={{ width: '100%' }} src={singleProduct?.img} alt="" />
                            <h2>{singleProduct?.name}</h2>
                            <p><small>{singleProduct?.price}</small></p>
                            <p>{singleProduct?.details}</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ mt: 16 }}>
                        <Paper elevation={3} sx={{ p: 5 }}>
                            <form onSubmit={handleSubmitButton}>
                                <Typography color="secondary" sx={{ my: 3, textAlign: 'center' }} variant="h3">BUY NOW</Typography>
                                <TextField
                                    label="Your Name"
                                    sx={{ width: '100%', my: 2 }}
                                    id="outlined-size-normal"
                                    size="normal"
                                    defaultValue={user.displayName}
                                    name="name"
                                    onBlur={handleField}
                                />
                                <TextField
                                    label="Your Email"
                                    sx={{ width: '100%', my: 2 }}
                                    id="outlined-size-normal"
                                    size="normal"
                                    defaultValue={user.email}
                                    name="email"
                                    onBlur={handleField}
                                />
                                <TextField
                                    label="Your Phone"
                                    sx={{ width: '100%', my: 2 }}
                                    id="outlined-size-normal"
                                    size="normal"
                                    name="phone"
                                    onBlur={handleField}
                                />
                                <TextField
                                    label="Your Address"
                                    sx={{ width: '100%', my: 2 }}
                                    id="outlined-size-normal"
                                    size="normal"
                                    name="address"
                                    onBlur={handleField}
                                />
                                <Button type="submit" sx={{ mt: 3, width: '100%' }} size="large" color="secondary" variant="contained">Confirm Purchase</Button>
                            </form>
                            {
                                orderSuccess && <Alert severity="success">Login User Successfully!</Alert>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SingleProduct;