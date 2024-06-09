import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Lucide's playground
        </Typography>
        <Box>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
