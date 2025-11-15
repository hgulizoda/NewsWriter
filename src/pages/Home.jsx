import { Box, Stack } from "@mui/material";
import useFetch from "../hooks/useFetch";
import LongPostCard from "../components/LongPostCard";
import MainCard from "../components/MainCard";

const Home = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/posts");

  if (error) return <p>{error}</p>;
  if (loading || !data.posts) return <p>Loading...</p>;

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

      <Box className="container">
        <h4>HISTORY</h4>
        <Stack direction="row" spacing="20px">
          {data.posts
            .filter((post) => post.tags.includes("history"))
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
