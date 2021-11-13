import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner.png';

const Banner = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{ p: 8 }}>
                        <Typography variant="h2" color="secondary" sx={{ textTransform: 'uppercase', mx: 'auto', width: '70%', mt: 8 }}>Make Your Own Style With Our Glass</Typography>
                        <Typography variant="body1" sx={{ letterSpacing: '1px', mx: 'auto', width: '70%', mt: 8 }}>Prescription Sunglasses tailored to your needs. Explore our online selection of prescription sunglasses and find your perfect match with the new Sunglass Hut service, online only. Prescription Sunglasses tailored to your needs. Explore our online selection of prescription sunglasses and find your perfect match with the new Sunglass Hut service, online only. Prescription Sunglasses tailored to your needs.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={banner} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;