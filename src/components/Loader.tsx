import React from "react";
import { useTheme } from "@mui/material";
import XlviLoader from "./LoaderLib";
import { FullHeightContainer } from "./Containers";
import Typography from "@mui/material/Typography";

const LoaderComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <FullHeightContainer>
      <XlviLoader
        boxColors={[
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.info.main, // Assuming you want to use 'info' for the tertiary color
        ]}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
      <Typography variant="h2" mt={6}>Welcome to My Playground</Typography>
    </FullHeightContainer>
  );
};

export default LoaderComponent;
