import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  List,
  ListItem,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";

import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { IconBox, IconContainer, IconImage } from "./Icons";
import { TwoColContainer } from "./Containers";

const FuriganaTypography = styled(Typography)(({ theme }) => ({
  "& ruby": {
    display: "inline-block",
    whiteSpace: "nowrap",
    fontSize: "0.8em",
    "& rt": {
      fontSize: "0.6em",
      color: theme.palette.text.secondary,
    },
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  display: "inline-block",
  position: "relative",
  marginBottom: theme.spacing(2),
  "&::before": {
    content: '""',
    position: "absolute",
    top: "40%",
    left: "-10px",
    width: "95%",
    height: "70%",
    backgroundColor: theme.palette.primary.dark,
    zIndex: -1,
  },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  padding: "0 8px", // Ensure text is above the background
}));

interface IconItem {
  src: string;
  alt: string;
  whiteBackground?: boolean;
}

interface EducationItemProps {
  dateRange: string;
  imageSrc?: string;
  altText?: string;
  title: string;
  description: string | React.ReactNode;
  backgroundColor?: string;
  isSkill?: boolean;
  icons?: IconItem[];
}

const EducationItem: React.FC<EducationItemProps> = ({
  dateRange,
  imageSrc,
  altText,
  title,
  description,
  backgroundColor = "rgba(0, 0, 0, 0.1)",
  isSkill = false,
  icons = [],
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        my: 4,
        gap: {
          xs: "1rem",
          md: "2rem",
        },
        flexDirection: {
          xs: isSkill ? "column" : "row",
          md: "row",
        },
      }}
    >
      <Box minWidth={150}>
        <Typography
          variant="h6"
          sx={{
            mb: {
              xs: isSkill ? 0 : 2,
              md: 2,
            },
          }}
        >
          {dateRange}
        </Typography>
        {!isSkill && (
          <IconBox sx={{ backgroundColor, margin: "auto" }}>
            <IconImage src={imageSrc} alt={altText} />
          </IconBox>
        )}
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            mb: {
              xs: isSkill ? 1 : 2,
              md: 2,
            },
          }}
        >
          {title}
        </Typography>
        <Typography>{description}</Typography>
        {isSkill && icons.length > 0 && (
          <IconContainer sx={{ flexWrap: "wrap" }}>
            {icons.map((icon, index) => (
              <Tooltip key={index} title={icon.alt} arrow>
                <IconBox
                  sx={
                    icon.whiteBackground
                      ? { backgroundColor: "white", padding: "5px" }
                      : null
                  }
                >
                  <IconImage src={icon.src} alt={icon.alt} />
                </IconBox>
              </Tooltip>
            ))}
          </IconContainer>
        )}
      </Box>
    </Box>
  );
};

const VerticalDivider = styled(Divider)(({ theme }) => ({
  width: "10px",
  height: "120px",
  backgroundColor: theme.palette.primary.main,
  marginRight: theme.spacing(2),
}));

interface LanguageProficiencyItemProps {
  language: string;
  proficiency: string;
  certifications: string | React.ReactNode;
}

const LanguageProficiencyItem: React.FC<LanguageProficiencyItemProps> = ({
  language,
  proficiency,
  certifications,
}) => {
  return (
    <ListItem sx={{ display: "flex", alignItems: "start" }}>
      <VerticalDivider orientation="vertical" />
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {language}
        </Typography>
        <Typography>{proficiency}</Typography>
        <Typography>{certifications}</Typography>
      </Box>
    </ListItem>
  );
};

const mdkSkills = [
  { src: "/images/icons/html-5.svg", alt: "HTML", whiteBackground: true },
  { src: "/images/icons/css-3.svg", alt: "CSS", whiteBackground: true },
  { src: "/images/icons/javascript.svg", alt: "JavaScript" },
  { src: "/images/icons/dart.svg", alt: "Dart", whiteBackground: true },
  { src: "/images/icons/react.svg", alt: "React.js" },
  { src: "/images/icons/vue.svg", alt: "Vue.js", whiteBackground: true },
  { src: "/images/icons/flutter.svg", alt: "Flutter", whiteBackground: true },
];

