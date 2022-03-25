import React, { useState } from "react";

import { Box, IconButton, Drawer, Button } from "@mui/material";

// Icons
import { FiMenu } from "react-icons/fi";

import Logo from "../Logo";

const Header = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box paddingX={4} marginTop={8}>
        <Button
          variant="contained"
          style={{
            background: "linear-gradient(90deg, #2E62FF 26.2%, #4B24DC 100%)",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.48)",
          }}
          sx={{
            borderRadius: 10,
            width: "100%",
            // paddingY: "15px",
          }}
        >
          DASHBOARD
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        height: "15vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        paddingX: 10,
      }}
    >
      <Logo />
      <Box>
        <Box display={{ xs: "block", sm: "block", md: "none" }}>
          <IconButton
            aria-label="menu"
            sx={{ color: "white" }}
            onClick={toggleDrawer(true)}
          >
            <FiMenu />
          </IconButton>
        </Box>
        <Drawer
          PaperProps={{
            sx: {
              background: "#10131d",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.48)",
            },
          }}
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
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
    </Box>
  );
};

export default Header;
