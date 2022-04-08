import React from "react";

import { Container, Box, Typography, Button } from "@mui/material";

import imgNode from "../../assets/images/earth.png";
import Cards from "./Cards";
import CustomButton from "../CustomButton";
import OutlinedButton from "../CustomButton/OutlinedButton";

const HeadCard = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        borderRadius: "10px",
        background:
          "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
        padding: 4,
        marginBottom: 4,
      }}
    >
      <Box display="flex">
        <Box flex={1} display="flex" justifyContent={"space-between"}>
          <Box>
            <Box display={"flex"} alignItems="center">
              <img src={imgNode} alt="coin" width={"32px"} height={"32px"} />
              <Typography
                component="div"
                color={"white"}
                fontWeight={500}
                sx={{
                  fontFamily: "Kanit",
                  opacity: 0.5,
                  marginLeft: 2,
                  fontSize: "44px",
                }}
              >
                My Nodes
              </Typography>
            </Box>
            <Container maxWidth="md" sx={{ marginLeft: 4 }}>
              <Typography
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
                  lineHeight: "144px",
                  fontSize: "96px",
                  fontWeight: 600,
                }}
              >
                8
              </Typography>
            </Container>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent="flex-end"
          >
            <Box marginBottom={2}>
              <OutlinedButton label={"claim all"} fontSize="12px" />
            </Box>
            <Box>
              <OutlinedButton label={"pay all fees"} fontSize="12px" />
            </Box>
          </Box>
        </Box>
        <Box flex={1} paddingX={4}>
          <Cards />
        </Box>
      </Box>
    </Container>
  );
};

export default HeadCard;
