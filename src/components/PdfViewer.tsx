import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Box } from "@mui/material";

interface PDFViewerProps {
  pdf: string;
  renderTextLayer: boolean;
}

const PDFViewer = ({ pdf, renderTextLayer }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages &&
          Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={window.innerWidth}
              renderTextLayer={renderTextLayer}
            />
          ))}
      </Document>
    </Box>
  );
};

export default PDFViewer;
