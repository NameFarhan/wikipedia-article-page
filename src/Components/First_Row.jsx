import { Box } from "@mui/material";
import React from "react";
import First_Row_First_Slider from "./First_Row_First_Slider";
import First_Row_Second_Slider from "./First_Row_Second_Slider";
import First_Row_Third_Slider from "./First_Row_Third_Slider";
import secondslider from "../Images/secondslider.webp";
import thirdsliderimage from "../Images/thirdsliderimage.webp";

const First_Row = () => {
  const images = [
    secondslider, // First image remains fixed
    "https://picsum.photos/id/1015/600/300", // Dummy image 1
    "https://picsum.photos/id/1025/600/300", // Dummy image 2
  ];

  const ThirdSliderImages = [
    thirdsliderimage, // First image remains fixed
    "https://picsum.photos/id/1015/600/300", // Dummy image 1
    "https://picsum.photos/id/1025/600/300", // Dummy image 2
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "65px",
        justifyContent: {
          mobile: "center",
          desktop: "unset ",
        },
      }}
    >
      <First_Row_First_Slider />
      <First_Row_Second_Slider
        images={images}
        heading={"Filmographie"}
        paragraph={"2017, Get out"}
      />
      <First_Row_Third_Slider
        ThirdSliderImages={ThirdSliderImages}
        heading={"Distinctions"}
        paragraph={"2021 - Oscar Meilleur acteur dans un second rôle"}
      />
    </Box>
  );
};

export default First_Row;
