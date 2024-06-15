import Contact from "./Contact";
import { Helmet } from 'react-helmet';
import { FullHeightContainer } from "./Containers";

const ContactPage = () => {
  return (
    <>
    <Helmet>
      <title>Contact | Lucide's Playground</title>
    </Helmet>
    <FullHeightContainer>
      <Contact />
    </FullHeightContainer></>
  );
};

export default ContactPage;