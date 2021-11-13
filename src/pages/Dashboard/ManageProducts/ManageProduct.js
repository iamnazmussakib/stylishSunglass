import { Button, Grid, Paper } from '@mui/material';
import React from 'react';

const ManageProduct = ({ product, allProducts, setAllProducts }) => {
    const { name, desc, price, img, _id } = product;
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are You Sure To Delete This Product?');
        if (procced) {
            fetch(`https://aqueous-ravine-85233.herokuapp.com/sunglasses/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Deleted Successfully');
                        const leftProducts = allProducts.filter(product => product._id !== id);
                        setAllProducts(leftProducts);
                    }
                });
        }
    };
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 5, textAlign: 'center' }}>
                <img style={{ width: '100%' }} src={img} alt="" />
                <h3>{name}</h3>
                <p><strong>Price: {price}</strong></p>
                <p>{desc}</p>
                <Button onClick={() => { handleDeleteBtn(_id) }} sx={{ width: '100%' }} color="secondary" variant="contained">Delete Product</Button>
            </Paper>

        </Grid>
    );
};

export default ManageProduct;