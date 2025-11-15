import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const MainCard = ({ ...rest }) => {
  return (
    <Card
      component={Link}
      to={`/detail/${rest.id}`}
      sx={{
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        flexDirection: "row",
        boxShadow: "none",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Stack direction="row" alignItems="center" spacing="10px">
          {rest.tags.map((tag) => (
            <Typography key={tag} sx={{ color: "grey" }}>
              #{tag}
            </Typography>
          ))}
        </Stack>
        <Typography variant="h6" fontWeight="500">
          {rest.title}
        </Typography>
        <Typography variant="body2">
          {rest.body.split(" ").slice(0, 20).join(" ")}...
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="100"
        sx={{ objectFit: "cover", width: "150px" }}
        image={`https://picsum.photos/seed/${rest.id}/300/200`}
      ></CardMedia>
    </Card>
  );
};

export default MainCard;
