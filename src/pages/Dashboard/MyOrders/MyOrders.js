import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => { setMyOrders(data); console.log(data) });
    }, [user.email])
    return (
        <Container>
            <Typography variant="h2" sx={{ my: 8, textAlign: 'center' }}>Your All Ordered Item</Typography>
            <Grid container spacing={2}>
                {
                    myOrders.map(order => {
                        if (order.email === user.email) {
                            return <MyOrder
                                key={order._id}
                                order={order}
                                myOrders={myOrders}
                                setMyOrders={setMyOrders}
                            ></MyOrder>
                        }
                    })
                }
            </Grid>
        </Container>
    );
};

export default MyOrders;