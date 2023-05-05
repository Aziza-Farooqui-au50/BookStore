import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" style={{marginTop:"15rem"}}>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
         I'm Padmanav Sahoo
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
           This is my Capstone Project
        </Typography>
      </Box>
    </div>
  );
};

export default About;
