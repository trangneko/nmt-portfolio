import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Drawer,
  ListItemButton,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconBox } from "./Icons";
import logo from "./../ava.jpg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerList = () => (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <HomeRoundedIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/about">
            <AccountCircleRoundedIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/projects">
            <AccountTreeRoundedIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/contact">
            <MailRoundedIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <LanguageIcon sx={{ marginRight: 1 }} />
            <LanguageSwitcher />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              color: theme.palette.primary.contrastText,
            }}
          >
            <IconBox sx={{ margin: "5px" }}>
              <img src={logo} alt="icon" width={"100%"} />
            </IconBox>
            <Typography variant="h6" component="div" sx={{ color: "inherit" }}>
              Lucide's playground
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button color="inherit" component={Link} to="/">
              <HomeRoundedIcon sx={{ marginRight: 1 }} />
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              <AccountCircleRoundedIcon sx={{ marginRight: 1 }} />
              About
            </Button>
            <Button color="inherit" component={Link} to="/projects">
              <AccountTreeRoundedIcon sx={{ marginRight: 1 }} />
              Projects
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              <MailRoundedIcon sx={{ marginRight: 1 }} />
              Contact
            </Button>
            <Button color="inherit" >
              <LanguageIcon sx={{ marginRight: 1 }} />
              <LanguageSwitcher />
            </Button>
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </>
  );
}
