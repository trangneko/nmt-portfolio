import React, { useState } from "react";
import { Box, Collapse, Container, Grid, IconButton, styled } from "@mui/material";
import ProjectCard, { IframeWrapper } from "./ProjectCard";
import Typography from "@mui/material/Typography";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';

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
  const devProjects = [
    {
      tags: ["Personal", "Development", "Hobby"],
      title: "Petito Shop (Next.js ver.)",
      description:
        "A full-stack e-commerce project using NextJS which handles adding items to the cart and payment processing from the purchaser's screen, as well as including management features for administrators.",
        time: "5/2024 - now",
      image: "/images/logo.png",
      url: "https://github.com/trangneko/petito-shop/",
      skills: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "MongoDB"],
    },
    {
      tags: ["Part-time work", "Development", "Web Design"],
      title: "Video Player Website",
      description:
        "A Vue.js-based webpage with video browsing and playback as the main function. I worked hard to implement a flick effect for each video similar to TikTok, using Swiper.",
        role: "Frontend Developer, Web Designer",
        time: "2 weeks in 4/2024",
      image:
        "/images/mdk-record.jpg",
      url: "https://dc.mandarake.co.jp/dc-move/web/#/",
      skills: ["Vue.js", "JavaScript", "SCSS"],
    },
    {
      tags: ["Part-time work", "Development"],
      title: "Recruit Website",
      description:
        "A React.js-based webpage consolidating information about Mandarake's mid-career recruitment which was transformed from multiple static HTML pages into a cohesive single-page application.",
        role: "Frontend Developer",
        time: "9/2024 - 11/2024",
      image:
        "/images/mdk-recruit.jpg",
      url: "https://www.mandarake.co.jp/recruit/mid/",
      skills: ["React.js", "JavaScript", "SCSS"],
    },
    {
      tags: ["Part-time work", "Development"],
      title: "メディア化特集",
      description:
        "A React.js based webpage compiles information about anime adaptations for each season. Within each anime's details, there is a section that features related items available for purchase through Mandarake.",
        role: "Frontend Developer",
        time: "7/2024 - 8/2024",
      image:
        "https://media.licdn.com/dms/image/D4D2DAQFfKl3eyirfug/profile-treasury-image-shrink_800_800/0/1695784725572?e=1718571600&v=beta&t=RGgDh_Qmn4jWfPDSllubnoht_Kqm7-F05tDbEMEof6s",
      url: "https://www.mandarake.co.jp/feature/media",
      skills: ["React.js", "JavaScript",  "SCSS"],
    },
    // Add more projects here
  ];
  const webDesigns = [
    {
      tags: ["Personal", "Development", "Web Design", "Hobby"],
      title: "Petito Shop (WordPress ver.)",
      description:
        "My personal online store website focused on user interface, aiming for a clear design that conveys the store's appeal. One of the main features includes a blog posting function.",
        time: "2/2023 - 5/2023",
      image:
        "https://media.licdn.com/dms/image/D4E2DAQF18pKQpmotgA/profile-treasury-image-shrink_800_800/0/1686076501900?e=1718571600&v=beta&t=atsi5C50T8OECAH1BCho78C305aLuIbFBRmjdjjeF4E",
      url: "https://thepetito.epizy.com/",
      skills: ["WordPress", "CSS"],
    },
    {
      tags: ["Personal", "School Work", "Web Design"],
      title: "Doutor's Homepage Re-design",
      description:
        "A school assignment to create a mind map and reform a coffee chain of your choice. I chose Doutor because it is my favorite chain and I believe it needs a website overhaul.",
        time: "2 weeks in 1/2023",
      image: "/images/web-doutor.jpg",
      url: "https://xd.adobe.com/embed/4f343da1-aa85-493a-8327-8ab7494342cb-1a67/",
      skills: ["Adobe XD", "Prototype"]
    },
    {
      tags: ["Team Work","School Work", "Web Design"],
      title: "Happy Snack",
      description:
        "A school assignment with the theme of Designing a Subscription Service Website. We chose a monthly delivery of sweet boxes from various countries because all members of our group are international students from Korea, Indonesia, and Vietnam. Our goal was to introduce other countries' cultures through sweets, which are universally enjoyed.",
        role: "Wireframe, Prototype Designer",
        time: "2 weeks in 11/2022",
      image:
        "/images/web-snack.jpg",
      url: "https://xd.adobe.com/embed/7a20ca5e-94de-4d1d-84b5-03d0e3e276d0-2f73/",
      skills: ["Adobe XD", "Prototype"],
    },
    {
      tags: ["Part-time work", "Development", "Web Design"],
      title: "Cosplayer Introduction",
      description:
        "A simple introduction webpage for Mandarake's cosplayer employees, which I redesigned from the old-fashioned and outdated version (left) to a modern-styled one (right).\nWebsite URL: https://www.mandarake.co.jp/cosplay/",
        role: "Frontend Developer, Web Designer",
        time: "1 week in 5/2023",
      image:
        "/images/mdk-cosplay.jpg",
      // url: "/projects/cosplay",
      skills: ["Adobe XD", "HTML", "CSS", "JavaScript"],
      hasModal: true,
    },
  ];
  const graphicDesigns = [
    {
      tags: ["Personal", "Product Design", "Graphic Design"],
      title: "osu! Vietnamese Community Meetup 2022",
      description:
        "A full set design of a T-shirt, poster, postcard, and card holder strap that I created for the osu! community in Vietnam in 2022. This was the first meetup event right after the end of Covid-19. The window pattern expresses the feeling of confinement in our homes and also resembles piano tiles, reflecting a play mode in the game.",
        time: "6/2022 - 7/2022",
      image: "/images/prod-osu22.jpg",
      skills: ["Photoshop", "Illustrator"],
      hasModal: true
    },
    {
      tags: ["Personal", "Product Design", "Graphic Design"],
      title: "osu! Vietnamese Community Meetup 2019",
      description:
        "A full set of painter-themed designs including a poster, postcard, drink ticket, and card holder strap, which I created for the osu! community in Vietnam in 2019.",
        time: "6/2019 - 7/2019",
      image: "/images/prod-osu19.jpg",
      skills: ["Photoshop", "Illustrator"],
      hasModal: true
    },
    {
      tags: ["Personal", "School Work", "Product Design"],
      title: "注文の多い料理店",
      description:
        "A school assignment where I designed a book from cover to interior pages. The story content was a bit scary and related to a black cat, so I featured a large black cat on the cover and chose red as the main color.",
        time: "9/2022 - 12/2022",
      image:
        "/images/des-chuumon.jpg",
      skills: ["Photoshop", "InDesign"],
      hasModal: true
    },
    {
      tags: ["Personal", "School work", "Graphic Design", "Icon Design"],
      title: "Brand Design - Tanukafe",
      description:
        "A school assignment where I designed a logo for my own imagined coffee shop brand. I chose a tanuki image because there is a myth in my country that coffee beans taste better if they are eaten and excreted by a tanuki (LOL).",
        time: "6/2022 - 7/2022",
      image:
        "/images/des-tanukafe.jpg",
      skills: ["Photoshop", "Illustrator"],
      hasModal: true,
    },
    {
      tags: ["Personal", "School work", "Graphic Design"],
      title: "Postcard Design - Bird Week",
      description:
        "A school assignment where I practiced using Illustrator to design Japanese Bird Week postcards using various techniques.",
        time: "4/2022 - 5/2022",
      image:
        "/images/des-bird.jpg",
      skills: ["Photoshop", "Illustrator"],
      hasModal: true,
    },
    {
      tags: ["Personal", "School work", "Typography"],
      title: "Typography - Space",
      description:
        "A few assignments where I had to imagine and arrange polygons in a suitable space to make them look harmonious and express the text content effectively.",
        time: "4/2021 - 7/2022",
      image:
        "/images/des-typo.jpg",
      skills: ["Illustrator"],
      hasModal: true,
    },
    {
      tags: ["Personal", "Product Design"],
      title: "Magazine Design - Youth Memories",
      description:
        "A task from my mom, who is a teacher, where I designed a memories magazine for her class.",
        time: "3 days in 11/2020",
      image:
        "/images/des-magazine.jpg",
      skills: ["Photoshop", "InDesign"],
      hasModal: true,
    },
  ];

  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="h2" sx={{ mb: 6 }}>MY PROJECTS</Typography>
      <ToggleSection title="Development Projects" icon={<CodeRoundedIcon />}>
        <Grid container spacing={4}>
          {devProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </ToggleSection>
      <ToggleSection title="Web Design Projects" icon={<DesignServicesRoundedIcon />}>
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
