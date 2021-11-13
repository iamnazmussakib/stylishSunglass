import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MyOrder = ({ order, myOrders, setMyOrders }) => {
    const { image, productName, phone, address, email, _id, status } = order;
    const handleDelete = id => {
        const procced = window.confirm('Are You Sure To Cencel This Order?');
        if (procced) {
            fetch(`https://aqueous-ravine-85233.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cenceled Order Successfully');
                        const leftOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(leftOrders);
                    }
                });
        }
    }
    return (

        <Grid item xs={12} md={3}>
            <Paper sx={{ minHeight: '100%', m: 1, p: 1 }} elevation={3}>
                <Typography sx={{ textTransform: 'uppercase', textAlign: 'center', my: 1 }} variant="h5" color="secondary">{status}</Typography>
                <Button onClick={() => handleDelete(_id)} sx={{ width: '100%' }} color="secondary" variant="contained">Cencel Order</Button>
                <img style={{ width: '100%' }} src={image} alt="" />
                <h2>{productName}</h2>
                <h4>Order From: {email}</h4>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
            </Paper>
        </Grid>
    );
};

export default MyOrder;