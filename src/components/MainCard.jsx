import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ActionsArea from "./ActionsArea";
const MainCard = ({ ...rest }) => {
  return (
    <Card
      component={Link}
      to={`/detail/${rest.id}`}
      sx={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <CardMedia
        component="img"
        height="480"
        image={`https://picsum.photos/seed/${rest.id}/300/200`}
      ></CardMedia>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "10px" }}
        spacing="10px"
      >
        {rest.tags.map((tag) => (
          <Typography key={tag} sx={{ color: "grey" }}>
            #{tag}
          </Typography>
        ))}
      </Stack>
      <CardContent>
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="500"
          sx={{ marginBottom: "20px" }}
        >
          {rest.title}
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          {rest.body.split(" ").slice(0, 50).join(" ")}...
        </Typography>
      </CardContent>
      <Stack alignItems="center" sx={{ marginTop: "30px" }}>
        <Button variant="contained" endIcon={<ArrowForwardIcon />}>
          Learn More
        </Button>
      </Stack>
    </Card>
  );
};

export default MainCard;
