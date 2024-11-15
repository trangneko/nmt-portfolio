import { Button, Container } from "@mui/material";
import { Helmet } from "react-helmet";
// import About from "./About";
import { UnderlinedTypography } from "./Containers";
import { useState } from "react";
import { Document, Page } from "react-pdf";

const ResumePage = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  // const containerRef = useRef<HTMLDivElement | null>(null);
  // const [containerWidth, setContainerWidth] = useState<number>(0);


  // useEffect(() => {
  //   if (containerRef.current) {
  //     // Set the initial width of the container
  //     setContainerWidth(containerRef.current.offsetWidth);
  //   }

  //   // Listen for window resize events to adjust the width dynamically
  //   const handleResize = () => {
  //     if (containerRef.current) {
  //       setContainerWidth(containerRef.current.offsetWidth);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <>
      <Helmet>
        <title>Resume | Lucide's Playground</title>
      </Helmet>
      <Container sx={{ py: 6 }}>
        <UnderlinedTypography variant="h2">RESUME</UnderlinedTypography>
        {/* <About /> */}
        <div>
          <Document
            file="./pdf/ux-resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={window.innerWidth * 0.65}  />
          </Document>
          <div>
            <Button
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={pageNumber <= 1}
            >
              Previous
            </Button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            {numPages && (
              <Button
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= numPages}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResumePage;
