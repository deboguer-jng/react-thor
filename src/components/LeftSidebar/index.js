import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";

// Icons
import { FiMenu } from "react-icons/fi";

// Images
import imgHammer from "../../assets/images/LeftBar/Bitmap.png";
import imgThunder from "../../assets/images/LeftBar/Bitmap-1.png";
import imgDashboard from "../../assets/images/dashboard.png";
import imgNode from "../../assets/images/nodes.png";
import imgInvestment from "../../assets/images/investment.png";
import imgFarm from "../../assets/images/farm.png";
import imgFaq from "../../assets/images/faq.png";
import imgDiscord from "../../assets/images/LeftBar/discord.png";
import imgTwitter from "../../assets/images/LeftBar/twitter.png";
import imgStack from "../../assets/images/LeftBar/stack.png";
import imgBubble from "../../assets/images/LeftBar/bubble.png";

import styles from "./style.module.css";
import { style } from "@mui/system";

const LeftSideBar = () => {
  const [collapseSideBar, setCollapseSideBar] = useState();

  return (
    <Box
      sx={{
        height: "100vh",
      }}
      display={{ xs: "none", sm: "none", md: "flex" }}
    >
      <Box
        sx={{
          width: "100px",
          height: "100%",
        }}
        style={{
          background: "linear-gradient(180deg, #0E111C 0%, #11141D 100%",
        }}
      >
        <Box marginTop={20}>
          <Box marginBottom={4}>
            <Button
              variant="text"
              sx={{
                paddingX: "0",
                display: "flex",
                justifyContent: "flex-start",
              }}
              fullWidth
            >
              <Box>
                <Box
                  sx={{
                    width: "10px",
                    height: "50px",
                  }}
                  style={{
                    background:
                      "linear-gradient(131.78deg, #EEEEEE 12.72%, #D4C78C 21.39%, #DEBF70 34.64%, #AE9555 44.61%, #A78C47 57.04%)",
                  }}
                ></Box>
              </Box>
              <Box marginLeft={2}>
                <img src={imgHammer} alt="hammer" width={40} />
              </Box>
            </Button>
          </Box>

          <Box marginBottom={4}>
            <Button variant="text" sx={{ marginLeft: 2 }}>
              <img src={imgThunder} alt="thunder" width={40} />
            </Button>
          </Box>

          <Box marginBottom={4}>
            <Button variant="text" sx={{ marginLeft: 2 }}>
              <img src={imgThunder} alt="thunder" width={40} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display={{ xs: "none", sm: "none", md: "flex" }}
        flexDirection="column"
        onMouseEnter={() => setCollapseSideBar(false)}
        onMouseLeave={() => setCollapseSideBar(true)}
        sx={{
          width: collapseSideBar ? "69px" : "208px",
          background: "rgba(13, 16, 27, 0.64)",
          height: "100%",
          transition: "width 0.3s",
          position: "relative",
        }}
      >
        <Box marginTop={20} paddingX={"15px"}>
          <Box marginBottom={2}>
            <NavLink
              to="/"
              style={{ width: collapseSideBar ? "40px" : "164px" }}
              className={({ isActive }) =>
                isActive
                  ? `${styles.activeRouteCollapse}`
                  : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgDashboard} width={"16px"} />
              </Box>
              <Box className={styles.btnText}>
                <Typography
                  variant="subtitle2"
                  className={styles.text}
                  component="div"
                >
                  DASHBOARD
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box marginBottom={2}>
            <NavLink
              to="/nodes"
              style={{ width: collapseSideBar ? "40px" : "164px" }}
              className={({ isActive }) =>
                isActive
                  ? `${styles.activeRouteCollapse}`
                  : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgNode} width={"16px"} />
              </Box>
              <Box className={styles.btnText}>
                <Typography
                  variant="subtitle2"
                  className={styles.text}
                  component="div"
                >
                  MY NODES
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box marginBottom={2}>
            <NavLink
              to="/investment"
              style={{ width: collapseSideBar ? "40px" : "164px" }}
              className={({ isActive }) =>
                isActive
                  ? `${styles.activeRouteCollapse}`
                  : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgInvestment} width={"16px"} />
              </Box>
              <Box className={styles.btnText}>
                <Typography
                  variant="subtitle2"
                  className={styles.text}
                  component="div"
                >
                  INVESTMENTS
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box marginBottom={2}>
            <NavLink
              to="/farm"
              style={{ width: collapseSideBar ? "40px" : "164px" }}
              className={({ isActive }) =>
                isActive
                  ? `${styles.activeRouteCollapse}`
                  : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgFarm} width={"16px"} />
              </Box>
              <Box className={styles.btnText}>
                <Typography
                  variant="subtitle2"
                  className={styles.text}
                  component="div"
                >
                  FARM
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box marginBottom={2}>
            <NavLink
              to="/faq"
              style={{ width: collapseSideBar ? "40px" : "164px" }}
              className={({ isActive }) =>
                isActive
                  ? `${styles.activeRouteCollapse}`
                  : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgFaq} width={"16px"} />
              </Box>
              <Box className={styles.btnText}>
                <Typography
                  variant="subtitle2"
                  className={styles.text}
                  component="div"
                >
                  FAQ
                </Typography>
              </Box>
            </NavLink>
          </Box>
        </Box>

        {collapseSideBar ? null : (
          <Box
            position={"absolute"}
            top="90%"
            left="10%"
            display={{ xs: "none", sm: "none", md: "flex" }}
          >
            <Button variant="text" size="small" sx={{ minWidth: "40px" }}>
              <img src={imgDiscord} width={"20px"} />
            </Button>

            <Button variant="text" size="small" sx={{ minWidth: "40px" }}>
              <img src={imgTwitter} width={"20px"} />
            </Button>
            <Button variant="text" size="small" sx={{ minWidth: "40px" }}>
              <img src={imgStack} width={"20px"} />
            </Button>

            <Button variant="text" size="small" sx={{ minWidth: "40px" }}>
              <img src={imgBubble} width={"20px"} />
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LeftSideBar;
