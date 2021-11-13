import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerToWeb, isLoading, user, error } = useAuth();
    const handleField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const history = useHistory();
    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not matched');
            return
        }
        registerToWeb(loginData.email, loginData.password, history, loginData.name);
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <Container>

                <Box sx={{ width: '75%', textAlign: 'center', mx: 'auto', mt: 16 }}>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <Paper elevation={2} sx={{ py: 5 }}>
                            <Typography color="secondary" sx={{ mb: 5 }} variant="h5">Register</Typography>
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
                                label="Email"
                                type="email"
                                name="email"
                                onBlur={handleField}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Password"
                                name="password"
                                onBlur={handleField}
                                type="password"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Re-Enter Password"
                                name="password2"
                                onBlur={handleField}
                                type="password"
                                size="small"
                            />
                            <Button color="secondary" variant="contained" sx={{ width: '80%', mt: 5 }} type="submit">Register</Button>
                            <Link to="/login">
                                <Button color="secondary" variant="text" sx={{ mt: 5 }} type="submit">Already Registered? Please Login</Button>
                            </Link>
                        </Paper>
                    </form>}
                    {isLoading && <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>}
                    {
                        user?.email && <Alert severity="success">Create User Successfully!</Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                </Box>

            </Container>
            <Footer></Footer>
        </>
    );
};

export default Register;