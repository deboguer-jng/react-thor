import React from "react";

import { Box, Grid, Paper, Typography, Container } from "@mui/material";
import CustomButton from "../CustomButton";

import Boxes from "../Boxes";

import useWindowDimensions from "../../dimension";

const CardDouble = ({
  title,
  number,
  noBoxes,
  image,
  btnLabel,
  icon,
  hideHover,
}) => {
  const { width } = useWindowDimensions();
  return (
    <Box
      sx={{
        width: "100%",
        height: "268px",
        background:
          "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.48)",
        borderRadius: "10px",
        padding: 2,
      }}
    >
      <Grid
        style={{ justifyContent: "space-between", display: "flex" }}
        flexDirection={{ xs: "row", sm: "column", md: "row" }}
      >
        <Box style={{ display: "flex" }}>
          {width > 700 ? (
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
                style={{ width: "24px", height: "24px" }}
                src={icon}
                alt="img"
              />
            </Box>
          ) : null}

          <Box
            marginLeft={width > 700 ? "10px" : "0px"}
            marginTop={width > 700 ? "10px" : "0px"}
          >
            <Typography
              component="div"
              style={{
                color: "white",
                fontFamily: "Kanit",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: width > 700 ? "20px" : "16px",
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
                fontSize: width > 700 ? "48px" : "40px",
              }}
            >
              {number}
            </Typography>
          </Box>
        </Box>
        <Box>
          <CustomButton label={btnLabel} fontSize="11px" />
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
          <Boxes hideHover={hideHover} />
        </Box>
      )}
    </Box>
  );
};

export default CardDouble;
