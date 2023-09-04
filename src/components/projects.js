import React, {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import FullWidthTabs from "./tabs";
import ImagesSlider2 from "./ImagesSlider2";
const Projects = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  useEffect(() => {
    // Function to handle scroll event
    function handleScroll() {
        const aboutMeSection = document.getElementById('projects-title-div');
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
      <Typography id="projects-title-div" component="div" sx={{ textAlign: "center", mb:10 }} className={isAboutMeVisible ? 'projects-title-div appear' : 'projects-title-div'}>
        <Typography
          variant="h5"
          sx={{
            color: "white !important",
            mb: 2,
            color: "#e67e22",
            fontSize: "28px",
            fontWeight:"bold"
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="h4"
          sx={{fontSize: "38px", color:"rgba(16, 49, 71)", width:"90%", m:"0 auto" }}
        >
            Take a look at some of my top-notch 
          <span style={{ color: "#e67e22",  }}> projects</span>
        </Typography>
      </Typography>

      <Typography variant="div" sx={{justifyContent:"center", background:"red"}}>
        <FullWidthTabs/>
      </Typography>

      
    </>
  );
};

export default Projects;
