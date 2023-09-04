import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Grid from '@mui/material/Grid';

// import ImagesSlider from "./ImagesSlider";
import ImagesSlider from "./ImagesSlider3";
import KereksSlider from "./kereksSlider";

import { ProjectsDetails2 } from "./ProjectsDetails";
import zimo1 from "../assets/images/zimo-1.png";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "60%",
  bgcolor: "white",
  // border: "2px solid #000",
  borderRadius:"20px",
  boxShadow: 24,
  p: 4,
};
const closeButtonStyle = {
  position: "absolute",
  top: "5px",
  right: "0px",
  zIndex: 1,
  backgroundColor: "transparent",
  color: "#bd691f",
  boxShadow: "unset",
};
const ProjectsCard = () => {
  const [slider, setSlider]= useState();
  const [title, setTitle]= useState("")
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = (index) => {
    setOpen(true);
    console.log(index, "index");
    if(index===0){
      setSlider(<ImagesSlider/>)
      setTitle("Zimo Pro")
    } else if(index===1){
      setSlider(<KereksSlider/>)
      setTitle("Kereks")
    }else{
      setSlider("")
    }
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      {ProjectsDetails2.map((data, index) => {
        return (
          <Grid item xs={12} sm={6} lg={5} xl={4} key={index}>
            <Card  sx={{ maxWidth: "100%", height:"470px", position:"relative", color:"rgba(16, 49, 71)" }}>
            <div className="container">
              <CardHeader
                className="projects-title"
                sx={{ justifyContent: "center", textAlign: "center", }}
                title={data.title}
              />

              <div class="middle">
                  <div class="text">
                    <Button
                      className="enlarge-btn"
                      onClick={()=>handleOpen(index)}
                      sx={{ bgcolor: "transparent", color:"#e67e22", boxShadow:"unset", fontWeight:"bold" }}
                      variant="contained"
                    >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                      slider
                    </Button>
                    <div>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box className="slider_box" sx={style}>
                          {/* <button className="close-button" onClick={handleClose} style={closeButtonStyle}> */}
                          <h3 style={{position:"absolute", top:"0", left:"50%", transform:"translateX(-50%)"}}>{title}</h3>
                          <Button
                            variant="contained"
                            href="#contained-buttons"
                            className="close-button"
                            onClick={handleClose}
                            style={closeButtonStyle}
                          >
                            <CloseIcon />
                          </Button>

                          {/* </button> */}
                          <div className="" style={{ margin: "20px" }}>
                            {slider}
                          </div>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
              
                <CardMedia
                  className="image"
                  sx={{ width: "100%", margin: "0 auto" }}
                  component="img"
                  height="194"
                  image={data.img}
                  alt="Paella dish"
                />
                
             
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {data.desc}
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{position:"absolute", bottom:"0", width:"100%"}}>
                <IconButton aria-label="add to favorites">
                  <Typography variant="p" sx={{fontSize:"20px"}} className="skills">{data.skills}</Typography>
                </IconButton>

                <ExpandMore
                  // expand={expanded}
                  // onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  sx={{position:"absolute", right:"4%"}}
                >
                  <Button
                    sx={{ bgcolor: "transparent", color:"rgba(16, 49, 71)" }}
                    onClick={() => window.open(`${data.link}`, "_blank")}
                    variant=""
                    href=""
                    className="live-link"
                  >
                    Live Link
                    <span class="live-icon"></span>

                  </Button>
                  {/* <ExpandMoreIcon /> */}
                </ExpandMore>
              </CardActions>
             
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectsCard;
