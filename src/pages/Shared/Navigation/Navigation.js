import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="secondary" position="static">
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', flexGrow: 1 }}>
                        <Typography variant="h6" component="div">
                            StylishSunGlass
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/sunglasses">
                        <Button color="inherit">Sunglasses</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                    </Link>
                    {
                        user?.email ?
                            <Button onClick={logOut} color="inherit">Sign Out</Button>
                            :
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;