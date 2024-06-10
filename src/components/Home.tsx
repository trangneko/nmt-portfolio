import React from "react";
import logo from "./../ava.jpg";
import {
  Container,
  Divider,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import About from "./About";
import Contact from "./Contact";
import { FullHeightContainer } from "./Containers";

const Home: React.FC = () => {
  return (
    <Container sx={{ mb: 6 }}>
      <FullHeightContainer>
        <img src={logo} className="App-logo" alt="logo"/>
        <Typography variant="h2" component="h1" sx={{ my: 4, fontSize: {xs: "2.7rem", md: "3.75rem"}}} gutterBottom>
          Hi, I am Nguyen Minh Trang - <br />
          A Web Design Enthusiast from Vietnam.
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

        <KeyboardDoubleArrowDownRoundedIcon fontSize="large" />
      </FullHeightContainer>

      <About />

      <Contact />
    </Container>
  );
};

export default Home;
