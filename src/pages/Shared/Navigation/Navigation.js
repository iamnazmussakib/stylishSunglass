import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="secondary" position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        StylishSunGlass
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/appointment">
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