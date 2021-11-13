import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const ManageOrder = ({ order, manageOrders, setManageOrders }) => {
    const { image, productName, phone, address, email, _id, status } = order;
    const history = useHistory();
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are You Sure To Cencel This Order?');
        if (procced) {
            fetch(`https://aqueous-ravine-85233.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cenceled Order Successfully');
                        const leftOrders = manageOrders.filter(order => order._id !== id);
                        setManageOrders(leftOrders);
                    }
                });
        }
    };

    const handleUpdate = id => {
        fetch(`https://aqueous-ravine-85233.herokuapp.com/orders/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status Approved');
                    history.go(0);
                }
            })
    }
    return (
        <Grid item xs={12} md={3}>
            <Paper sx={{ minHeight: '100%', m: 1, p: 1 }} elevation={3}>
                <Typography sx={{ textTransform: 'uppercase', textAlign: 'center', my: 1 }} variant="h5" color="secondary">{status}</Typography>
                <Button onClick={() => handleDeleteBtn(_id)} sx={{ width: '100%' }} color="secondary" variant="contained">Cencel Order</Button>
                <Button onClick={() => handleUpdate(_id)} sx={{ width: '100%', my: 1 }} color="secondary" variant="contained">Update Status</Button>
                <img style={{ width: '100%' }} src={image} alt="" />
                <Typography sx={{ my: 2 }} variant="h5">{productName}</Typography>
                <Typography sx={{ my: 2 }} variant="body1">Order From: {email}</Typography>
                <Typography sx={{ my: 2 }} variant="body1">Phone: {phone}</Typography>
                <Typography sx={{ my: 2 }} variant="body1">Address: {address}</Typography>
            </Paper>
        </Grid>
    );
};

export default ManageOrder;