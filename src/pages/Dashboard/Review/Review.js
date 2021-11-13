import { Alert, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState('');
    const [handleRating, setHandleRating] = useState('');
    const handleOnChange = e => {
        setHandleRating(e.target.value);
    }
    console.log(handleRating);
    const handleClick = () => {
        const rate = { rating: handleRating, userName: user.displayName }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rate)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(data);
                }
            })
    };
    return (
        <Box sx={{ minWidth: 120, maxWidth: 500, mx: 'auto', mt: 8 }}>
            <Typography sx={{ my: 3, textAlign: 'center' }} variant="h3" color="secondary">Select Your Rating</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={handleRating}
                    label="Rating"
                    onChange={handleOnChange}
                >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                    <MenuItem value={4}>Four</MenuItem>
                    <MenuItem value={5}>Five</MenuItem>
                </Select>
                <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
            </FormControl>
            {success && <Alert severity="success">Thanks For Given Rating!</Alert>}
        </Box>
    );
};

export default Review;