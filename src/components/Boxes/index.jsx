import React from "react";
import imgNode1 from "../../assets/images/cards/nodeCard1.png";
import imgNode2 from "../../assets/images/cards/nodeCard2.png";
import imgNode3 from "../../assets/images/cards/nodeCard3.png";
import imgNode4 from "../../assets/images/cards/nodeCard4.png";
import { Grid, Paper } from "@mui/material";
import "./style.css";
const Boxes = ({ hideHover }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(4)).map((_, index) => (
        <Grid item xs={3} key={index}>
          <div className="spidercard">
            <img
              src={
                index === 0
                  ? imgNode2
                  : index === 1
                  ? imgNode3
                  : index === 2
                  ? imgNode1
                  : imgNode4
              }
              alt="cards"
              width={"auto"}
              height={"50px"}
            />

            {hideHover ? (
              <div className="spidernumber">1</div>
            ) : (
              <>
                <div className="spidernumber">2.113</div>
                <div className="hideBtn">Collect</div>
              </>
            )}
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Boxes;
