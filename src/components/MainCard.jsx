import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import useAppContext from "../hooks/useContext";
const MainCard = ({ ...rest }) => {
  const { likedPosts, setLikedPosts } = useAppContext();
  const isOnSavedList =
    likedPosts.findIndex((post) => post.id === rest.id) !== -1;
  function addToSaved() {
    if (isOnSavedList) {
      setLikedPosts(likedPosts.filter((post) => post.id !== rest.id));
    } else {
      setLikedPosts([...likedPosts, { ...rest, isSaved: true }]);
    }
  }

  console.log(likedPosts);

  return (
    <Card
      component={Link}
      to={`/detail/${rest.id}`}
      sx={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToSaved();
        }}
        sx={{
          position: "absolute",
          color: `${!isOnSavedList ? "white" : "rgba(251, 0, 0, 1)"}`,
          backgroundColor: "#cec2c27f",
          marginTop: "10px",
          marginLeft: "10px",
          "&:hover": {
            color: "rgba(201, 61, 61, 1)",
          },
        }}
      >
        <BookmarkIcon />
      </IconButton>
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
