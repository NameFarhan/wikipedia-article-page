import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import { WrapperMainContent } from "../Components/WrapperMainContent";
import React from "react";
import First_Row from "./First_Row";
import Second_Row from "./Second_Row";
import Third_Row from "./Third_Row";

const MainContent = ({ mainHeading }) => {
  const theme = useTheme();
  return (
    <>
      <WrapperMainContent>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "800",
            fontSize: {
              mobile: "20px",
              laptop: "25px",
            },
            mb: "2rem",
          }}
        >
          {mainHeading}
        </Typography>

        <Grid2 container spacing={12}>
          <Grid2
            item
            size={{
              mobile: 12,
              desktop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  desktop: "flex-start",
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <First_Row />
            </Box>
          </Grid2>
          {/* 2nd Component */}
          <Grid2
            item
            size={{
              mobile: 12,
              desktop: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
                height: "100%",
              }}
            >
              <Second_Row />
            </Box>
          </Grid2>

          {/* 3rd componenet */}

          <Grid2
            item
            size={{
              mobile: 12,
              desktop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-end",
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Third_Row />
            </Box>
          </Grid2>
        </Grid2>
      </WrapperMainContent>
    </>
  );
};

export default MainContent;
