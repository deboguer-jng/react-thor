import React from "react";

import {
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "react-query";

import { investments } from "../../utils/constants";
import { formatter } from "../../utils/utils";
import imgAvax from "../../assets/images/avax.png";
import { BsThreeDotsVertical } from "react-icons/bs";

import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

import ScrollArea from "react-scrollbar";

import useWindowsDimension from "../../dimension";
import { fetchSingleSymbolPrice } from "../../api/crypto_compare_apis";

const Investment = ({ investment }) => {
  const { width } = useWindowsDimension();
  const { isLoading, error, data, isFetching } = useQuery(
    `${investment.coin}-price`,
    () => fetchSingleSymbolPrice(investment.coin),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <TableRow>
      <TableCell>
        <Box display={"flex"} alignItems="center">
          <Box>
            <img
              src={imgAvax}
              width={width > 700 ? "40px" : "24px"}
              height={width > 700 ? "40px" : "24px"}
              alt="AVAX"
            />
          </Box>
          <Box marginLeft={"10px"}>
            <Typography
              component="div"
              sx={{
                color: "white",
                fontFamily: "Kanit",
                fontWeight: 500,
                fontSize: width > 700 ? "16px" : "10px",
              }}
            >
              {investment.protocol}
            </Typography>
            <Typography
              // variant="subtitle1"
              component="div"
              sx={{
                color: "white",
                fontFamily: "Kanit",
                fontWeight: 300,
                fontSize: width > 700 ? "14px" : "12px",
              }}
            >
              {investment.coin}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell>
        <Typography
          component="div"
          sx={{
            fontSize: width > 700 ? "16px" : "12px",
            color: "white",
            fontFamily: "Kanit",
            fontWeight: 300,
          }}
        >
          {isLoading || isFetching ? "-" : formatter.format(data.USD)}
        </Typography>
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isLoading || isFetching ? (
            "-"
          ) : (
            <>
              {data.USD > investment.initialValue ? (
                <MdOutlineArrowDropUp color="#48BB78" fontSize={28} />
              ) : (
                <MdOutlineArrowDropDown color="#ff4d4e" fontSize={28} />
              )}
              <Typography
                component="div"
                sx={{
                  color: "white",
                  fontFamily: "Kanit",
                  fontWeight: 300,
                  fontSize: width > 700 ? "16px" : "12px",
                }}
              >
                {Math.abs(
                  (data.USD / investment.initialValue) * 100 - 100
                ).toLocaleString()}
                %
              </Typography>
            </>
          )}
        </Box>
      </TableCell>
      <TableCell>
        {isLoading || isFetching ? (
          "-"
        ) : (
          <Typography
            component="div"
            sx={{
              color: data.USD > investment.initialValue ? "#48BB78" : "#ff4d4e",
              fontFamily: "Kanit",
              fontWeight: 300,
              fontSize: width > 700 ? "16px" : "12px",
            }}
          >
            {formatter.format(
              (data.USD / investment.initialValue) *
                investment.investmentAmount -
                investment.investmentAmount
            )}
          </Typography>
        )}
      </TableCell>
      <TableCell>
        <Typography
          component="div"
          sx={{
            color: "white",
            fontFamily: "Kanit",
            fontWeight: 300,
            fontSize: width > 700 ? "16px" : "12px",
          }}
        >
          {(
            investment.investmentAmount / investment.initialValue
          ).toLocaleString()}
        </Typography>
      </TableCell>
      <TableCell>
        <Box display={"flex"} alignItems="center">
          <Box>
            <Typography
              component="div"
              sx={{
                color: "white",
                fontFamily: "Kanit",
                fontWeight: 300,
                fontSize: width > 700 ? "16px" : "12px",
              }}
            >
              {formatter.format(investment.investmentAmount)}
            </Typography>
          </Box>

          <Box marginLeft={6}>
            <IconButton aria-label="dots" sx={{ color: "white" }}>
              <BsThreeDotsVertical />
            </IconButton>
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
};

const InvestTable = () => {
  return (
    <ScrollArea
      speed={0.8}
      contentClassName="content"
      horizontal={true}
      style={{ width: "100%", height: "35vh", borderRadius: "12px" }}
    >
      <TableContainer style={{ borderRadius: "12px", width: "100%" }}>
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
                Price
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 500,
                  color: "rgba(151,155,172,0.5)",
                  fontFamily: "Kanit",
                }}
              >
                Change
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 500,
                  fontFamily: "Kanit",
                  color: "rgba(151,155,172,0.5)",
                }}
              >
                P/L
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 500,
                  fontFamily: "Kanit",
                  color: "rgba(151,155,172,0.5)",
                }}
              >
                Investment ($)
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 500,
                  fontFamily: "Kanit",
                  color: "rgba(151,155,172,0.5)",
                }}
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {investments.map((investment, i) => (
              <Investment investment={investment} key={investment.coin} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ScrollArea>
  );
};

export default InvestTable;
