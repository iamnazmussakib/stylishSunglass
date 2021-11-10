import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginToWeb, isLoading, user, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLogin = e => {
        loginToWeb(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (

        <>
            <Navigation></Navigation>
            <Container>
                <Box sx={{ width: '75%', textAlign: 'center', mx: 'auto', mt: 16 }}>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <Paper elevation={2} sx={{ py: 5 }}>
                            <Typography color="secondary" sx={{ mb: 5 }} variant="h5">Login</Typography>
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
                            <Button color="secondary" variant="contained" sx={{ width: '80%', mt: 5 }} type="submit">Sign In</Button>
                            <Link to="/register">
                                <Button color="secondary" variant="text" sx={{ mt: 5 }} type="submit">New User? Please Register First</Button>
                            </Link>
                        </Paper>

                    </form>

                    }
                    {isLoading && <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>}
                    {
                        user?.email && <Alert severity="success">Login User Successfully!</Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                </Box>
            </Container>
        </>
    );
};

export default Login;