import logo from "./../ava.jpg";
import { Box, Container, Divider, styled, Typography } from "@mui/material";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import About from "./About";
import Contact from "./Contact";
import { FullHeightContainer, UnderlinedTypography } from "./Containers";
import ProjectFeature from "./ProjectFeature";
import { useTranslation } from "react-i18next";

const BouncingArrow = styled(KeyboardDoubleArrowDownRoundedIcon)(
  ({ theme }) => ({
    animation: "bounce 2s infinite",
    cursor: "pointer",
  })
);

interface HomeProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  scrollToAbout: () => void;
}

const Home: React.FC<HomeProps> = ({ aboutRef, scrollToAbout }) => {
  const { t } = useTranslation();

  return (
    <Container sx={{ mb: 6 }}>
      <FullHeightContainer>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ borderRadius: "20px" }}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{ my: 4, fontSize: { xs: "2.7rem", md: "3.75rem" } }}
          gutterBottom
        >
          {t("hello")}
          <br />
          {t("hello2")}
        </Typography>
        <Typography variant="h4">{t("helloDes")}</Typography>
        <Divider
          sx={{
            my: 6,
            width: "80%",
            height: 4,
            backgroundColor: "primary.main",
          }}
        />

        <BouncingArrow fontSize="large" onClick={scrollToAbout} />
      </FullHeightContainer>

      <Box ref={aboutRef} py={6} id="about">
        <UnderlinedTypography variant="h3">ABOUT ME</UnderlinedTypography>
        <About />
      </Box>

      <Box py={6}>
        <UnderlinedTypography variant="h3">
          FEATURED PROJECTS
        </UnderlinedTypography>
        <ProjectFeature />
      </Box>

      <Contact />
    </Container>
  );
};

export default Home;
