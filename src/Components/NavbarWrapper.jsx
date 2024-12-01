import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export const NavbarWrapper = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "20px 10px",
            tablet: "30px 20px",
            laptop: "36px 60px",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};
