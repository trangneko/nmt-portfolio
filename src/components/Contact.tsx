import React from "react";
import {
  Container,
  Typography,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  List,
  ListItem,
  styled,
} from "@mui/material";
import { TwoColContainer } from "./Containers";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as GmailIcon } from "../assets/gmail.svg";
import { ReactComponent as GitHubIcon } from "../assets/github-square.svg";
import { ReactComponent as BehanceIcon } from "../assets/behance-square.svg";

const StyledIcon = styled("svg")(({ theme }) => ({
  width: "24px",
  height: "24px",
  fill: "currentColor",
}));

interface IconLinkProps {
  href: string;
  icon: React.ReactElement;
  text: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon, text }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href} target={"_blank"}>
        <ListItemIcon sx={{ mr: 2, color: "inherit" }}>
          {React.cloneElement(icon, { component: StyledIcon })}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              {text}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

const Contact = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        CONTACT ME
      </Typography>
      <TwoColContainer sx={{ justifyContent: "space-around" }}>
        <List>
          <IconLink
            href="https://linkedin.com/in/lucide"
            icon={<LinkedInIcon />}
            text="linkedin.com/lucide"
          />
          <IconLink
            href="mailto:lucideneko@gmail.com"
            icon={<GmailIcon />}
            text="lucideneko@gmail.com"
          />
        </List>
        <List>
          <IconLink
            href="https://github.com/trangneko"
            icon={<GitHubIcon />}
            text="github.com/trangneko"
          />
          <IconLink
            href="https://www.behance.net/trangnguyen537"
            icon={<BehanceIcon />}
            text="behance.net/trangnguyen537"
          />
        </List>
      </TwoColContainer>
    </Container>
  );
};

export default Contact;
