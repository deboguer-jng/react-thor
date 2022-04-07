import React, { useState } from "react";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import imgCard from "../../../assets/images/svg/image.svg";
import "./style.css";
import CollectButton from "../../CustomButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ScrollArea from "react-scrollbar";

const CreateNode = ({ onClick }) => {
  const [value, setValue] = useState(2);
  const [total, setTotal] = useState(1);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleClick = () => {
    onClick(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
      flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
    >
      <Box flex={1} sx={{ textAlign: "center" }}>
        <Button padding={0} onClick={handleClick}>
          <img src={imgCard} alt="card" />
        </Button>
      </Box>
      <Box flex={2} sx={{ paddingX: 4, paddingY: 6 }}>
        <Box>
          <Box
            maxWidth={"340px"}
            sx={{
              borderRadius: "50px",
              border: "1px solid white",
              display: "flex",
              overflow: "hidden",
            }}
          >
            {value === 0 ? (
              <Button
                fullWidth
                sx={{
                  background:
                    "linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.64)",
                  color: "white",
                  borderRadius: "0",
                  padding: "10px",
                  fontSize: "12px",
                }}
                size="small"
              >
                new
              </Button>
            ) : (
              <Button
                fullWidth
                sx={{ color: "white", padding: "10px", fontSize: "12px" }}
                onClick={() => setValue(0)}
                size="small"
              >
                new
              </Button>
            )}

            {value === 1 ? (
              <Button
                fullWidth
                sx={{
                  background:
                    "linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.64)",
                  color: "white",
                  borderRadius: "0",
                  padding: "10px",
                  fontSize: "12px",
                }}
                size="small"
              >
                compound
              </Button>
            ) : (
              <Button
                fullWidth
                sx={{
                  color: "white",
                  padding: "10px",
                  fontSize: "12px",
                  borderLeft: "1px solid #ccc",
                  borderRight: "1px solid #ccc",
                  borderRadius: 0,
                }}
                onClick={() => setValue(1)}
                size="small"
              >
                compound
              </Button>
            )}

            {value === 2 ? (
              <Button
                fullWidth
                sx={{
                  background:
                    "linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.64)",
                  color: "white",
                  borderRadius: "0",
                  padding: "10px",
                  fontSize: "12px",
                }}
                size="small"
              >
                combine
              </Button>
            ) : (
              <Button
                fullWidth
                sx={{ color: "white", padding: "10px", fontSize: "12px" }}
                onClick={() => setValue(2)}
                size="small"
              >
                combine
              </Button>
            )}
          </Box>
        </Box>
        <Box marginTop={4}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontFamily: "Kanit", textAlign: "center" }}
          >
            Number of Nodes
          </Typography>

          <Box display={"flex"} alignItems="center" marginTop={4}>
            <Box flex={1} sx={{ textAlign: "center" }}>
              <IconButton
                aria-label="remove"
                size="large"
                onClick={() => setTotal(total - 1)}
              >
                <RemoveIcon sx={{ color: "white" }} fontSize="large" />
              </IconButton>
            </Box>
            <Box
              flex={1}
              sx={{ backgroundColor: "#23242C", borderRadius: "10px" }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontFamily: "Kanit",
                  textAlign: "center",
                  background:
                    "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {total}
              </Typography>
            </Box>
            <Box flex={1} sx={{ textAlign: "center" }}>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => setTotal(total + 1)}
              >
                <AddIcon sx={{ color: "white" }} fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box marginTop={2}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontFamily: "Kanit", textAlign: "center" }}
          >
            TOTAL
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "Kanit",
              textAlign: "center",
              background:
                "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
            }}
          >
            21.25 THOR
          </Typography>
        </Box>
      </Box>
      <Box flex={2} paddingX={2} paddingY={4}>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontFamily: "Kanit",
            fontWeight: 600,
            opacity: 0.6,
          }}
        >
          Step 1 of 2
        </Typography>

        <ScrollArea
          speed={0.8}
          contentClassName="content"
          horizontal={false}
          style={{ height: "30vh", marginTop: "10px" }}
        >
          {total > 0 ? (
            <>
              {Array(total)
                .fill(0)
                .map((v) => (
                  <input
                    key={v}
                    className="appinput"
                    placeholder="Name your node"
                  />
                ))}
            </>
          ) : null}
        </ScrollArea>

        <Box sx={{ textAlign: "right", marginTop: 2 }}>
          <CollectButton label="APPROVE CONTRACT" />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNode;
