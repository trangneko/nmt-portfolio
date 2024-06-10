import { Container, Typography } from "@mui/material";
import About from "./About";

const AboutPage = () => {
  return (
    <Container sx={{ py: 6}}>
        <Typography variant="h2">ABOUT ME</Typography>
      <About />
    </Container>
  );
};

export default AboutPage;
