import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProjectsCard from './ProjectsCard';
import ProjectscardReact from './ProjectsCard2';
import ProjectscardAll from './ProjectscardAll';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  useEffect(() => {
    // Function to handle scroll event
    function handleScroll() {
        const aboutMeSection = document.getElementById('tabs-box');
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box id="tabs-box" className={isAboutMeVisible ? 'tabs-box appear' : 'tabs-box'} sx={{ bgcolor: 'transparent', width: "90%", margin:"0 auto", mb:10 }}>
      <AppBar className='tabs_appbar' sx={{width:"50%", m:"0 auto"}} position="static">
        <Tabs
          style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          value={value}
          onChange={handleChange}
          indicatorColor="#e67e22"
          textColor=""
          variant="fullWidth"
          aria-label="basic tabs example"
        >
          <Tab className='tab' sx={{color:value===0? "white": "rgba(16, 49, 71)", bgcolor: value===0? "#e67e22": "none", border:"1px solid #e67e22"}} label="ReactJs" {...a11yProps(0)} />
          <Tab className='tab' sx={{color:value===1? "white": "rgba(16, 49, 71)", bgcolor: value===1? "#e67e22": "none", border:"1px solid #e67e22"}} label="Nextjs" {...a11yProps(1)} />
          <Tab className='tab' sx={{color:value===2? "white": "rgba(16, 49, 71)", bgcolor: value===2? "#e67e22": "none", border:"1px solid #e67e22"}} label="All" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <h3 className='reactjs'>ReactJs Projects</h3>
        <ProjectscardReact id={value}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <h3 className='reactjs'>NextJs Projects</h3>
        <ProjectsCard id={value}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <h3 className='reactjs'>All Projects</h3>
        <ProjectscardAll id={value}/>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}