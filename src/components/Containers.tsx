import { Container, styled, Typography } from "@mui/material";

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

export const UnderlinedTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  "&::after": {
    content: '""',
    display: "block",
    width: "70%", // Adjust the width as needed
    height: "4px", // Height of the underline
    backgroundColor: theme.palette.info.main, // Underline color
    margin: "5px auto 0", // Adjust margin as needed
    borderRadius: "2px", // Rounded corners for the underline
  },
}));
