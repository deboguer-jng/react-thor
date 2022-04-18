import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ label, fontSize, paddingHorizontal, fullWidth }) => {
  return (
    <Button
      fullWidth={fullWidth}
      sx={{
        borderRadius: "25px",
        fontFamily: "Kanit",
        background: "linear-gradient(90deg, #2E62FF 26.2%, #4B24DC 100%)",
        paddingX: paddingHorizontal,
        fontSize: fontSize,
        ":hover": {
          background:
            "linear-gradient(90.03deg, #2E62FF -100.44%, #4B24DC 1.55%, #2E62FF 100%)",
        },
        ":active": {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(90.03deg, #2E62FF -100.44%, #4B24DC 1.55%, #2E62FF 100%)",
        },
      }}
      size="small"
      variant="contained"
    >
      {label}
    </Button>
  );
};

export default CustomButton;
