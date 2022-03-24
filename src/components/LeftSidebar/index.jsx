import React, { useState } from "react";

import { Box, Button, IconButton } from "@mui/material";

// Icons
import { FiMenu } from "react-icons/fi";

import imgHammer from "../../assets/images/LeftBar/Bitmap.png";
import imgThunder from "../../assets/images/LeftBar/Bitmap-1.png";
import bgImage from "../../assets/images/bg-img.png";
import imgDashboard from "../../assets/images/dashboard.png";
import imgNode from "../../assets/images/nodes.png";
import imgInvestment from "../../assets/images/investment.png";
import imgFarm from "../../assets/images/farm.png";
import imgFaq from "../../assets/images/faq.png";
import Header from "../Header";

const LeftSideBar = ({ children }) => {
  const [collapseSideBar, setCollapseSideBar] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
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
          <Box
            marginTop={2}
            sx={{ textAlign: "center" }}
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            <IconButton
              aria-label="menu"
              sx={{ color: "white" }}
              onClick={() => setCollapseSideBar(!collapseSideBar)}
            >
              <FiMenu />
            </IconButton>
          </Box>

          <Box marginTop={10}>
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
          sx={{
            width: collapseSideBar ? "100px" : "250px",
            height: "100%",
          }}
          style={{ background: "rgba(13, 16, 27, 0.64)" }}
        >
          <Box marginTop={20} paddingX={"10px"}>
            {collapseSideBar ? (
              <>
                <Box marginBottom={2} sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    style={{
                      background:
                        "linear-gradient(90deg, #2E62FF 26.2%, #4B24DC 100%)",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.48)",
                    }}
                    sx={{
                      borderRadius: "50%",
                      width: "80%",
                      paddingY: "15px",
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgDashboard} width={"20px"} />
                    </Box>
                  </Button>
                </Box>

                <Box marginBottom={2} sx={{ textAlign: "center" }}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: "50%",
                      width: "80%",
                      paddingY: "15px",
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgNode} width={"20px"} />
                    </Box>
                  </Button>
                </Box>

                <Box marginBottom={2} sx={{ textAlign: "center" }}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: "50%",
                      width: "80%",
                      paddingY: "15px",
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgInvestment} width={"20px"} />
                    </Box>
                  </Button>
                </Box>

                <Box marginBottom={2} sx={{ textAlign: "center" }}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: "50%",
                      width: "80%",
                      paddingY: "15px",
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgFarm} width={"20px"} />
                    </Box>
                  </Button>
                </Box>

                <Box marginBottom={2} sx={{ textAlign: "center" }}>
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: "50%",
                      width: "80%",
                      paddingY: "15px",
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgFaq} width={"20px"} />
                    </Box>
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Box marginBottom={2}>
                  <Button
                    variant="contained"
                    style={{
                      background:
                        "linear-gradient(90deg, #2E62FF 26.2%, #4B24DC 100%)",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.48)",
                    }}
                    sx={{
                      borderRadius: "50%",
                      width: "100%",
                      paddingX: 4,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderRadius: 20,
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgDashboard} width={"20px"} />
                    </Box>
                    <Box marginLeft={"20px"}>DASHBOARD</Box>
                  </Button>
                </Box>

                <Box marginBottom={2}>
                  <Button
                    variant="text"
                    sx={{
                      width: "100%",
                      paddingX: 4,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderRadius: 20,
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgNode} width={"20px"} />
                    </Box>
                    <Box
                      marginLeft={"20px"}
                      color="white"
                      sx={{ opacity: 0.5 }}
                    >
                      My NODES
                    </Box>
                  </Button>
                </Box>

                <Box marginBottom={2}>
                  <Button
                    variant="text"
                    sx={{
                      width: "100%",
                      paddingX: 4,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderRadius: 20,
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgInvestment} width={"20px"} />
                    </Box>
                    <Box
                      marginLeft={"20px"}
                      color="white"
                      sx={{ opacity: 0.5 }}
                    >
                      INVESTMENTS
                    </Box>
                  </Button>
                </Box>

                <Box marginBottom={2}>
                  <Button
                    variant="text"
                    sx={{
                      width: "100%",
                      paddingX: 4,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderRadius: 20,
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgFarm} width={"20px"} />
                    </Box>
                    <Box
                      marginLeft={"20px"}
                      color="white"
                      sx={{ opacity: 0.5 }}
                    >
                      FARM
                    </Box>
                  </Button>
                </Box>

                <Box marginBottom={2}>
                  <Button
                    variant="text"
                    sx={{
                      width: "100%",
                      paddingX: 4,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderRadius: 20,
                    }}
                  >
                    <Box marginTop={"6px"}>
                      <img src={imgFaq} width={"20px"} />
                    </Box>
                    <Box
                      marginLeft={"20px"}
                      color="white"
                      sx={{ opacity: 0.5 }}
                    >
                      FAQ
                    </Box>
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
      <div style={{ flexDirection: "column", display: "flex", width: "100%" }}>
        <Header />
        {children}
      </div>
    </Box>
  );
};

export default LeftSideBar;
