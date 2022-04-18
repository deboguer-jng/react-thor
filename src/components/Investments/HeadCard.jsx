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

import useDimensions from "../../dimension";

const HeadCard = () => {
  const { width } = useDimensions();

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
        paddingY: 4,
        marginBottom: 4,
      }}
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        // alignItems={"center"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
      >
        {width > 700 ? (
          <Box display={"flex"}>
            <img src={imgCoin} alt="coin" width={40} />
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
        ) : null}

        {width > 700 ? (
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
        ) : null}
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
                fontSize: "16px",
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
                fontSize: width > 700 ? "72px" : "40px",
              }}
            >
              $4,500,000
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "0px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              display={width > 700 ? "none" : "block"}
            ></Box>
            <Box
              marginTop={width > 700 ? 8 : 2}
              display="flex"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={{ xs: "column", sm: "row" }}
              >
                {width > 700 ? (
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
                ) : null}

                <Chip
                  sx={{
                    height: width > 700 ? "auto" : "24px",
                    borderRadius: 20,
                    color: "white",
                    marginLeft: width > 700 ? 2 : 0,
                    paddingY: width > 700 ? "0px" : "15px",
                  }}
                  deleteIcon={<IoMdClose color="white" />}
                  onDelete={handleDelete}
                  avatar={
                    <Avatar
                      alt="Natacha"
                      sx={{ width: "16px", height: "16px" }}
                      src="/static/images/avatar/1.jpg"
                    />
                  }
                  label={
                    <Box>
                      {width > 700 ? (
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
                      ) : null}

                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{
                          color: "white",
                          fontFamily: "Kanit",
                          fontWeight: 300,
                          marginTop: width > 700 ? -1 : 0,
                        }}
                      >
                        AVAX
                      </Typography>
                    </Box>
                  }
                  variant="outlined"
                />
              </Box>
              <Box display={width > 700 ? "none" : "flex"}>
                <Button
                  size="small"
                  variant="text"
                  sx={{ color: "#979BAC", opacity: 0.5, minWidth: "15px" }}
                >
                  1H
                </Button>
                <Button
                  // size="small"
                  variant="text"
                  sx={{ color: "#979BAC", opacity: 0.5, minWidth: "15px" }}
                >
                  1D
                </Button>
                <Button
                  size="small"
                  variant="text"
                  sx={{ color: "#979BAC", opacity: 0.5, minWidth: "15px" }}
                >
                  1W
                </Button>
                <Button
                  size="small"
                  variant="text"
                  sx={{ color: "#979BAC", opacity: 0.5, minWidth: "15px" }}
                >
                  1M
                </Button>
                <Button
                  size="small"
                  variant="text"
                  sx={{ color: "#979BAC", opacity: 0.5, minWidth: "15px" }}
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
                    minWidth: "15px",
                  }}
                >
                  ALL
                </Button>
              </Box>
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
