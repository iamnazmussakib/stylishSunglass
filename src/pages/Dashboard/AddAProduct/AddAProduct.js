import { Alert, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddAProduct = () => {
    const [success, setSuccess] = useState(false);
    const [productData, setProductData] = useState({});
    const handleField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...productData };
        newLoginData[field] = value;
        setProductData(newLoginData);

    }
    const handleAddProduct = e => {
        const product = {
            name: productData.name,
            desc: productData.desc,
            details: productData.details,
            price: `${productData.price} TK`,
            img: productData.img,
            status: 'pending'
        }
        if (productData.img && productData.name && productData.desc) {
            fetch('https://aqueous-ravine-85233.herokuapp.com/sunglasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess(true)
                        document.getElementById("addProduct").reset();
                    }
                })
        }
        e.preventDefault();
    }
    return (
        <>
            <Container>

                <Box sx={{ width: '75%', textAlign: 'center', mx: 'auto', mt: 16 }}>
                    <form id="addProduct" onSubmit={handleAddProduct}>
                        <Paper elevation={2} sx={{ py: 5 }}>
                            <Typography color="secondary" sx={{ mb: 5 }} variant="h5">Add A Product</Typography>
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Name"
                                name="name"
                                onBlur={handleField}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Short Description"
                                name="desc"
                                onBlur={handleField}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Full Description"
                                name="details"
                                onBlur={handleField}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Price"
                                name="price"
                                onBlur={handleField}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Image"
                                name="img"
                                onBlur={handleField}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1, display: 'none' }}
                                id="outlined-size-small"
                                label="status"
                                name="status"
                                onBlur={handleField}
                                size="small"
                                defaultValue="pending"
                            />
                            <Button color="secondary" variant="contained" sx={{ width: '80%', mt: 5 }} type="submit">Add Product</Button>

                        </Paper>
                    </form>

                    {
                        success && <Alert severity="success">Create Product Successfully!</Alert>
                    }

                </Box>

            </Container>
        </>
    );
};

export default AddAProduct;