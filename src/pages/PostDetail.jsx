import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import HorizontalCard from "../components/HorizontalCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ActionsArea from "../components/ActionsArea";
import { useTranslation } from "react-i18next";
const PostDetail = () => {
  const { postId } = useParams();
  const { data, error, loading } = useFetch(
    `https://dummyjson.com/posts/${postId}`
  );
  const { data: fullData } = useFetch("https://dummyjson.com/posts");
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (error) return <p>{error}</p>;
  if (loading || !data || !fullData.posts) return <Loader />;

  return (
    <>
      <Box
        className="container"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <main style={{ width: "70%" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="contained"
            sx={{ marginBlock: "20px" }}
            onClick={() => navigate(-1)}
          >
            {t("common.back")}
          </Button>
          <Stack direction="row" alignItems="center" spacing="10px">
            {data?.tags?.map((tag) => (
              <Typography key={tag} sx={{ color: "grey" }}>
                #{tag}
              </Typography>
            ))}
          </Stack>
          <Typography variant="h2" sx={{ marginBlock: "20px" }}>
            {data.title}
          </Typography>
          <img
            src={`https://picsum.photos/seed/${data.id}/300/200`}
            alt=""
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
          <Typography variant="body1" sx={{ marginBlock: "20px" }}>
            {data.body}
          </Typography>
          <ActionsArea {...data} />
        </main>

        <aside style={{ width: "30%" }}>
          {fullData?.posts
            .filter((post) => post.id !== data.id)
            .slice(0, 5)
            .map((post) => (
              <HorizontalCard key={post.id} {...post} />
            ))}
        </aside>
      </Box>
    </>
  );
};

export default PostDetail;
