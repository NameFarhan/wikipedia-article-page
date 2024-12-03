import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const First_Row_Second_Slider = ({ images, heading, paragraph }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Typography
        sx={{
          fontWeight: "800",
          textAlign: "center",
          fontSize: {
            mobile: "15px",
            laptop: "18px",
          },
        }}
      >
        {heading}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "261px",
          maxWidth: "600px",
          height: "316px",
          overflow: "hidden",
          margin: "auto",
          borderRadius: "15px",
          borderTopLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="img"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />
        <Button
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            color: "#fff",
            minWidth: "45px",
            height: "45px",
            borderRadius: "50%",
            zIndex: 10,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            color: "#fff",
            minWidth: "45px",
            height: "45px",
            borderRadius: "50%",
            zIndex: 10,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
      <Typography
        sx={{
          fontWeight: "400",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        {paragraph}
      </Typography>
    </>
  );
};

export default First_Row_Second_Slider;
