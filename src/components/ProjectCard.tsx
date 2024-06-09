import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