const About = () => {
  return (
    <Container sx={{my: 6}}>
      <TwoColContainer sx={{ flexDirection: {xs: "column-reverse", md: "row"}}}>
        <Box sx={{ textAlign: "left" }}>
          <FuriganaTypography variant="h3" sx={{ my: 4, fontSize: {xs: "2.5rem", md: "3rem"} }}>
            <ruby>
              <rt>グエン・ミン・チャン</rt>NGUYEN MINH TRANG
            </ruby>
          </FuriganaTypography>
          <Typography variant="body1">
            I am currently a third-year student at Digital Hollywood University
            in Tokyo, primarily focusing on web design. My passion for the
            creative field started in high school, and during my time at
            university, I discovered a new passion for web development. In my
            free time, I enjoy photography, playing music games, and engaging in
            retail activities. As a hobby, I run a small business and hope to
            continue learning valuable skills. I am excited about exploring
            internship or job opportunities in web design, web-application and
            mobile application development.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 2}}>
          <IconBox sx={{ width: 180, height: 180}}>
            <IconImage src={"/images/ava.jpg"} alt="ava" />
          </IconBox>
          <Card sx={{ minWidth: "220px"}}>
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="body2">
                <CakeRoundedIcon sx={{ marginRight: 1 }} />
                2001.01.16
              </Typography>
              <Typography variant="body2">
                <LocationOnRoundedIcon sx={{ marginRight: 1 }} />
                Tokyo, Japan
              </Typography>
              <Typography variant="body2">
                <MailRoundedIcon sx={{ marginRight: 1 }} />
                lucideneko@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </TwoColContainer>

      <Divider
        sx={{
          my: 6,
          width: "100%",
          height: 4,
          backgroundColor: "primary.main",
        }}
      />

      {/* software skills */}
      <TwoColContainer
        sx={{
          flexDirection: {
            xs: "column",
            md: "row"
          },
          alignItems: { xs: "start", md: "center" },
          mb: 8,
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <TitleBox>
            <TitleTypography variant="h4">SOFTWARE</TitleTypography>
          </TitleBox>
          <br />
          <TitleBox>
            <TitleTypography variant="h4">SKILLS</TitleTypography>
          </TitleBox>
        </Box>
        <IconContainer>
          <Tooltip title="Photoshop" arrow>
            <IconBox>
              <IconImage
                src="/images/icons/adobe-photoshop.svg"
                alt="Photoshop"
              />
            </IconBox>
          </Tooltip>
          <Tooltip title="Adobe XD" arrow>
            <IconBox>
              <IconImage src="/images/icons/adobe-xd.svg" alt="Adobe XD" />
            </IconBox>
          </Tooltip>
          <Tooltip title="Illustrator" arrow>
            <IconBox>
              <IconImage
                src="/images/icons/adobe-illustrator.svg"
                alt="Illustrator"
              />
            </IconBox>
          </Tooltip>
          <Tooltip title="Lightroom" arrow>
            <IconBox>
              <IconImage
                src="/images/icons/adobe-lightroom.svg"
                alt="Lightroom"
              />
            </IconBox>
          </Tooltip>
          <Tooltip title="Premiere" arrow>
            <IconBox>
              <IconImage
                src="/images/icons/adobe-premiere.svg"
                alt="Premiere"
              />
            </IconBox>
          </Tooltip>
          <Tooltip title="Figma" arrow>
            <IconBox>
              <IconImage src="/images/icons/figma.svg" alt="Figma" />
            </IconBox>
          </Tooltip>
          <Tooltip title="VS Code" arrow>
            <IconBox whiteBackground>
              <IconImage
                src="/images/icons/visual-studio-code.svg"
                alt="VS Code"
              />
            </IconBox>
          </Tooltip>
        </IconContainer>
      </TwoColContainer>

      <Box
        sx={{
          display: "flex",
          textAlign: "left",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: "2rem",
            md: "1rem",
          },
        }}
      >
        {/* education */}
        <Container sx={{ width: { xs: "100%", md: "40%" } }}>
          <TitleBox>
            <TitleTypography variant="h4">EDUCATION</TitleTypography>
          </TitleBox>
          <EducationItem
            dateRange="4/2021 - NOW"
            imageSrc="/images/icons/dhu.jpg"
            altText="Digital Hollywood University"
            title="UNDERGRADUATE"
            description={
              <>
                Digital Hollywood University
                <br />
                Faculty of Digital Communication
                <br />
                Department of Digital Content
              </>
            }
            backgroundColor="#ec6b04" // Optional custom background color
            isSkill={false}
          />
          <EducationItem
            dateRange="9/2016 - 5/2019"
            imageSrc="/images/icons/cnn.png"
            altText="Foreign Language Specialized School"
            title="HIGH SCHOOL DIPLOMA"
            description="Foreign Language Specialized School"
            isSkill={false}
          />
        </Container>

        <Divider
          orientation="vertical"
          sx={{
            width: { xs: "80%", md: "4px" },
            height: { xs: "auto", md: "600px" },
            backgroundColor: "primary.main",
            alignSelf: "center",
          }}
        />

        {/* exp */}
        <Container>
          <TitleBox>
            <TitleTypography variant="h4">EXPERIENCES</TitleTypography>
          </TitleBox>
          <EducationItem
            dateRange="5/2023 - NOW"
            title="PART-TIME WEB DEVELOPER"
            description={<>MANDARAKE</>}
            backgroundColor="#ec6b04" // Optional custom background color
            isSkill={true}
            icons={mdkSkills}
          />
          <EducationItem
            dateRange="11/2021 - 12/2021"
            title="PART-TIME GRAPHIC DESGINER"
            description="LYYM BEAUTY CORP"
            isSkill={true}
            icons={[
              { src: "/images/icons/adobe-photoshop.svg", alt: "Photoshop" },
              {
                src: "/images/icons/adobe-illustrator.svg",
                alt: "Illustrator",
              },
            ]}
          />
        </Container>
      </Box>

      {/* languages */}
      <Box sx={{ my: 4,  textAlign: "left"}}>
        <TitleBox>
          <TitleTypography variant="h4">LANGUAGES</TitleTypography>
        </TitleBox>
        <List
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column", md: "row"
            },
            gap:  {
              xs: 2
            },
          }}
        >
          <LanguageProficiencyItem
            language="ENGLISH"
            proficiency="Professional Working Proficiency"
            certifications={
              <>
                TOEIC L&R 910/990 (4/2021)
                <br />
                TOEIC S&W 290/400 (11/2020)
              </>
            }
          />
          <LanguageProficiencyItem
            language="JAPANESE"
            proficiency="Professional Working Proficiency"
            certifications="JLPT N2 (12/2020)"
          />
          <LanguageProficiencyItem
            language="VIETNAMESE"
            proficiency="Native Proficiency"
            certifications=""
          />
        </List>
      </Box>
    </Container>
  );
};

export default About;
