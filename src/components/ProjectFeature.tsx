import { Link as RouterLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const feature = [
  {
    tags: ["Personal", "Development", "Hobby", "Web Design"],
    title: "Tabipura - Your AI Travel Planner Friend",
    description:
      "A full-stack AI travel planner project using Node.js, Gemini API, and Firebase, MongoDB for the backend and React, MUI for the frontend, which creates a detailed trip plan for users with just one click! I am planning to add login features to save users' favorite plans and to share their plans with others. This is my graduation project, so I have put a lot of effort into everything from project planning to design and development.",
    time: "6/2024 - now",
    image: "https://lh3.google.com/u/0/d/1d_XwCD84UYVP_mH0SNtHDjV4_qMuhqPv=w1920-h919-iv1",
    url: "https://tabipura.site",
    skills: ["Node.js", "React.js", "Gemini", "Firebase", "Figma"],
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
  {
    tags: ["Personal", "Product Design", "Graphic Design"],
    title: "osu! Vietnamese Community Meetup 2022",
    description:
      "A full set design of a T-shirt, poster, postcard, and card holder strap that I created for the osu! community in Vietnam in 2022. This was the first meetup event right after the end of Covid-19. The window pattern expresses the feeling of confinement in our homes and also resembles piano tiles, reflecting a play mode in the game.",
    time: "6/2022 - 7/2022",
    image:
      "https://lh3.googleusercontent.com/fife/ALs6j_HZ01UK-nNnbmFF4XcOKpuEAaryeOmcZJpgBOUCjlgePn4MBjGIzrK4tk-sggA2GvulYNquQLem-NKLkPX9ZS15OzQNTcW2w43xuxezBG9XsrzjB9pAyLh-VkKLmFB5A0uKkyMwHxI8frBg4Hx4hB7i_-KhtvTvE_X1aXBb9-GdbcNnCWdOatdGgrv2Q5m_TMjFHmIbGqJNerC6ACUtjdAxaJeEBRZMA_YExAYpIJf-ZlTPLFBXSPe_iuJGsy_8h57HXiVjy2kcha4Hxf5yWjoAtx0LBFGGq4OvEVzOqqYBK5D1iFs8nNcdBp5f3I2C49cjb2nXPQk-wRSdPEgx5qhTBEls9eO50Kpj9932qnKZmlUUI5x6DSRWCq0g2cVlgYhDICqHfy6sJHK7fIMTgcQcxu_xjO9c5CPciigkWq0MopQXTgQKXvi6cGyYvdJJJXp8UQz9413Web2dtOoM5H54buZH2p5OIXgkat8vKqNLQCO1MQ_WAFNRRoyGzPPGVVYJWHBh4Fej2t7QZabEm6OG6xQf9Grl6xw7qOUKVREFfHKhm4XcAyqedEWCnbG1pSmt-AXFMyJT0HFJ25CCNxhcoC4zlb077Z6WJKS7t6Z6oG5h96p43hOt8bdgggpY9TTOtLtBzJScUe_asmCL0fpwGnAt7vl4Wugj7f6gATL5Gmko8k4RA_CQ5qp8wVIDN48xzBQ3nNodA-Y3XtLa8JW6oF_uQz-xf8Yyw3kR_Iw0cJz6E5edact6OOTAVwBzEAY0SFdZLsCLO03wzT10lw3juuxrqA6oLl8ClkaiehJNyc4mKDRKh2x2C_iYuzPHoYl1XHotw9GTlDW4iog8aqbXxt0Sj_5ewoASzHGc7n78KsvMgX38wnCFHuEDCbED7uUvBmYTvKp009m2EKwj_pj7J7cuVMEg17woguwhiMnO1z14XCI0iEtlY9aYd_wit2YKVo78k_MyIip36JK0gWpV8QZgjFtR8pN8dY5GIIWyHFJBPl24DNV4TTJXfcr-ztXe_MXkMUtUQWFkDs3dISscmMdLp3cWuPFg_1GbLX5dx-P0y7g6gJYVKJn0FLG3x-SM8E-0wXZ_S2NFKlAz6bBevfZVBMeCXZGvn66r3NU5FGvdW41I3QmNVoofcoX2B5tefXDCBJizlee7OsXshW-eVqxuHT-t64adz5vY3JvgFa8JxzUa3TlIPmXxFK4cEaz7kw2g5udS74DA_sa0ttddyf4z0BYaiHnGhiDA-R0rxYLC5Fv4J0AF1P1d277PQp05Hvz7p0lzRT9kRGFP1lQe1uoBxNcdP4FZEIMUpgqxnTr2MYeaZV4AYXysGvMrpGmYBVkDERbcjj97xlY4QT1f_UJ7Tgd7VASEI1Ft-0QpZfrF2tnL3Z8--0sscJulurvY1uIon8ibm7CaGPAvj8L1RgYsqsco9GqAKmiSuN4_jPsrjhDyXU-Ki1WoCO7P4xemtUD8cV3BUxkv-lK3ZZXw_FTjp6pmjoAS2PABo69dNPQeTjtm_ir3vK2DZSb46DqPb7yIRujZcV-KAgn6oZRM4ScMVmg_SDNO60fyEZs7-0KeP7WgCogGWwuLyVx2Nmf2qpCt35b-riCYVoc=w1390-h919",
    skills: ["Photoshop", "Illustrator"],
    hasModal: true,
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
