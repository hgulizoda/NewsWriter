import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Stack, Typography } from "@mui/material";

const ActionsArea = ({ reactions, views }) => {
  return (
    <Stack
      direction="row"
      spacing="20px"
      sx={{ color: "grey", marginBottom: "20px", paddingInline: "10px" }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <ThumbUpIcon fontSize="12px" />
        {reactions.likes}
      </Typography>
      <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <ThumbDownIcon fontSize="12px" />
        {reactions.dislikes}
      </Typography>
      <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <RemoveRedEyeIcon fontSize="12px" />
        {views}
      </Typography>
    </Stack>
  );
};

export default ActionsArea;
