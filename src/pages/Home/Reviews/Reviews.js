import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Container, Rating } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Reviews() {
    const [ratings, setRatings] = React.useState([]);
    React.useEffect(() => {
        fetch('https://aqueous-ravine-85233.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setRatings(data));
    }, [])
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = ratings.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Container sx={{ my: 16 }}>
            <Paper elevation={3} sx={{ my: 4, p: 5, textAlign: 'center' }}>
                <Box sx={{ mx: 'auto', maxWidth: 400, flexGrow: 1 }}>
                    <Typography sx={{ textAlign: 'center' }} variant="h3" > User Reviews</Typography>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: 'background.default',
                        }}
                    >
                        {/* <Typography>{rattings[activeStep].label}</Typography> */}
                    </Paper>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {ratings.map((step, index) => (
                            <div>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography component="legend">{step.userName}</Typography>
                                        <Rating name="read-only" value={step.rating} readOnly />
                                    </Box>
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>
            </Paper>
        </Container >
    );
}

export default Reviews;
