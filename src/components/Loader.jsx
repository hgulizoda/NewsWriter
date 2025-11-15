import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "21vh",
        width: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
