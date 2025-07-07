import { Link as RouterLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const feature = [
  {
    tags: ["Personal", "Development", "Hobby", "Web Design"],
    title: "Tabipura - Your AI Travel Planner Friend",
    description:
      "A full-stack AI-powered travel planner web app that automatically generates detailed travel itineraries with just one click. Built using Node.js, Gemini API, Firebase, and MongoDB on the backend, and React with MUI on the frontend. Users can register, log in, view previously saved itineraries, and share their plans with others. As my graduation project, I was responsible for everything from planning and UX/UI design to full-stack development. Awarded 最優秀賞 (Best Project) among 8 other products in my research seminar (Webディレクション＆デザイン研究ゼミ).",
    time: "6/2024 - 1/2025",
    image: "https://www.tabipura.site/assets/preview-ja.png",
    url: "https://tabipura.site",
    skills: ["Node.js", "React.js", "HTML/CSS", "Gemini", "Firebase", "Figma"],
    hasModal: true,
    pdf: "https://drive.google.com/file/d/1Sz55DzAm6d1sRU0se24c3TgNYpoR20bP/preview"
  },
  {
    tags: ["Part-time work", "Development", "Web Design"],
    title: "GESHER TIMES - A Digital Magazine Service",
    description:
      "GESHER TIMES is a digital magazine service dedicated to showcasing articles about innovation and startups in Japan, connecting them with global audiences and vice-versa, which also helps to enhance the brand presence of GESHER .inc.",
    time: "7/2024 - 8/2024",
    image: "https://lh3.google.com/u/1/d/1hgBhoNjRHUOFVfQhpea4EmPnq3AcaMhC=w1502-h919-iv1",
    url: "https://times.gesher.co.jp/",
    skills: ["React.js", "MUI", "HTML/CSS", "Figma"],
    hasModal: true,
    pdf: "https://drive.google.com/file/d/1IhZ7_wqV5hzXqAF5or0L1G9OF1TmZG6n/preview"
  },
  {
    tags: ["Personal", "Development", "Web Design", "Hobby"],
    title: "Petito Shop (WordPress ver.)",
    description:
      "My personal online store website focused on user interface, aiming for a clear design that conveys the store's appeal. One of the main features includes a blog posting function.",
    time: "2/2023 - 5/2023",
    image:
      "https://lh3.google.com/u/0/d/1elOK_ibFEJGmUr4eg8tHlcGC-EUL0AWM=w1457-h919-iv1",
    url: "https://thepetito.epizy.com/",
    skills: ["WordPress", "CSS"],
  },
];

const ProjectFeature = () => {
  return (
    <>
      <Grid container spacing={4} my={4}>
        {feature.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" size="large" component={RouterLink} to="/projects">
        View More
      </Button>
    </>
  );
};

export default ProjectFeature;
