import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, NavLink } from "react-router-dom";
import useAppContext from "../hooks/useContext";
import { useTranslation } from "react-i18next";
import uzLogo from "../assets/icons/uzbekistan.png";
import ukLogo from "../assets/icons/united-kingdom.png";

const Header = () => {
  const { likedPosts } = useAppContext();
  const { t, i18n } = useTranslation();

  function changeLang(e) {
    i18n.changeLanguage(e.target.value);
  }

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
              {t("header.subtitle")}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing="15px"
            width="20%"
            justifyContent="end"
            alignItems="center"
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
            <Link
              style={{ color: "rgba(255, 0, 0, 0.6)", position: "relative" }}
              to="/likedPosts"
            >
              <FavoriteIcon />
              <Box
                sx={{
                  position: "absolute",
                  top: "-20%",
                  color: "white",
                  right: "-50%",
                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                  padding: "5px",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "10px",
                  fontWeight: "700",
                }}
              >
                {likedPosts.length}
              </Box>
            </Link>
            <Stack>
              <FormControl
                variant="outlined"
                sx={{
                  minWidth: 100,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSelect-select": {
                    padding: "5px 12px",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                <Select
                  labelId="lang-select-label"
                  id="lang-select"
                  onChange={changeLang}
                  defaultValue="en"
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                  sx={{
                    backgroundColor: "transparent",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <MenuItem value="en">
                    <img
                      src={ukLogo}
                      style={{ width: "20px", marginRight: "7px" }}
                    />
                    English
                  </MenuItem>
                  <MenuItem value="uz">
                    <img
                      src={uzLogo}
                      style={{ width: "20px", marginRight: "7px" }}
                    />{" "}
                    O'zbek
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
        </Toolbar>

        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" width="20%" spacing="10px" className="those">
            <NavLink to="/">{t("header.menu.home")}</NavLink>
            <NavLink to="/likedPosts">{t("header.menu.savedPosts")}</NavLink>
          </Stack>
          <Stack
            direction="row"
            width="50%"
            justifyContent="center"
            spacing="15px"
          >
            <NavLink>{t("header.menu.politics")}</NavLink>
            <NavLink>{t("header.menu.art")}</NavLink>
            <NavLink>{t("header.menu.science")}</NavLink>
            <NavLink>{t("header.menu.travel")}</NavLink>
            <NavLink>{t("header.menu.crime")}</NavLink>
          </Stack>

          <Stack width="20%" justifyContent="end" direction="row">
            <NavLink>{t("header.menu.contact")}</NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
