import { Card, CardMedia, Typography, Box, IconButton } from "@mui/material";
import ActionsArea from "./ActionsArea";
import { Link } from "react-router-dom";
import useAppContext from "../hooks/useContext";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const SavedPosts = ({ ...rest }) => {
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
      sx={{ position: "relative" }}
      component={Link}
      to={`/detail/${rest.id}`}
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
          marginTop: "10px",
          marginLeft: "10px",
          zIndex: "100",
          "&:hover": {
            color: "rgba(201, 61, 61, 1)",
          },
        }}
      >
        <BookmarkIcon />
      </IconButton>
      <CardMedia
        component="img"
        height="350"
        width="100%"
        sx={{ position: "relative" }}
        image={`https://picsum.photos/seed/${rest.id}/300/200`}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40%",
          overflow: "hidden",
          zIndex: 1,
          backgroundColor: "rgba(28, 23, 23, 0.46)",
          p: 2,
          boxSizing: "border-box",
          color: "rgba(221, 224, 227, 1)",
        }}
      >
        <Typography variant="h6" fontSize="18px" sx={{ marginBottom: "20px" }}>
          {rest.title}
        </Typography>
        <ActionsArea {...rest} color="rgba(225, 232, 231, 1)" />
      </Box>
    </Card>
  );
};

export default SavedPosts;
