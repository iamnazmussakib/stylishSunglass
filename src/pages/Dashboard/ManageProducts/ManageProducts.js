import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/sunglasses')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
            });
    }, [])
    return (
        <>
            <Container>
                <Typography sx={{ my: 5, textAlign: 'center' }} variant="h2">Manage All Products</Typography>
                <Grid container spacing={2}>
                    {
                        allProducts.map(product => <ManageProduct
                            key={product._id}
                            product={product}
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                        ></ManageProduct>)
                    }

                </Grid>
            </Container>
        </>
    );
};

export default ManageProducts;