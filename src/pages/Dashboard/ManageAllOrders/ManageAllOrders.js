import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';

const ManageAllOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        const url = `https://aqueous-ravine-85233.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => { setManageOrders(data); console.log(data) });
    }, [])
    return (
        <Container>
            <Typography variant="h2" sx={{ my: 8, textAlign: 'center' }}>Manage All Orders</Typography>
            <Grid container spacing={2}>
                {
                    manageOrders.map(order => <ManageOrder
                        key={order._id}
                        order={order}
                        manageOrders={manageOrders}
                        setManageOrders={setManageOrders}
                    ></ManageOrder>)
                }
            </Grid>
        </Container>
    );
};

export default ManageAllOrders;