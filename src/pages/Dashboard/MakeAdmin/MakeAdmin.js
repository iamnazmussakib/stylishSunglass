import { Alert, Button, Container, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSeccess] = useState(false);
    const handleField = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        const user = { email };
        fetch('https://aqueous-ravine-85233.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setSeccess(true);
                }
                console.log(data);
            })
        e.preventDefault();
    }
    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <h1>Make Sure To Create An Admin</h1>
                    <h3>An admin will see -Manage All Orders-, -Add A Product-, -Make Admin-, -Manage Products-. And an admin can change the name of these menu items.</h3>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleAdmin}>
                        <Paper elevation={2} sx={{ py: 5, textAlign: 'center' }}>
                            <h3 style={{ textAlign: 'center' }}>Create An Admin</h3>
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Email"
                                type="email"
                                onBlur={handleField}
                                size="small"
                            />
                            <Button color="secondary" variant="contained" sx={{ width: '80%', mt: 5 }} type="submit">Add Admin</Button>
                            {success && <Alert severity="success">Make Admin Successfully!</Alert>}
                        </Paper>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MakeAdmin;