import React, { useState } from "react";

import { Box, Container } from "@mui/material";

// Components
import Header from "../Header";
import LeftSideBar from "../LeftSidebar";

// Images
import bgImage from "../../assets/images/bg-img.png";

import ScrollArea from "react-scrollbar";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        // height: '100vh',
        display: "flex",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowY: "hidden",
      }}
    >
      <LeftSideBar />
      <Box width={"100%"}>
        <Container>
          <Header />
        </Container>
        <Box height={"80vh"}>
          <ScrollArea
            speed={0.8}
            contentClassName="content"
            horizontal={false}
            style={{ height: "100%" }}
          >
            <Box paddingX={4} marginBottom={4}>
              <Container>{children}</Container>
            </Box>
          </ScrollArea>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
