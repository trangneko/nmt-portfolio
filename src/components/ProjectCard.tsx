import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Fade,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import { Project } from "../types/Project";
import Chip from "@mui/material/Chip";
import PDFViewer from "./PdfViewer";

interface ProjectCardProps {
  project: Project;
}

const ChipContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  maxWidth: "90%",
  maxHeight: "90%",
  overflow: "auto",
  zIndex: 2,
}));

export const IframeWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  paddingBottom: "56.25%", // Aspect ratio 16:9
  height: 0,
  overflow: "hidden",
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
}));

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    // Prevent default navigation behavior if hasModal is true
    if (project.hasModal) {
      event.preventDefault();
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card>
        <CardActionArea
          component={project.hasModal ? "div" : "a"}
          href={project.hasModal ? undefined : project.url}
          target={project.hasModal ? undefined : "_blank"}
          rel={project.hasModal ? undefined : "noopener noreferrer"}
          onClick={handleOpen}
        >
          <CardMedia
            component="img"
            height="140"
            image={project.image}
            alt={project.title}
          />
          <CardContent>
            {project.tags && (
              <ChipContainer>
                {project.tags.map((tag, index) => (
                  <Chip key={index} label={tag} size="small" />
                ))}
              </ChipContainer>
            )}
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>

            <Divider variant="middle" sx={{ my: 1 }} />

            {project.role && (
              <Typography variant="body2" color="text.secondary">
                My role in team: {project.role}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              Production period: {project.time}
            </Typography>
            <ChipContainer>
              {project.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  variant="outlined"
                  size="small"
                />
              ))}
            </ChipContainer>
          </CardContent>
        </CardActionArea>
      </Card>

      {project.hasModal && (
        <StyledModal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <ModalContent>
              <>
                <Typography variant="h6" component="h2">
                  {project.title}
                </Typography>
                <Box mt={2}>
                  {project.url && (
                    <Typography sx={{my: 1}}>Link to production: <a href={`${project.url}`} target="_blank" rel="noreferrer">{project.url}</a></Typography>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ maxWidth: "100%" }}
                  />
                  {project.pdf && <PDFViewer pdf={project.pdf} renderTextLayer={false} />}
                </Box>
              </>
            </ModalContent>
          </Fade>
        </StyledModal>
      )}
    </>
  );
};

export default ProjectCard;
