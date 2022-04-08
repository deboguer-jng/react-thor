import React, { useState } from "react";

import { Box, IconButton, Drawer, Button } from "@mui/material";

// Icons
import { FiMenu } from "react-icons/fi";

import Logo from "../Logo";

const Header = () => {
  const [state, setState] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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
        height: "10vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "20px",
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

        <Box
          sx={{
            width: "313px",
            border: "1px solid white",
            backgroundColor: "#171B24",
            borderRadius: "21px",
            overflow: "hidden",
          }}
          display={{ xs: "none", sm: "none", md: "flex" }}
        >
          {activeTab === 0 ? (
            <Button
              sx={{
                ":hover": {
                  backgroundColor: "white",
                },
                fontSize: "12px",
                fontFamily: "Kanit",
                backgroundColor: "white",
                color: "black",
                borderRadius: "21px",
                paddingX: "20px",
              }}
            >
              34.712 THOR | 34.712 AVAX
            </Button>
          ) : (
            <Button
              sx={{
                fontSize: "12px",
                paddingX: "20px",
                fontFamily: "Kanit",
                color: "white",
              }}
              onClick={() => setActiveTab(0)}
            >
              34.712 THOR | 34.712 AVAX
            </Button>
          )}
          {activeTab === 1 ? (
            <Button
              sx={{
                ":hover": {
                  backgroundColor: "white",
                },
                fontFamily: "Kanit",
                fontSize: "12px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "21px",
                paddingX: "25px",
              }}
            >
              0x1051..AgD2
            </Button>
          ) : (
            <Button
              sx={{ fontSize: "12px", fontFamily: "Kanit", color: "white" }}
              onClick={() => setActiveTab(1)}
            >
              0x1051..AgD2
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
