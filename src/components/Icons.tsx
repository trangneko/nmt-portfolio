import { List, ListItem, styled } from "@mui/material";


export const IconContainer = styled(List)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2), 
    flexWrap: "wrap"
  }));
  
export  const IconBox = styled(ListItem)<{ whiteBackground?: boolean }>(
    ({ theme, whiteBackground }) => ({
      width: 60, // Size of the icon container
      height: 60,
      backgroundColor: whiteBackground ? "white" : "rgba(0, 0, 0, 0.1)",
      borderRadius: "20%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: whiteBackground ? theme.spacing(1) : 0,
      overflow: "hidden",
    })
  );
  
export  const IconImage = styled("img")(({ theme }) => ({
    width: "100%", // Image should fit inside the container
    height: "100%",
    objectFit: "contain",
  }));