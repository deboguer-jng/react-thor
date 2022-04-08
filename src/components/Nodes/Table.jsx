import React from "react";

import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ScrollArea from "react-scrollbar";
import CustomButton from "../CustomButton";

import imgAvax from "../../assets/images/avax.png";
import imgCopy from "../../assets/images/copy.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "./style.module.css";

const InvestTable = () => {
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          marginBottom="10px"
        >
          <Box>
            <CustomButton label="create node" fontSize="14px" />
          </Box>
          <Box display={"flex"} alignItems="center">
            <Box sx={{ minWidth: 120, display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Kanit",
                  fontWeight: 300,
                }}
              >
                View All
              </Typography>
              <MdOutlineKeyboardArrowDown color="white" fontSize={22} />
            </Box>
            <Box marginLeft={2}>
              <input
                type="text"
                style={{
                  background: "gba(255, 255, 255, 0.9)",
                  boxShadow: "inset 0px 1px 4px #000000",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "transparent",
                }}
                placeholder="Search node name"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <ScrollArea
        speed={0.8}
        contentClassName="content"
        horizontal={false}
        style={{ height: "40vh" }}
      >
        <TableContainer
          // component={Paper}
          sx={{
            background:
              "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.48)",
          }}
          style={{
            backgroundColor: "transparent",
            borderRadius: "12px",
            width: "100%",
          }}
        >
          <Table
            sx={{
              minWidth: 700,
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    color: "rgba(151,155,172,0.5)",
                    fontFamily: "Kanit",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Kanit",
                    color: "rgba(151,155,172,0.5)",
                  }}
                >
                  Warrior
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: "rgba(151,155,172,0.5)",
                    fontFamily: "Kanit",
                  }}
                >
                  Date/Time
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Kanit",
                    color: "rgba(151,155,172,0.5)",
                  }}
                >
                  Rewards
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Kanit",
                    color: "rgba(151,155,172,0.5)",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Kanit",
                    color: "rgba(151,155,172,0.5)",
                  }}
                >
                  Tax
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Kanit",
                    color: "rgba(151,155,172,0.5)",
                  }}
                >
                  RPC
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3, 4, 5, 6, 7].map((v) => (
                <TableRow>
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "white",
                        fontFamily: "Kanit",
                        fontWeight: 300,
                      }}
                    >
                      galaxy2012
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems={"center"}>
                      <Box>
                        <img src={imgAvax} alt="AVAX" width={30} />
                      </Box>
                      <Box marginLeft={2}>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{
                            color: "white",
                            fontFamily: "Trojan",
                            fontWeight: 400,
                          }}
                        >
                          ODIN
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "white",
                        fontFamily: "Kanit",
                        fontWeight: 300,
                      }}
                    >
                      12/27/21, 8:55 AM
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#fff",
                        fontFamily: "Kanit",
                        fontWeight: 300,
                      }}
                    >
                      .196
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display={"flex"} alignItems="center">
                      <Box
                        sx={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#32B267",
                          borderRadius: "50%",
                        }}
                      ></Box>
                      <Typography
                        variant="subtitle3"
                        component="div"
                        sx={{
                          color: "white",
                          fontFamily: "Kanit",
                          fontWeight: 300,
                          marginLeft: 1,
                        }}
                      >
                        15 DAYS LEFT
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#fff",
                        fontFamily: "Kanit",
                        fontWeight: 300,
                      }}
                    >
                      40%
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display={"flex"} alignItems="center">
                      <Box className={styles.tooltipContainer}>
                        <img
                          src={imgAvax}
                          alt="AVAX"
                          width={"24px"}
                          height={"24px"}
                        />
                        <Box marginLeft={"3px"} marginTop="5px">
                          <MdOutlineKeyboardArrowDown
                            fontSize={"18px"}
                            color="white"
                          />
                        </Box>
                        {/* <Bn */}
                      </Box>

                      <Box marginLeft={2}>
                        <CustomButton label="claim" />
                      </Box>

                      <Box marginLeft={2}>
                        <Button
                          variant="outlined"
                          sx={{ borderRadius: "20px" }}
                          size="small"
                        >
                          pay fee
                        </Button>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ScrollArea>
    </>
  );
};

export default InvestTable;
