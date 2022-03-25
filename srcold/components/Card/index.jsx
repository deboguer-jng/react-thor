import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import rewardIcon from "../../assets/svg/rewardIcon.svg";
import Typography from "@mui/material/Typography";
import CollectButton from "../Button";
import Boxes from "../Boxes";
import "./style.css";
const Cards = ({ title, buttonText, number, noboxes, image }) => {
  return (
    <div className="card">
      <Grid style={{ justifyContent: "space-between", display: "flex" }}>
        <Box style={{ display: "flex" }}>
          <Box
            style={{
              width: 50,
              height: 50,
              borderRadius: 15,
              backgroundColor: "#333746",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img style={{ width: 30, height: 30 }} src={rewardIcon} alt="img" />
          </Box>
          <Typography
            variant="h5"
            component="div"
            style={{
              color: "white",
              fontFamily: "Kanit",
              fontStyle: "normal",
              fontSize: "20px",
              fontWeight: 500,
              marginLeft: 20,
              marginRight: 20,
              lineHeight: "30px",
            }}
          >
            <div>
              <div>{title}</div>
              <div className="goldnumber">{number}</div>
            </div>
          </Typography>
        </Box>
        <CollectButton buttonText={buttonText} />
      </Grid>
      {!noboxes && <Boxes />}
      {image && (
        <img
          src={image}
          alt="img"
          height={"109.95px"}
          width={"320.68px"}
          style={{ left: "463px" }}
        />
      )}
    </div>
  );
};

export default Cards;
