import { Paper } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Product from '../Product/Product';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer'

const Home = () => {


    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Brands></Brands>
            <Footer></Footer>
        </>
    );
};

export default Home;