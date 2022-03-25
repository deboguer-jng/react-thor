import React from "react";

import {
  Container,
  Box,
  Button,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";

import imgAvax from "../../assets/images/avax.png";
import { BsThreeDotsVertical } from "react-icons/bs";

const InvestTable = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
      <Box marginBottom={4}>
        <Box display={"flex"} justifyContent="space-between">
          <Box>
            <Button
              variant="contained"
              style={{
                background:
                  "linear-gradient(90deg, #2E62FF 26.2%, #4B24DC 100%)",
              }}
              sx={{
                borderRadius: 20,
                paddingX: 4,
                borderRadius: 20,
              }}
            >
              create node
            </Button>
          </Box>
          <Box display={"flex"} alignItems="center">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{ color: "white" }}>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  sx={{ color: "white" }}
                >
                  View All
                </InputLabel>
                <NativeSelect
                  inputProps={{
                    name: "View All",
                    id: "uncontrolled-native",
                  }}
                  sx={{ color: "white" }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
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
      <TableContainer
        component={Paper}
        style={{ backgroundColor: "transparent", borderRadius: "12px" }}
      >
        <Table
          style={{
            background:
              "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.48)",
          }}
          sx={{
            minWidth: 700,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{}}>
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
                RPC
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
                    color: "#48BB78",
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }}
                >
                  .196
                </Typography>
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
                  15 DAYS LEFT
                </Typography>
              </TableCell>
              <TableCell>
                <Box display={"flex"} alignItems="center">
                  <Box>
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
                      69,024.9592
                    </Typography>
                  </Box>

                  <Box marginLeft={2}>
                    <IconButton aria-label="dots" sx={{ color: "white" }}>
                      <BsThreeDotsVertical />
                    </IconButton>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box display={"flex"} alignItems="center">
                  <Box>
                    <img src={imgAvax} alt="AVAX" />
                  </Box>
                  <Box marginLeft={"10px"}>
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
                    marginTop: -1,
                  }}
                >
                  $76.00
                </Typography>
              </TableCell>
              <TableCell>
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
                  2.11%
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    color: "#48BB78",
                    fontFamily: "Kanit",
                    fontWeight: 300,
                    marginTop: -1,
                  }}
                >
                  $10,000
                </Typography>
              </TableCell>
              <TableCell>
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
                  69,024.9592
                </Typography>
              </TableCell>
              <TableCell>
                <Box display={"flex"} alignItems="center">
                  <Box>
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
                      69,024.9592
                    </Typography>
                  </Box>

                  <Box marginLeft={2}>
                    <IconButton aria-label="dots" sx={{ color: "white" }}>
                      <BsThreeDotsVertical />
                    </IconButton>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default InvestTable;
