import React, { useState } from "react";

import { Container, Box, Typography, Button, Grid } from "@mui/material";

import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import HeadCard from "../../components/Farm/HeadCard";

import imgThor from "../../assets/images/LeftBar/Bitmap.png";

import { IoIosArrowDown } from "react-icons/io";

import styles from "./style.module.css";

const Farm = () => {
  const [active, setActive] = useState(1);
  return (
    <Layout>
      <Heading title={"farm"} />
      <Container maxWidth="lg">
        <HeadCard />
        <Box
          marginTop={4}
          sx={{
            background:
              "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.48)",
            borderRadius: "10px",
            padding: 4,
            paddingTop: 10,
          }}
        >
          <Box className={styles.roundBorder}>
            <Container maxWidth="sm">
              <Box
                width={"236px"}
                sx={{
                  marginX: "auto",
                  marginTop: "-65px",
                }}
              >
                <Typography
                  marginLeft={2}
                  gutterBottom
                  sx={{
                    fontFamily: "Kanit",
                    color: "white",
                    opacity: 0.5,
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  Select type
                </Typography>

                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    borderRadius: "48px",
                    paddingX: "10px",
                    paddingY: "5px",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <img
                      src={imgThor}
                      alt="hammer"
                      style={{ marginTop: "3px" }}
                      width={"32px"}
                      height={"32px"}
                    />
                    <Typography
                      marginLeft={1}
                      variant="subtitle1"
                      sx={{
                        fontFamily: "Kanit",
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      THOR
                    </Typography>
                  </Box>
                  <Box>
                    <IoIosArrowDown color="white" />
                  </Box>
                </Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                flexDirection={{ xs: "column", sm: "row" }}
                marginTop={4}
              >
                <Box>
                  <Typography
                    marginLeft={2}
                    sx={{
                      fontFamily: "Kanit",
                      color: "white",
                      opacity: 0.5,
                      fontSize: "20px",
                    }}
                  >
                    Stacked USD
                  </Typography>
                  <Typography
                    marginLeft={2}
                    gutterBottom
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                      fontSize: "36px",
                    }}
                  >
                    $6.7M
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    marginLeft={2}
                    sx={{
                      fontFamily: "Kanit",
                      color: "white",
                      opacity: 0.5,
                      fontSize: "20px",
                    }}
                  >
                    APR
                  </Typography>
                  <Typography
                    marginLeft={2}
                    variant="h4"
                    gutterBottom
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                      fontSize: "36px",
                    }}
                  >
                    390%
                  </Typography>
                </Box>
              </Box>

              <Box marginTop={4}>
                <Box
                  maxWidth={"300px"}
                  sx={{
                    border: "1px solid #5C5C5C",
                    borderRadius: "48px",
                    overflowX: "hidden",
                    display: "flex",
                    marginX: "auto",
                  }}
                >
                  <Box flex={1}>
                    {active === 1 ? (
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          borderRadius: "48px",
                          background:
                            "linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.64)",
                        }}
                      >
                        deposit
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        fullWidth
                        sx={{ color: "white" }}
                        onClick={() => setActive(1)}
                      >
                        deposit
                      </Button>
                    )}
                  </Box>
                  <Box flex={1}>
                    {active === 2 ? (
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          borderRadius: "48px",
                          background:
                            "linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.64)",
                        }}
                      >
                        withdraw
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        fullWidth
                        sx={{ color: "white" }}
                        onClick={() => setActive(2)}
                      >
                        withdraw
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>

              <Grid container spacing={2} marginTop={4}>
                <Grid item lg={8} md={8} sm={12} xs={12} position="relative">
                  <input
                    type="text"
                    className={styles.inputStyle}
                    placeholder="Enter amount..."
                  />
                  <Box position={"absolute"} top={"35%"} right={"3%"}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Kanit",
                      }}
                    >
                      MAX
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "white",
                        opacity: 0.5,
                        fontFamily: "Kanit",
                        marginTop: "-3px",
                      }}
                    >
                      40.00
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Button
                    variant="outlined"
                    sx={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.48)",
                      borderRadius: "48px",
                      paddingY: "10px",
                      borderColor: "white",
                      color: "white",
                    }}
                    fullWidth
                  >
                    Approve
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Farm;
