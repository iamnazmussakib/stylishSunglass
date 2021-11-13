import { Button, Grid, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, desc, price, img, _id } = product;
    return (
        <Grid sx={{}} item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 5, textAlign: 'center' }}>
                <img style={{ width: '100%' }} src={img} alt="" />
                <h3>{name}</h3>
                <p><strong>Price: {price}</strong></p>
                <p>{desc}</p>
                <Link to={`/sunglasses/${_id}`} style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%' }} color="secondary" variant="contained">Buy Now</Button>
                </Link>
            </Paper>
        </Grid>
    );
};

export default Product;