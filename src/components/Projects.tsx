import React from 'react';
import { Container, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    { title: 'Project One', description: 'Description for project one', image: 'url-to-image' },
    { title: 'Project Two', description: 'Description for project two', image: 'url-to-image' },
    // Add more projects here
  ];

  return (
    <Container>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
