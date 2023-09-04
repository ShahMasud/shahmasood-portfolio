import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
const About = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  useEffect(() => {
    // Function to handle scroll event
    function handleScroll() {
        const aboutMeSection = document.getElementById('about');
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
      <Typography id="about" component="div" sx={{color:"", textAlign:"center", width:"50%", m: '0 auto',}} className={isAboutMeVisible ? 'about-main-div appear' : 'about-main-div'}>
        <Typography className="about" variant="h4" sx={{letterSpacing:"1px", fontSize:"28px", fontWeight:"bold", mb:3}}> About Me</Typography>
        <Typography className="about-sub-title" sx={{color:"rgba(16, 49, 71)", fontSize:"38px", width:"80%",}} variant="h3">Crafting <span style={{color:"#e67e22"}}>Intuitive</span> and Elegant <span style={{color:"#e67e22"}}>User Interfaces</span> through Code</Typography>
        <Typography variant="p" sx={{letterSpacing:"1px",}}>
        ✋ Greetings! I'm <strong>Shah Masood</strong>, a dedicated web developer with a focus on building dynamic web applications. I bring expertise in crafting captivating user experiences and robust backend solutions. With a knack for designing responsive interfaces, I specialize in creating seamless digital journeys. My commitment to staying updated with the latest industry trends ensures that I deliver innovative and impactful solutions. Let's collaborate to bring your ideas to life and create remarkable web experiences together!
        </Typography>
      </Typography>
    </>
  );
};

export default About;
