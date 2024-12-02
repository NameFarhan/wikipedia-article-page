import { Box } from "@mui/material";
import React from "react";
import First_Row_First_Slider from "./First_Row_First_Slider";

const First_Row = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <First_Row_First_Slider />
      </Box>
    </>
  );
};

export default First_Row;
