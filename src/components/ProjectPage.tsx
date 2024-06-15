import { Helmet } from "react-helmet";
import { FullHeightContainer } from "./Containers";
import Projects from "./Projects";

const ContactPage = () => {
  return (
    <>
    <Helmet>
      <title>Projects | Lucide's Playground</title>
    </Helmet>
    <FullHeightContainer>
      <Projects />
    </FullHeightContainer>
    </>
  );
};

export default ContactPage;