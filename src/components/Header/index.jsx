import React from "react";

import { Box, IconButton } from "@mui/material";

// Icons
import { FiMenu } from "react-icons/fi";

import Logo from "../Logo";

const Header = () => {
  return (
    <Box
      sx={{
        height: "20vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 10,
      }}
    >
      <Logo />
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <IconButton aria-label="menu" sx={{ color: "white" }}>
          <FiMenu />
        </IconButton>
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <Box
          sx={{
            width: "auto",
            height: "50px",
            backgroundColor: "#171B24",
            color: "white",
            borderRadius: 20,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            border: 2,
          }}
        >
          <Box
            sx={{
              paddingX: 2,
              borderRadius: 20,
              backgroundColor: "white",
              color: "black",
              lineHeight: "50px",
            }}
          >
            34.712 THOR | 34.712 AVAX
          </Box>
          <Box sx={{ paddingX: 2 }}>0x1051..AgD2</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
