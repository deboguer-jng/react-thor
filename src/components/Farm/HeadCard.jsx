import React from "react";

import { Container, Grid, Box, Typography } from "@mui/material";

import CustomButton from "../../components/CustomButton";

import imgFarm from "../../assets/images/farm.png";
import imgThor from "../../assets/images/LeftBar/Bitmap.png";

const HeadCard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={12} lg={6} sm={12} xs={12}>
        <Box
          sx={{
            background:
              "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
            borderRadius: "12px",
            padding: 4,
          }}
          height="240px"
        >
          <Box display={"flex"} alignItems="center">
            <img src={imgFarm} alt="farm" />
            <Typography
              marginLeft={2}
              variant="h4"
              sx={{ fontFamily: "Kanit", color: "white", opacity: 0.5 }}
            >
              Farm
            </Typography>
          </Box>
          <Container maxWidth="sm">
            <Box paddingX={1}>
              <Box>
                <Typography
                  marginLeft={2}
                  variant="subtitle1"
                  sx={{ fontFamily: "Kanit", color: "white", opacity: 0.5 }}
                >
                  Total Volume Locked
                </Typography>
              </Box>
              <Box marginTop={2} marginBottom={2}>
                <Typography
                  marginLeft={2}
                  variant="h2"
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
                    fontWeight: 600,
                  }}
                >
                  5,366,044
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Grid>
      <Grid item lg={3} md={6} sm={12} xs={12}>
        <Box
          sx={{
            background:
              "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
            borderRadius: "12px",
            padding: 4,
          }}
          height="240px"
        >
          <Box sx={{ textAlign: "right" }}>
            <CustomButton label="claim rewards" />
          </Box>
          <Box marginTop={2}>
            <Typography
              marginLeft={2}
              variant="subtitle1"
              sx={{ fontFamily: "Kanit", color: "white", opacity: 0.5 }}
            >
              Unclaimed
            </Typography>
          </Box>
          <Box display={"flex"} alignItems="center" marginTop={2}>
            <img src={imgThor} alt="thor" width={"32px"} />
            <Typography
              marginLeft={2}
              variant="h4"
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
              5.678
            </Typography>
          </Box>
          <Box display={"flex"} alignItems="center">
            <Typography
              variant="subtitle2"
              sx={{ fontFamily: "Kanit", color: "white", opacity: 0.5 }}
            >
              USD
            </Typography>
            <Typography
              marginLeft={2}
              variant="subtitle2"
              sx={{
                color: "white",
                fontFamily: "Kanit",
                fontWeight: 600,
              }}
            >
              $7000
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={3} md={6} sm={12} xs={12}>
        <Box
          sx={{
            background:
              "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
            borderRadius: "12px",
            padding: 4,
          }}
          height="240px"
        >
          <Box sx={{ textAlign: "right" }}>
            <CustomButton label="buy thor" />
          </Box>
          <Box marginTop={2}>
            <Typography
              marginLeft={2}
              variant="subtitle1"
              sx={{ fontFamily: "Kanit", color: "white", opacity: 0.5 }}
            >
              My Staked
            </Typography>
          </Box>
          <Box display={"flex"} alignItems="center" marginTop={2}>
            <img src={imgThor} alt="thor" width={"32px"} />
            <Typography
              marginLeft={2}
              variant="h4"
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
              5.678
            </Typography>
          </Box>
          <Box display={"flex"} alignItems="center">
            <Typography
              variant="subtitle2"
              sx={{ fontFamily: "Kanit", color: "white", opacity: 0.5 }}
            >
              USD
            </Typography>
            <Typography
              marginLeft={2}
              variant="subtitle2"
              sx={{
                color: "white",
                fontFamily: "Kanit",
                fontWeight: 600,
              }}
            >
              $7000
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeadCard;
