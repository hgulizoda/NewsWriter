import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ActionsArea from "./ActionsArea";

const LongPostCard = ({ ...rest }) => {
  return (
    <Card
      component={Link}
      to={`/detail/${rest.id}`}
      sx={{
        textDecoration: "none",
        color: "inherit",
        paddingBottom: "20px",
        maxWidth: "25%",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={`https://picsum.photos/seed/${rest.id}/300/200`}
      ></CardMedia>
      <CardContent sx={{ paddingInline: "5px", height: "180px" }}>
        <Typography variant="h6">{rest.title}</Typography>
        <Typography variant="body2" color="grey.700">
          {rest.body.split(" ").slice(0, 30).join(" ")}...
        </Typography>
      </CardContent>
      <ActionsArea {...rest} />
    </Card>
  );
};

export default LongPostCard;
