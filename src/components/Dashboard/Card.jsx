import React from "react";

import { Box, Grid, Paper, Typography, Container } from "@mui/material";
import CustomButton from "../CustomButton";

import imgReward from "../../assets/images/svg/rewardIcon.svg";
import Boxes from "../Boxes";

const CardDouble = ({ title, number, noBoxes, image }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Paper
        style={{
          height: "268px",
          background:
            "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
        }}
        sx={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.48)",
          borderRadius: "10px",
          padding: 2,
        }}
        elevation={1}
      >
        <Grid
          style={{ justifyContent: "space-between", display: "flex" }}
          flexDirection={{ xs: "row", sm: "column", md: "row" }}
        >
          <Box style={{ display: "flex" }}>
            <Box
              style={{
                width: "40px",
                height: "40px",
                borderRadius: 15,
                backgroundColor: "#333746",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                style={{ width: "20px", height: "20px" }}
                src={imgReward}
                alt="img"
              />
            </Box>
            <Box marginLeft={"10px"} marginTop={"10px"}>
              <Typography
                variant="h6"
                component="div"
                style={{
                  color: "white",
                  fontFamily: "Kanit",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  lineHeight: "30px",
                  opacity: 0.5,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                sx={{
                  background:
                    "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                  fontFamily: "Kanit",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  textFillColor: "transparent",
                  fontStyle: "normal",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600,
                }}
              >
                {number}
              </Typography>
            </Box>
          </Box>
          <Box>
            <CustomButton label="collect all" />
          </Box>
        </Grid>
        {noBoxes ? (
          <Box>
            <Box>
              <Container maxWidth={"xl?"}>
                <Box display={"flex"} justifyContent="space-between">
                  <Box display={"flex"} alignItems="center">
                    <Typography
                      variant="body2"
                      component="div"
                      style={{
                        color: "white",
                        fontFamily: "Kanit",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "30px",
                      }}
                    >
                      AVAX
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{
                        background:
                          "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                        fontFamily: "Kanit",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        textFillColor: "transparent",
                        fontStyle: "normal",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 600,
                        marginLeft: "10px",
                      }}
                    >
                      $77.46
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      component="div"
                      style={{
                        color: "white",
                        fontFamily: "Kanit",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "30px",
                      }}
                    >
                      +25%
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Box>
            <img src={image} width={"100%"} />
          </Box>
        ) : (
          <Box marginTop={"5px"}>
            <Boxes />
          </Box>
        )}
      </Paper>
    </Grid>
  );
};

export default CardDouble;
