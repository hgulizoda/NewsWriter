import { Box, Stack, Typography } from "@mui/material";
import useFetch from "../hooks/useFetch";
import LongPostCard from "../components/LongPostCard";
import MainCard from "../components/MainCard";
import HorizondalCard from "../components/HorizontalCard";
import NetworkError from "../components/NetworkError";
import Loader from "../components/Loader";
import useAppContext from "../hooks/useContext";

const Home = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/posts");

  if (error) return <NetworkError />;
  if (loading || !data.posts) return <Loader />;

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        className="container"
        width="100%"
      >
        <aside style={{ width: "20%", paddingRight: "20px" }}>
          {data.posts.slice(0, 2).map((post) => (
            <LongPostCard key={post.id} {...post} />
          ))}
        </aside>

        <main
          style={{
            borderInline: "1px solid lightgray",
            width: "60%",
            paddingInline: "20px",
          }}
        >
          <MainCard key={data.posts[2].id} {...data.posts[2]} />
        </main>

        <aside style={{ width: "20%", paddingLeft: "20px" }}>
          {data.posts.slice(3, 5).map((post) => (
            <LongPostCard key={post.id} {...post} />
          ))}
        </aside>
      </Box>

      <Box className="container" sx={{ marginTop: "100px" }}>
        <Typography style={{ marginBottom: "20px" }} variant="h4">
          HISTORY
        </Typography>
        <Stack direction="row" spacing="20px">
          {data.posts
            .filter((post) => post.tags.includes("history"))
            .slice(0, 4)
            .map((post) => (
              <LongPostCard key={post.id} {...post} />
            ))}
        </Stack>
      </Box>

      <Box className="container" sx={{ marginTop: "100px" }}>
        <Typography style={{ marginBottom: "20px" }} variant="h4">
          CLASSIC
        </Typography>
        <Box sx={{ width: "100%", display: "flex" }}>
          <main style={{ width: "65%", paddingRight: "20px" }}>
            <MainCard
              {...data.posts.filter((post) => post.tags.includes("classic"))[0]}
            />
          </main>
          <aside style={{ borderLeft: "1px solid lightgray", width: "35%" }}>
            {data.posts
              .filter((post) => post.tags.includes("classic"))
              .slice(1)
              .map((post) => (
                <HorizondalCard key={post.id} {...post} />
              ))}
          </aside>
        </Box>
      </Box>

      <Box className="container" sx={{ marginTop: "100px" }}>
        <Typography style={{ marginBottom: "20px" }} variant="h4">
          CRIME
        </Typography>
        <Stack direction="row" spacing="20px">
          {data.posts
            .filter((post) => post.tags.includes("crime"))
            .slice(0, 4)
            .map((post) => (
              <LongPostCard key={post.id} {...post} />
            ))}
        </Stack>
      </Box>
    </>
  );
};

export default Home;
