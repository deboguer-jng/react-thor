import React from "react";

import {
  Container,
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
} from "@mui/material";

import imgCoin from "../../assets/images/coin.png";
import imgGraph from "../../assets/images/updown-graph.png";
import { IoMdClose } from "react-icons/io";

const HeadCard = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

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
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
      >
        <Box display={"flex"}>
          <img src={imgCoin} alt="coin" width={40} />{" "}
          <Typography
            variant="h4"
            component="div"
            color={"white"}
            fontWeight={500}
            sx={{ fontFamily: "Kanit", opacity: 0.5, marginLeft: 2 }}
          >
            Investments
          </Typography>
        </Box>
        <Box>
          <Button
            size="small"
            variant="text"
            sx={{ color: "#979BAC", opacity: 0.5 }}
          >
            1H
          </Button>
          <Button
            size="small"
            variant="text"
            sx={{ color: "#979BAC", opacity: 0.5 }}
          >
            1D
          </Button>
          <Button
            size="small"
            variant="text"
            sx={{ color: "#979BAC", opacity: 0.5 }}
          >
            1W
          </Button>
          <Button
            size="small"
            variant="text"
            sx={{ color: "#979BAC", opacity: 0.5 }}
          >
            1M
          </Button>
          <Button
            size="small"
            variant="text"
            sx={{ color: "#979BAC", opacity: 0.5 }}
          >
            1Y
          </Button>
          <Button
            size="small"
            variant="text"
            sx={{
              background:
                "linear-gradient(131.78deg, #EEEEEE 12.72%, #D4C78C 21.39%, #DEBF70 34.64%, #AE9555 44.61%, #A78C47 57.04%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            ALL
          </Button>
        </Box>
      </Box>
      <Box marginX={{ xs: 0, sm: 0, md: 7 }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: "Kanit",
                fontWeight: 400,
              }}
            >
              Portfolio balance
            </Typography>
            <Typography
              variant="h3"
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
              $4,500,000
            </Typography>
            <Box
              marginTop={8}
              display="flex"
              alignItems={"center"}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                sx={{
                  color: "white",
                  fontFamily: "Kanit",
                  fontWeight: 500,
                }}
              >
                Showing:
              </Typography>
              <Chip
                sx={{
                  height: "auto",
                  borderRadius: 20,
                  color: "white",
                  paddingX: "5px",
                  marginLeft: 2,
                }}
                deleteIcon={<IoMdClose color="white" />}
                onDelete={handleDelete}
                avatar={
                  <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
                }
                label={
                  <Box marginLeft={"5px"} marginRight={"10px"}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "white",
                        fontFamily: "Kanit",
                        fontWeight: 500,
                      }}
                    >
                      Avalanche
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "white",
                        fontFamily: "Kanit",
                        fontWeight: 300,
                        marginTop: -1,
                      }}
                    >
                      AVAX
                    </Typography>
                  </Box>
                }
                variant="outlined"
              />
            </Box>
          </Box>
          <Box>
            <Container maxWidth="sm" sx={{ marginTop: 2 }}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: "#48BB78",
                  fontFamily: "Kanit",
                  fontWeight: 400,
                  textAlign: "end",
                }}
              >
                +200%
              </Typography>
            </Container>

            <img src={imgGraph} alt="graph" width={"80%"} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeadCard;
