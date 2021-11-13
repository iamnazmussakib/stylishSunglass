import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/sunglasses')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6))
                console.log(data);
            });
    }, [])
    return (
        <Container>
            <Typography sx={{ my: 5, textAlign: 'center' }} variant="h2">Featured Sunglasses</Typography>
            <Grid container spacing={2}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </Grid>
        </Container>
    );
};

export default Products;