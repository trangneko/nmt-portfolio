import { Box, Button, Container } from "@mui/material";
import { Helmet } from "react-helmet";
// import About from "./About";
import { UnderlinedTypography } from "./Containers";
import { Download } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const ResumePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("resume")} | Lucide's Playground</title>
      </Helmet>
      <Container sx={{ py: 6 }}>
        <UnderlinedTypography variant="h2">{t("resume")}</UnderlinedTypography>
        {/* <About /> */}
        <Box sx={{ my: 2, display: "flex", justifyContent: "end" }}>
          <Button variant="outlined" startIcon={<Download/>} href={t("resumeDownloadLink")} target="_blank">{t("downloadButton")}</Button>
        </Box>
        <iframe title="Resume" src={t("resumeViewLink")} width="100%" style={{height: "80vh"}} allow="autoplay"></iframe>
      </Container>
    </>
  );
};

export default ResumePage;
