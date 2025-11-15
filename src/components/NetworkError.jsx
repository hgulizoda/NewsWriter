import { Box, Typography } from "@mui/material";
import SignalCellularNodataIcon from "@mui/icons-material/SignalCellularNodata";

const NetworkError = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "27vh",
        justifyContent: "center",
      }}
    >
      <SignalCellularNodataIcon Size="92px" />
      <Typography variant="h5" fontFamily="Roboto" sx={{ marginTop: "20px" }}>
        Unable to connect. Check your internet.
      </Typography>
    </Box>
  );
};

export default NetworkError;
