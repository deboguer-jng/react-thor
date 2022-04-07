import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ label, fontSize }) => {
  return (
    <Button
      sx={{
        borderRadius: "25px",
        fontFamily: "Kanit",
        background: "linear-gradient(90deg, #2E62FF 26.2%, #4B24DC 100%)",
        fontSize: fontSize,
      }}
      size="small"
      variant="contained"
    >
      {label}
    </Button>
  );
};

export default CustomButton;
