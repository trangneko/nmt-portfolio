
import { Container, styled } from "@mui/material";


export const FullHeightContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
  textAlign: "center",
}));


export const TwoColContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Align vertically centered
    gap: theme.spacing(2),
  }));
  