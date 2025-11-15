import useAppContext from "../hooks/useContext";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import NetworkError from "../components/NetworkError";
import HorizontalCard from "../components/HorizontalCard";
import { Box, Typography } from "@mui/material";
import SavedPostCard from "../components/SavedPostCard";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LikedPosts = () => {
  const { likedPosts } = useAppContext();
  const { data, error, loading } = useFetch("https://dummyjson.com/posts");
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = likedPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) return <NetworkError />;
  if (loading || !data.posts) return <Loader />;

  return (
    <>
      <Box
        className="container"
        sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
      >
        <input
          disabled={!likedPosts.length}
          type="text"
          placeholder={t("common.enter")}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            outline: "none",
            border: "1px solid lightgray",
            width: "30%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <aside style={{ width: "25%" }}>
            {data.posts
              .filter((post) => !likedPosts.some((lp) => lp.id === post.id))
              .slice(0, 5)
              .map((post) => (
                <HorizontalCard key={post.id} {...post} />
              ))}
          </aside>
          <main
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              display: `${!likedPosts.length ? "flex" : "grid"}`,
              gap: "20px",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            {likedPosts.length ? (
              filteredPosts.length ? (
                filteredPosts.map((post) => (
                  <SavedPostCard key={post.id} {...post} />
                ))
              ) : (
                <Box
                  sx={{
                    marginTop: "30%",
                    marginLeft: "200px",
                  }}
                >
                  <Typography
                    variant="h4"
                    textAlign="center"
                    sx={{ width: "30vw" }}
                  >
                    {t("common.notFound")}
                  </Typography>
                </Box>
              )
            ) : (
              <Box
                sx={{
                  marginTop: "30%",
                  marginRight: "250px",
                }}
              >
                <Typography
                  variant="h4"
                  textAlign="center"
                  sx={{ width: "30vw" }}
                >
                  {t("common.noSaved")}
                </Typography>
              </Box>
            )}
          </main>
        </Box>
      </Box>
    </>
  );
};

export default LikedPosts;
