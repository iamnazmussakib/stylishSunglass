import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import brand1 from '../../../images/brand1.jpg';
import brand2 from '../../../images/brand2.jpg';
import brand3 from '../../../images/brand3.jpg';
import brand4 from '../../../images/brand4.jpg';
import brand5 from '../../../images/brand5.jpg';
import brand6 from '../../../images/brand6.jpg';
import { Container, Typography } from '@mui/material';

const Label = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    border: '1px solid black',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const itemData = [
    {
        img: brand1,
        title: 'Camping Car',
    },
    {
        img: brand2,
        title: 'Hats',
    },
    {
        img: brand3,
        title: 'Tomato basil',
    },
    {
        img: brand4,
        title: 'Mountain',
    },
    {
        img: brand5,
        title: 'Bike',
    },
    {
        img: brand6,
        title: 'Bike',
    }
];
function Brands() {
    return (
        <Container>
            <Box sx={{ width: '100%', minHeight: 829 }}>
                <Typography variant="h3" sx={{ my: 8, textAlign: 'center' }}>Some Sunglass Brands</Typography>

                <Masonry columns={3} spacing={1}>
                    {itemData.map((item, index) => (
                        <Stack key={index}>
                            <img
                                src={`${item.img}?w=162&auto=format`}
                                srcSet={`${item.img}`}
                                alt=""
                                loading="lazy"
                                style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                            />
                        </Stack>
                    ))}
                </Masonry>
            </Box>
        </Container>
    );
}


export default Brands;