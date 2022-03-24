import React from "react";
import { Grid, Paper } from "@mui/material";
import card from "../../assets/svg/image.svg";
import fareya from "../../assets/freya-card.png";
import hammer from "../../assets/Image 1.png";
import odin from "../../assets/odin-card.png";
import "./style.css";
import CollectButton from "../Button";
const CreateNode = () => {
  return (
    <Grid className="node">
      <img src={card} alt="dsd" />
      <div>
        <div className="row mb-3 tab">
          <div className="text-white tabActive borderL">NEW</div>
          <div className="text-white borderH tabinActive">COMPOUND</div>
          <div className="text-white tabinActive">COMBINE</div>
        </div>
        <div className="text-white text-center">Number of Nodes</div>
        <div className="counter">
          <div className="minus">-</div>
          <div className="greyBack">
            <div className="goldnumber font-40">3</div>
          </div>
          <div className="minus">+</div>
        </div>
        <div className="text-white text-center">TOTAL</div>
        <div className="goldnumber text-center font-20">21.25 THOR</div>
      </div>
      <div className="column">
        <div className="text-white">Step 1 of 2</div>
        <input className="appinput" placeholder="Name your node" />
        <input className="appinput" placeholder="Name your node" />
        <input className="appinput" placeholder="Name your node" />
        <div className="buttonApprove">
          <CollectButton buttonText={"APPROVE CONTRACT"} />
        </div>
      </div>
    </Grid>
  );
};

export default CreateNode;
