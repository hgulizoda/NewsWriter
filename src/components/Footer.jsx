import { Typography, Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const newsItems = t("footer.sections.news.items", { returnObjects: true });
  const artsItems = t("footer.sections.arts.items", { returnObjects: true });
  const lifestyleItems = t("footer.sections.lifestyle.items", {
    returnObjects: true,
  });
  const opinionItems = t("footer.sections.opinion.items", {
    returnObjects: true,
  });
  const entertainmentItems = t("footer.sections.entertainment.items", {
    returnObjects: true,
  });
  const moreItems = t("footer.sections.more.items", { returnObjects: true });
  const accountItems = t("footer.sections.account.items", {
    returnObjects: true,
  });
  const bottomItems = t("footer.bottom.links", { returnObjects: true });
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
              <Typography>{t("footer.sections.news.title")}</Typography>
              {newsItems.map((item, index) => (
                <Link key={index}>{item}</Link>
              ))}
            </Stack>
            <Stack spacing="10px">
              <Typography>{t("footer.sections.arts.title")}</Typography>
              {artsItems.map((item, index) => (
                <Link key={index}>{item}</Link>
              ))}
            </Stack>
            <Stack spacing="10px">
              <Typography>{t("footer.sections.lifestyle.title")}</Typography>
              {lifestyleItems.map((item, index) => (
                <Link key={index}>{item}</Link>
              ))}
            </Stack>
            <Stack spacing="10px">
              <Typography>{t("footer.sections.opinion.title")}</Typography>
              {opinionItems.map((item, index) => (
                <Link key={index}>{item}</Link>
              ))}
            </Stack>

            <Stack spacing="10px">
              <Typography>
                {t("footer.sections.entertainment.title")}
              </Typography>
              {entertainmentItems.map((item, index) => (
                <Link key={index}>{item}</Link>
              ))}
            </Stack>

            <Stack spacing="10px">
              <Typography>{t("footer.sections.more.title")}</Typography>
              {moreItems.map((item, index) => (
                <Link key={index}>{item}</Link>
              ))}
            </Stack>
          </Stack>

          <Stack>
            <Stack spacing="10px">
              <Typography>{t("footer.sections.account.title")}</Typography>
              <Link>{accountItems[0]}</Link>
              <Link
                style={{
                  borderBottom: "1px solid lightgray",
                  paddingBottom: "20px",
                  marginBottom: "10px",
                }}
              >
                {accountItems[1]}
              </Link>
              <Link>{accountItems[2]}</Link>
              <Link>{accountItems[3]}</Link>
              <Link>{accountItems[4]}</Link>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          className="footer-bottom"
          sx={{ paddingBottom: "20px" }}
        >
          <Link>{t("footer.bottom.copyright")}</Link>
          {bottomItems.map((item, index) => (
            <Link key={index}>{item}</Link>
          ))}
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
