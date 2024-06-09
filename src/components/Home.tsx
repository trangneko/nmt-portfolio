import React from "react";
import logo from "./../ava.jpg";
import {
  Container,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import About from "./About";

const FullHeightContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
  textAlign: "center",
}));


const Home: React.FC = () => {
  return (
    <Container>
      <FullHeightContainer>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h2" component="h1" sx={{ my: 4 }} gutterBottom>
          Hi, I am Nguyen Minh Trang - A Web Design Enthusiast from Vietnam.
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
    </Container>
  );
};

export default Home;
