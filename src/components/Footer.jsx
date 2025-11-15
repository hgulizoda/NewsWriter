import { Typography, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container" style={{ marginTop: "50px" }}>
      <Typography
        variant="h5"
        fontFamily="NewsReader"
        sx={{ marginBottom: "30px" }}
      >
        Times Writer
      </Typography>
      <Box>
        <Stack
          direction="row"
          sx={{
            borderBottom: "1px solid lightgray",
            paddingBottom: "20px",
            marginBottom: "20px",
          }}
        >
          <Stack
            direction="row"
            width="80%"
            justifyContent="space-between"
            sx={{
              borderRight: "1px solid lightgray",
              paddingRight: "50px",
              marginRight: "50px",
            }}
          >
            <Stack spacing="10px">
              <Typography>NEWS</Typography>
              <Link to="/">Home Page</Link>
              <Link>Uzbekistan</Link>
              <Link>World</Link>
              <Link>Politics</Link>
              <Link>Sports</Link>
              <Link>Business</Link>
            </Stack>
            <Stack spacing="10px">
              <Typography>ARTS</Typography>
              <Link>Book review</Link>
              <Link>Best Seller Book List</Link>
              <Link>Dance</Link>
              <Link>Movies</Link>
            </Stack>
            <Stack spacing="10px">
              <Typography>LIFESTYLE</Typography>
              <Link>Health</Link>
              <Link>Food</Link>
              <Link>Restaurants</Link>
              <Link>Travel</Link>
              <Link>Style</Link>
              <Link>Fashion</Link>
              <Link>Love</Link>
            </Stack>
            <Stack spacing="10px">
              <Typography>OPINION</Typography>
              <Link>Today's opinion</Link>
              <Link>Columnists</Link>
              <Link>Editorials</Link>
              <Link>Letters</Link>
              <Link>Op-docs</Link>
            </Stack>

            <Stack spacing="10px">
              <Typography>Entertainment</Typography>
              <Link>Social Media</Link>
              <Link>Instagram</Link>
              <Link>Hobbies</Link>
              <Link>Television</Link>
            </Stack>

            <Stack spacing="10px">
              <Typography>MORE</Typography>
              <Link>Graphics</Link>
              <Link>Games</Link>
              <Link>Audio</Link>
              <Link>Jobs</Link>
              <Link>Trending</Link>
              <Link>Reader center</Link>
              <Link>Times Machine</Link>
              <Link>Cooking</Link>
              <Link>Education</Link>
              <Link>Science</Link>
            </Stack>
          </Stack>

          <Stack>
            <Stack spacing="10px">
              <Typography>ACCOUNT</Typography>
              <Link>Subscribe</Link>
              <Link
                style={{
                  borderBottom: "1px solid lightgray",
                  paddingBottom: "20px",
                  marginBottom: "10px",
                }}
              >
                Manage my account
              </Link>
              <Link>Group Subscriptions</Link>
              <Link>Gift Articles</Link>
              <Link>Email Newsletters</Link>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          className="footer-bottom"
          sx={{ paddingBottom: "20px" }}
        >
          <Link>© 2025 The New York Times Company</Link>
          <Link>Contact Us</Link>
          <Link>Accessibility</Link>
          <Link>Work with us</Link>
          <Link>Advertise</Link>
          <Link>Privacy policy</Link>
          <Link>Cookie policy</Link>
          <Link>Terms of service</Link>
          <Link>Help</Link>
          <Link>Subscriptions</Link>
          <Link>Site map</Link>
          <Link>Terms of Sale</Link>
          <Link>T brand studio</Link>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
