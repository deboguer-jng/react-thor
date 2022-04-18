import React, { useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import imgCard from "../../../assets/images/cards/box-card3.png";
import CustomButton from "../../CustomButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ScrollArea from "react-scrollbar";
import styles from "../style.module.css";

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

  const increament = () => {
    if (total === "") {
      setTotal(1);
    } else {
      setTotal(parseInt(total) + 1);
    }
  };

  const decrement = () => {
    if (total > 1) {
      setTotal(total - 1);
    }
  };

  const handleInput = (e) => {
    const re = /^[0-9\b]+$/;

    if (total !== "") {
      if (e.target.value === "" || re.test(e.target.value)) {
        setTotal(e.target.value);
      }
    } else {
      if (re.test(e.target.value)) {
        setTotal(e.target.value);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      className={styles.childNodeContainer}
      flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
    >
      <Box flex={1} sx={{ textAlign: "center" }}>
        <Button sx={{ paddingY: "0" }} onClick={handleClick}>
          <img src={imgCard} width="189px" height="265px" alt="card" />
        </Button>
      </Box>
      <Box flex={2} sx={{ paddingX: 4, paddingY: 4 }}>
        <Box>
          <Box
            maxWidth={"340px"}
            sx={{
              borderRadius: "50px",
              height: "30px",
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
                  fontSize: "10px",
                }}
                size="small"
              >
                new
              </Button>
            ) : (
              <Button
                fullWidth
                sx={{ color: "white", padding: "10px", fontSize: "10px" }}
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
                  fontSize: "10px",
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
                  fontSize: "10px",
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
                  fontSize: "10px",
                }}
                size="small"
              >
                combine
              </Button>
            ) : (
              <Button
                fullWidth
                sx={{ color: "white", padding: "10px", fontSize: "10px" }}
                onClick={() => setValue(2)}
                size="small"
              >
                combine
              </Button>
            )}
          </Box>
        </Box>
        <Box marginTop={2}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Kanit",
              textAlign: "center",
              fontSize: "13px",
              lineHeight: "21px",
            }}
          >
            Number of Nodes
          </Typography>

          <Box display={"flex"} alignItems="center" marginTop={4}>
            <Box flex={1} sx={{ textAlign: "center" }}>
              <IconButton aria-label="remove" size="large" onClick={decrement}>
                <RemoveIcon sx={{ color: "white" }} fontSize="large" />
              </IconButton>
            </Box>
            <Box
              flex={1}
              sx={{
                width: "80px",
                backgroundColor: "#23242C",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <input
                type="text"
                value={total}
                onChange={handleInput}
                style={{
                  width: "100%",
                  height: "103px",
                  backgroundColor: "transparent",
                  border: "transparent",
                  color: "#FFF4D1",
                  fontSize: "90px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              />
            </Box>
            <Box flex={1} sx={{ textAlign: "center" }}>
              <IconButton aria-label="delete" size="large" onClick={increament}>
                <AddIcon sx={{ color: "white" }} fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box marginTop={2}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Kanit",
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            TOTAL
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Kanit",
              textAlign: "center",
              background:
                "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
              fontSize: "20px",
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
          style={{ height: "20vh", marginTop: "10px" }}
        >
          {total > 0 ? (
            <>
              {Array(parseInt(total))
                .fill(0)
                .map((v) => (
                  <input
                    key={v}
                    className={styles.appinput}
                    placeholder="Name your node"
                  />
                ))}
            </>
          ) : null}
        </ScrollArea>

        <Box sx={{ textAlign: "right", marginTop: 2 }}>
          {total > 1 ? (
            <CustomButton label="Create Nodes" />
          ) : (
            <CustomButton label="Create Node" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNode;
