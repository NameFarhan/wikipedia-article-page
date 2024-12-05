import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center",mt:'2rem' }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "7px 14px",
              width: "70px",
              height: "70px",
              bgcolor: "black",
              color: "#fff",
              borderRadius: "15px",
              fontSize: {
                mobile: "30px",
                laptop: "40px",
              },
              fontWeight: "800",
            }}
          >
            W
          </Box>
          <Typography sx={{ fontSize: "12px", letterSpacing: "2px" }}>
            Faire un don | A propos | Politique de confidentialité | Nous
            contacter
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
