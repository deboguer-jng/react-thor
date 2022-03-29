import React from "react";
import Spider from "../../assets/images/spider.png";
import { Grid, Paper } from "@mui/material";
import "./style.css";
const Boxes = ({ Src }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(4)).map((_, index) => (
        <Grid item xs={3} key={index}>
          <div className="spidercard">
            <img src={Spider} alt="alt" width={"100%"} height={"100%"} />
            <div className="spidernumber">2.113</div>
          </div>
        </Grid>
      ))}
    </Grid>
    // <Grid sx={{ flexGrow: 1 }} container spacing={2}>
    //   <Grid item xs={12}>
    //     <Grid container justifyContent="center" spacing={2} mt={1}>
    //       {[0, 1, 2, 3].map((value) => (
    //         <div className="spidercard">
    //           <img src={Spider} alt="alt" height={60} />
    //           <div className="spidernumber">2.113</div>
    //         </div>
    //       ))}
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default Boxes;
