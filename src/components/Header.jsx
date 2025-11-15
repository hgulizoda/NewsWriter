import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <AppBar
        className="container"
        position="static"
        color="background.main"
        elevation={0}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            borderBottom: "1px solid lightgray",
            padding: "10px 0",
            paddingInline: "0",
          }}
        >
          <Stack direction="row" width="20%">
            <IconButton>
              <MenuIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Stack>

          <Stack>
            <Typography fontFamily="NewsReader" variant="h4" textAlign="center">
              Times Writer
            </Typography>
            <Typography variant="body2" color="primary.gray" textAlign="center">
              Get more info about the world
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing="15px"
            width="20%"
            justifyContent="end"
          >
            <Link>
              <FacebookIcon />
            </Link>
            <Link>
              <InstagramIcon />
            </Link>
            <Link>
              <YouTubeIcon />
            </Link>
            <Link>
              <TwitterIcon />
            </Link>
            <Link style={{ color: "rgba(255, 0, 0, 0.6)" }}>
              <FavoriteIcon />
            </Link>
          </Stack>
        </Toolbar>

        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" width="20%" spacing="10px">
            <NavLink>Home</NavLink>
            <NavLink>Saved Posts</NavLink>
          </Stack>
          <Stack
            direction="row"
            width="50%"
            justifyContent="center"
            spacing="15px"
          >
            <NavLink>Politics</NavLink>
            <NavLink>Art</NavLink>
            <NavLink>Science</NavLink>
            <NavLink>Travel</NavLink>
            <NavLink>Travel</NavLink>
          </Stack>

          <Stack width="20%" justifyContent="end" direction="row">
            <NavLink>Contact Us</NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
