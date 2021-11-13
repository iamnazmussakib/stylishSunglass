import { Paper } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {


    return (
        <>
            <Navigation></Navigation>
            <Products></Products>
            <Reviews></Reviews>
        </>
    );
};

export default Home;