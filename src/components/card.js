import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Grid from '@mui/material/Grid';
const cardsArray = [
  {
    icon: <ElectricBoltIcon fontSize="25px"/>,
    title: "Fast",
    description:
      "Delivering a user experience that's seamless and lightning-fast is my core focus.",
  },
  {
    icon: <AutoAwesomeMosaicIcon fontSize="25px" />,
    title: "Multi-device",
    description: "My designs adapt seamlessly to all screens, big or small.",
  },
  {
    icon: <LightbulbIcon fontSize="25px"/>,
    title: "Dynamics",
    description:
      "I bring websites to life, transforming them from static to dynamic.",
  },
];
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  useEffect(() => {
    // Function to handle scroll event
    function handleScroll() {
        const aboutMeSection = document.getElementById('core-programming');
        if (aboutMeSection) {
            const { top } = aboutMeSection.getBoundingClientRect();
            const isVisible = top <= window.innerHeight / 2; // Adjust as needed
            setIsAboutMeVisible(isVisible);
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
        // Clean up the event listener when the component unmounts
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <>
      <Typography id="core-programming" className={isAboutMeVisible ? 'core-programming-main-div appear' : 'core-programming-main-div'} component="div" sx={{mt:20,}}>
      <Typography
        variant="h4"
        sx={{
          letterSpacing: "2px",
          
          color: "",
          textAlign: "center",
          
          width:"90%",
          margin:"0 auto"
        }}
        className="core-programming"
      >
        Foundational Programming Concepts
      </Typography>

      <Typography
        component="div"
        className="core-programming-inner-div"
        sx={{ display: "flex", justifyContent: "center", px:3, gap: "50px", mb: 20 }}
      >
      <Grid container spacing={6} md={10} lg={10} xl={8} >
        {cardsArray.map((card) => {
          return (
            <>
            
            <Grid item xs={12} sm={6} md={4} >
              <Card
                className="core-programming-card"
                sx={{ width: "95%", height:"290px", pt:3 , m: "0 auto", textAlign: "center", borderRadius: "20px" }}
              >
                <CardContent>
                  <Typography sx={{ mb: 2, }} variant="h1" component="div">
                    {card.icon}
                  </Typography>
                  <Typography sx={{ mb: 2, fontSize: "20px", fontWeight: 500 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.description}</Typography>
                </CardContent>
                {/* <CardActions sx={{justifyContent:"center"}}>
                        <Button  size="small">Learn More</Button>
                    </CardActions> */}
              </Card>
              </Grid>
            
            </>
          );
        })}
        </Grid>
      </Typography>
      </Typography>
    </>
  );
}
