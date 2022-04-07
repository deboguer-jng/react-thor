import React from "react";

import { Box, Container, Typography } from "@mui/material";

// images
import imgLeftArrow from "../../assets/images/head-arrows/left.png";
import imgRightArrow from "../../assets/images/head-arrows/right.png";

const Heading = ({ title }) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 8 }}>
      <Box display="flex">
        <Box flex={1}>
          <img src={imgLeftArrow} width={"100%"} alt="left arrow" />
        </Box>
        <Box marginX={4}>
          <Typography
            variant="h5"
            component="div"
            color={"white"}
            sx={{ fontFamily: "Trojan" }}
          >
            {title}
          </Typography>
        </Box>
        <Box flex={1}>
          <img src={imgRightArrow} width={"100%"} alt="left arrow" />
        </Box>
      </Box>
    </Container>
  );
};

export default Heading;
