import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { useTranslation } from "react-i18next";
const NetworkError = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "28vh",
        justifyContent: "center",
      }}
    >
      <ErrorIcon />
      <Typography variant="h5" fontFamily="Roboto" sx={{ marginTop: "20px" }}>
        {t("common.error")}
      </Typography>
    </Box>
  );
};

export default NetworkError;
