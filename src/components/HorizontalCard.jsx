import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
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
    console.log(likedPosts);
  }
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
        position: "relative",
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
          color: `${!isOnSavedList ? "white" : "rgba(201, 61, 61, 1)"}`,
          backgroundColor: "#cec2c27f",
          top: "22%",
          right: "3%",
        }}
      >
        <BookmarkIcon />
      </IconButton>
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
        sx={{
          objectFit: "cover",
          width: "150px",
          height: "130px",
          aspectRatio: "1/1",
        }}
        image={`https://picsum.photos/seed/${rest.id}/300/200`}
      ></CardMedia>
    </Card>
  );
};

export default MainCard;
