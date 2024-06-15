import { Container } from "@mui/material";
import { Helmet } from "react-helmet";
import About from "./About";
import { UnderlinedTypography } from "./Containers";

const AboutPage = () => {
  return (
    <>
    <Helmet>
      <title>About Me | Lucide's Playground</title>
    </Helmet>
    <Container sx={{ py: 6}}>
        <UnderlinedTypography variant="h2">ABOUT ME</UnderlinedTypography>
      <About />
    </Container>
    </>
  );
};

export default AboutPage;
