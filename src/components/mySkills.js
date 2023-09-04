import React, {useEffect, useState} from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'start',
//     color: "#7e827c",
//   }));
const RotatedSquare = styled(Paper)`
  width: 150px;
  margin: 0 auto;
  height: 150px;
  border: 2px solid rgba(16, 49, 71);
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillText = styled(Typography)`
  transform: rotate(45deg);
  padding: 10px;
  text-align: center;
  border: 2px solid rgba(16, 49, 71);
  color: rgba(16, 49, 71);
  font-weight: bold;
`;
const skills = ["React.js", "Next.js", "JavaScript", "Node.js", "MongoDB", "Transitions", "Bootstrap", "React-Bootstrap", "Material UI", "Tailwind CSS", "SaSS"];
const MySkills = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  useEffect(() => {
    // Function to handle scroll event
    function handleScroll() {
        const aboutMeSection = document.getElementById('skills-main-div');
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
    <Typography id='skills-main-div' component='div' className={isAboutMeVisible ? 'skills-main-div appear' : 'skills-main-div'}>
    <Typography variant="h4" sx={{letterSpacing:"2px", color:"white", textAlign:"center", color:"#e67e22", fontSize:"28px" ,fontWeight:"bold" ,mb:2}}> My Skills</Typography>
        <Typography variant="h3" sx={{color:"rgba(16, 49, 71)",fontSize:"38px", textAlign:"center", mb:10}}>Skills I've Mastered</Typography>
        
        <Grid container spacing={2} xs={12} lg={8} justifyContent="center" sx={{margin:"0 auto"}}>
          {skills.map((skill, index) => (
            <Grid style={{paddingLeft:"unset"}} item xs={10} sm={4} lg={3} key={index}>
              <RotatedSquare>
                <SkillText variant="body1">{skill}</SkillText>
              </RotatedSquare>
            </Grid>
          ))}
        </Grid>
    </Typography>
    </>
  )
}

export default MySkills