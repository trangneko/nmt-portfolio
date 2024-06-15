import { Container } from "@mui/material";
import About from "./About";
import { UnderlinedTypography } from "./Containers";

const AboutPage = () => {
  return (
    <Container sx={{ py: 6}}>
        <UnderlinedTypography variant="h2">ABOUT ME</UnderlinedTypography>
      <About />
    </Container>
  );
};

export default AboutPage;
