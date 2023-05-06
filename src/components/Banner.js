import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

 
const images = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
  ]
  
  
export const Banner = () => {
    

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
  };

  return (
    <div>
    
        <Box
          sx={{ width: 'auto', px: 2, pb: 2  }}
          role="presentation"
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ height: 'auto', my: 1 }}>
            <img src={images[activeStep]} alt={`img ${activeStep}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
      
          <MobileStepper
            variant="dots"
            steps={images.length}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 500, ml:{lg: '750px', md: '350px',sx: '250px'}}}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
                Next
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>
            }
          />
       
        </Box>
   
    </div>
    );
  }