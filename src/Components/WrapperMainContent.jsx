import { Box } from "@mui/material";
export const WrapperMainContent = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "10px 10px",
            tablet: "10px 10px",
            laptop: "10px 64px",
            desktop: "10px 62px",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};
