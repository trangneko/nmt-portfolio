import { Link as RouterLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const feature = [
  {
    tags: ["Part-time work", "Development", "Web Design"],
    title: "Video Player Website",
    description:
      "A Vue.js-based webpage with video browsing and playback as the main function. I worked hard to implement a flick effect for each video similar to TikTok, using Swiper.",
    role: "Frontend Developer, Web Designer",
    time: "2 weeks in 4/2024",
    image:
      "https://lh3.googleusercontent.com/fife/ALs6j_FTFX875OCMA1Gzs-tGphKOw_CWN_ZUQBzhDNTc8keLYJLKcjYqXhBmTHdANvr3Y8BbFh6RfupvoOjaGabcXlXLR0mRN-0odNPcmQZdWlZs0zxAn8NAkyFtdaPbIPOt9VyytCOuMYBbDS2v5KxC1vG5ZS5kZYa0vUMTy8m2DQqXkH3LR4FL9JEPPCCcSOa_DAsAj2o5wEaYH6AM_8MAa9oTD1d-4S6qRMksgQIuobHH0u_3ZHMigedN1GXOHAJQOCfMXf53xUKXHPxfc5J3qEahnfNLfTlnQrz8dl3rBq84BJIrFEeyhehxdMHdcY8hiVg3tPO_HVm7p2UI_vDSpGR5BsVNHFXVZRVskfUsUvdbxqlRFqbxJjmYbhaQdXhXsTAyBxnFNHktO84Ze1Czv62YvPNyDZiafiH4Vpr0f6XKBDFVR8nlHKZMZuD-8GTfK-zTgAx1USA8akUyA_RZN1I9QxmQFgOpVqdAnHJ2BYqKJiAKHyEOynbPRGqvvmcquj24y7AW3SUQve0r-b-z7Txe1NftfOKQZrfU1lGb4QKut_KdqMPLXZLDCxtSTchb2v2O9RFUwJwG2eWeN0E2Q18LOhPgeGggZjXas-iiEcy2305B9edsrrve9gSqu35qCs_PESZZK2KhpNIH3hCONn0K9uW9BGDCPbeq4RNJm0R-WWnilGeH4SsVSteicejh0362jpwZ_HG0Cn2lV5MBJ16cvSxqCr7y4LBmAYYk4G8J5ijXo_Q45V2gT_yJQky1-V7OpuFJhlDOta6zs78wdmopZZQAOma-pc-lV57X9gEIj3VlACi2T1s42D0dW9t4A3hBliKrWjX0kLK3qzsg-QyRZaN5OSmgsVUen7KpCE_V6iTq9kKAPetaE8Px6j3da7e4_YgnrT0SuOhlkRXf1_AzRhf9GE2TunthhDHn15agHyUswEhtWuH8PODffz9oiiDiBGdPXhTCNngkm3YxG99Js9u8D1-1EzvEfv0cvQj8pxyJW_zfmcI9zPopzvAf10tIDOeUmUe2jkzWwlAl9QQPmKoOG6KcbsbNb7adPBzf8NQy2g8iaRk_Qu4G_uGW4TdAHcLqKw_IX7N6l8IPmSPcFk49VoQuEhVLl7EzBaZnva3-v1kHu0CnrZd08_tffyeMOK7c5Kwxx7uD62EZV4BThePzsMtlWgkw0aoTcgzWfAJegKtg-Ju6CRjzWQrd2zinkslpaopFdlThMOXNT9ZrAHRSYId_xaK3d6YeTFwjl8Yk9G8qtFKgYbY1SNh2FB2lTlOzHBCHAwANDAETjpn5Kcxk8Ko6OxxI_Hmi87dhfz80U9421dY7BeENhO9UK38vNG6Q1QRafGnUkQ2Z6qJJK708ia0u2JY4eVoKjgePAMtiM_hB5IwCRvYlyMkhcosdxWjZDI38qOaOU5GmwLZWkgEAODsa9kBVv56ZYG9Ak8aNnNqvE8v5pQmluhOQtHvEVj6yeiy4dzejkDGEa2mPKqHais_kMnvkf46lZbuiKRaeIDIjLyzd99E9XDbTxpuOUL48ey-RBzz-j0zXbE5VwvzES7uv_JV5Ji_4DPkiopfaPn79XpM_YGnNLZRiRuK4XZEW9zRjcUQS7rQNUg=w1390-h919",
    url: "https://dc.mandarake.co.jp/dc-move/web/#/",
    skills: ["Vue.js", "JavaScript", "SCSS"],
  },
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
      <Button variant="contained" component={RouterLink} to="/projects">
        View More
      </Button>
    </>
  );
};

export default ProjectFeature;
