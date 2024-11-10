import React, { useState } from "react";
import { Box, Collapse, Container, Grid, IconButton, styled } from "@mui/material";
import ProjectCard from "./ProjectCard";
import Typography from "@mui/material/Typography";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import { UnderlinedTypography } from "./Containers";
import { devProjects, graphicDesigns, webDesigns } from "../data/projects";

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

interface ToggleSectionProps {
  title: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

const ToggleSection: React.FC<ToggleSectionProps> = ({ title, icon, children }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box mb={6}>
      <Header onClick={handleToggle}>
        {React.cloneElement(icon, { sx: { mr: 2 } })}
        <HeaderTitle>{title}</HeaderTitle>
        <IconButton color="inherit" aria-label="expand">
          {open ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
        </IconButton>
      </Header>
      <Collapse in={open}>
        <Box>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

const Projects = () => {
 
  return (
    <Container sx={{ my: 6 }}>
      <UnderlinedTypography variant="h2" sx={{ mb: 6 }}>MY PROJECTS</UnderlinedTypography>
      <ToggleSection title="Development Projects" icon={<CodeRoundedIcon />}>
        <Grid container spacing={4}>
          {devProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </ToggleSection>
      <ToggleSection title="UI/UX/Web Design Projects" icon={<DesignServicesRoundedIcon />}>
        <Grid container spacing={4}>
          {webDesigns.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </ToggleSection>
      <ToggleSection title="Graphic/Product Design Projects" icon={<CategoryRoundedIcon />}>
        <Grid container spacing={4}>
          {graphicDesigns.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </ToggleSection>
    </Container>
  );
};

export default Projects;
