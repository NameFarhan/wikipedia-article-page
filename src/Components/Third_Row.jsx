import { useTheme } from "@emotion/react";
import { Box, Typography, Button } from "@mui/material";
import NightMode from "../Components/NightMode";
import React from "react";
import Third_Row_Avatar from "./Third_Row_Avatar";

const Third_Row = () => {
  const theme = useTheme();
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "60px",
          width: "100%",
        }}
      >
        {/* night button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <NightMode />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontWeight: "800",
                fontSize: {
                  mobile: "12px",
                },
              }}
            >
              Co-auteurs{" "}
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontWeight: "400",
                fontSize: {
                  mobile: "10px",
                },
                letterSpacing: "1px",
              }}
            >
              Voir tout{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "#F8F8F8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
              padding: "20px 20px",
              mt: "2rem",
            }}
          >
            <Third_Row_Avatar />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "800",
              fontSize: {
                mobile: "12px",
              },
            }}
          >
            Articles similaires
          </Typography>
          <Box
            sx={{
              bgcolor: "#F8F8F8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
              padding: "20px 20px",
              mt: "2rem",
            }}
          >
            <Third_Row_Avatar secondAvatar={true} />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "800",
              fontSize: {
                mobile: "12px",
              },
            }}
          >
            Sources
          </Typography>
          <Box
            sx={{
              bgcolor: "#F8F8F8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "15px",
              padding: "20px 20px",
              mt: "2rem",
              gap: "10px",
              width: "100%", // Ensure container takes full width
            }}
          >
            {[
              "https://www.imdb.com/name/nm2257207/",
              "https://www.vice.com/en/article/53jbkn/daniel",
              "https://www.allocine.fr/film/fichefilm-180179/-",
            ].map((link, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: "600px", // Limit width to keep alignment neat
                }}
              >
                <Typography
                  sx={{
                    flex: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis", // Truncate if text is too long
                  }}
                  title={link} // Show full link on hover
                >
                  {link}
                </Typography>
                <Button
                  variant="text"
                  color="secondary"
                  size="small"
                  onClick={() => handleCopy(link)}
                  sx={{ textTransform: "none", minWidth: "50px" }}
                >
                  Copy
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Third_Row;
