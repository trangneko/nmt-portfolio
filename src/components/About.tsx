import React from "react";
import {
  Avatar,
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

const TwoColContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", // Align vertically centered
  gap: theme.spacing(4),
  padding: theme.spacing(4),
}));

const FuriganaTypography = styled(Typography)(({ theme }) => ({
  "& ruby": {
    display: "inline-block",
    whiteSpace: "nowrap",
    fontSize: "0.8em",
    "& rt": {
      fontSize: "0.6em", // Adjust size of furigana text
      color: theme.palette.text.secondary,
    },
  },
}));

const IconContainer = styled(List)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2), // Adjust spacing between icons
}));

const IconBox = styled(ListItem)<{ whiteBackground?: boolean }>(
  ({ theme, whiteBackground }) => ({
    width: 60, // Size of the icon container
    height: 60,
    backgroundColor: whiteBackground ? "white" : "rgba(0, 0, 0, 0.1)",
    borderRadius: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: whiteBackground ? theme.spacing(1) : 0,
    overflow: "hidden",
  })
);

const IconImage = styled("img")(({ theme }) => ({
  width: "100%", // Image should fit inside the container
  height: "100%",
  objectFit: "contain",
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
    <Box sx={{ display: "flex", gap: "2rem", my: 4 }}>
      <Box minWidth={150}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {dateRange}
        </Typography>
        {!isSkill && (
          <IconBox sx={{ backgroundColor, margin: "auto" }}>
            <IconImage src={imageSrc} alt={altText} />
          </IconBox>
        )}
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
        {isSkill && icons.length > 0 && (
          <IconContainer sx={{ flexWrap: 'wrap' }}>
            {icons.map((icon, index) => (
              <Tooltip key={index} title={icon.alt} arrow>
                <IconBox sx={icon.whiteBackground ? { backgroundColor: "white", padding:"5px" } : null}>
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

const mdkSkills = [
  { src: '/images/icons/html-5.svg', alt: 'HTML', whiteBackground: true},
  { src: '/images/icons/css-3.svg', alt: 'CSS', whiteBackground: true},
  { src: '/images/icons/javascript.svg', alt: 'JavaScript'},
  { src: '/images/icons/dart.svg', alt: 'Dart', whiteBackground: true},
  { src: '/images/icons/react.svg', alt: 'React.js'},
  { src: '/images/icons/vue.svg', alt: 'Vue.js', whiteBackground: true},
  { src: '/images/icons/flutter.svg', alt: 'Flutter', whiteBackground: true},
];

const About = () => {
  return (
    <Container>
      <TwoColContainer>
        <Container sx={{ textAlign: "left" }}>
          <FuriganaTypography variant="h3" sx={{ my: 4 }}>
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
        </Container>

        <Container>
          <Avatar sx={{ width: 100, height: 100 }} />
          <Card>
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
        </Container>
      </TwoColContainer>

      <Divider
        sx={{
          my: 6,
          width: "100%",
          height: 4,
          backgroundColor: "primary.main",
        }}
      />

      <TwoColContainer>
        <Container sx={{ textAlign: "left" }}>
          <TitleBox>
            <TitleTypography variant="h4">SOFTWARE</TitleTypography>
          </TitleBox>
          <br />
          <TitleBox>
            <TitleTypography variant="h4">SKILLS</TitleTypography>
          </TitleBox>
        </Container>
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

      <TwoColContainer sx={{ textAlign: "left" }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Container sx={{ width: "40%"}}>
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
              width: "4px",
              height: "600px",
              backgroundColor: "primary.main",
            }}
          />

<Container>
            <TitleBox>
              <TitleTypography variant="h4">EXPERIENCES</TitleTypography>
            </TitleBox>
            <EducationItem
              dateRange="5/2023 - NOW"
              title="PART-TIME WEB DEVELOPER"
              description={
                <>
                  MANDARAKE
                </>
              }
              backgroundColor="#ec6b04" // Optional custom background color
              isSkill={true} icons={mdkSkills}
            />
            <EducationItem
              dateRange="11/2021 - 12/2021"
              title="PART-TIME GRAPHIC DESGINER"
              description="LYYM BEAUTY CORP"
              isSkill={true}
              icons={[
                { src: '/images/icons/adobe-photoshop.svg', alt: 'Photoshop'},
                { src: '/images/icons/adobe-illustrator.svg', alt: 'Illustrator'}]}
            />
          </Container>
        </Box>
      </TwoColContainer>
    </Container>
  );
};

export default About;
