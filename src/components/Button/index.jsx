import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CollectButton = ({buttonText}) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        style={{
          borderRadius: "25px",
          marginTop: 10,
          height: 40,
          fontFamily: "Kanit",
          background: "linear-gradient(90deg, #2E62FF 26.2%, #4B24DC 100%)",
        }}
        variant="contained"
      >
        {buttonText}
      </Button>
    </Stack>
  );
};

export default CollectButton;
