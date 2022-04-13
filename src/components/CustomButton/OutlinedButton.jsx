import React from "react";

import { Button } from "@mui/material";

const OutlinedButton = ({ label, fontSize, paddingX, width }) => {
  return (
    <Button
      sx={{
        borderRadius: "25px",
        fontFamily: "Kanit",
        width: width,
        fontSize: fontSize,
        borderColor: "white",
        color: "white",
        ":hover": {
          textShadow: " 0px 0px 11px rgba(255, 255, 255, 0.75)",
          borderColor: "white",
        },
        ":active": {
          background: "rgba(46, 98, 255, 0.1)",
          border: "0.5px solid #FFFFFF",
        },
      }}
      size="small"
      variant="outlined"
    >
      {label}
    </Button>
  );
};

export default OutlinedButton;
