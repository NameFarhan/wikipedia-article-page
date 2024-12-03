import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import firstslider from "../Images/firstslider.webp";

const First_Row_First_Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { image: firstslider },
    { image: firstslider },
    { image: firstslider },
    { image: firstslider },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <Box
      sx={{
        width: "261px",
        maxWidth: 600,
        height: "316px", // Match image height
        overflow: "hidden",
        margin: "auto",
        position: "relative",
        borderTopLeftRadius: "15px",
        borderBottomRightRadius: "15px",
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="div"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transform: `translateX(${(index - currentIndex) * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {/* Background Image */}
          <Box
            component="img"
            src={image.image}
            alt={`Slide ${index + 1}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Bottom Overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "49px",
              bgcolor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                lineHeight: "49px",
                fontSize: "14px",
              }}
            >
              2021, Cérémonie des Oscars
            </Typography>
          </Box>

          {/* Top Right Box */}
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "160px",
              height: "25px",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                textAlign: "center",
              }}
            >
              Daniel KALUUYA, 32 🇬🇧
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default First_Row_First_Slider;
