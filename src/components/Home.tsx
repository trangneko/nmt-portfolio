import React, { useRef } from "react";
import logo from "./../ava.jpg";
import { Box, Container, Divider, styled, Typography } from "@mui/material";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import About from "./About";
import Contact from "./Contact";
import { FullHeightContainer, UnderlinedTypography } from "./Containers";
import ProjectFeature from "./ProjectFeature";

const BouncingArrow = styled(KeyboardDoubleArrowDownRoundedIcon)(
  ({ theme }) => ({
    animation: "bounce 2s infinite",
    cursor: "pointer",
  })
);

const Home: React.FC = () => {
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  const handleArrowClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          Hi, I am Nguyen Minh Trang - <br />A Web Design Enthusiast from
          Vietnam.
        </Typography>
        <Typography variant="h4">
          Explore my work and get to know me.
        </Typography>
        <Divider
          sx={{
            my: 6,
            width: "80%",
            height: 4,
            backgroundColor: "primary.main",
          }}
        />

        <BouncingArrow fontSize="large" onClick={handleArrowClick} />
      </FullHeightContainer>

      <Box ref={nextSectionRef} py={6}>
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
