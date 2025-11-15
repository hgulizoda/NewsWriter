import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./style/theme";
import Home from "./pages/Home";
import LikedPosts from "./pages/LikedPosts";
import PostDetail from "./pages/PostDetail";
import Layout from "./components/Layout";
import { Context } from "./context";
import { useState } from "react";

const App = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ likedPosts, setLikedPosts }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:postId" element={<PostDetail />} />
            <Route path="/likedPosts" element={<LikedPosts />} />
          </Route>
        </Routes>
      </Context.Provider>
    </ThemeProvider>
  );
};

export default App;
