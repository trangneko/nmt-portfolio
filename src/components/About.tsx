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
  useTheme,
} from "@mui/material";

import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { IconBox, IconContainer, IconImage } from "./Icons";
import { TwoColContainer } from "./Containers";
import { useTranslation } from "react-i18next";

// import Ava from "/images/ava.jpg";

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
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "20px", // Match the border radius of the main box
    zIndex: -1, // Place behind the box
    transition: "all 0.3s ease",
  },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  padding: "0 8px", // Ensure text is above the background
  color: theme.palette.secondary.dark,
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
  company?: string;
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
  company,
  description,
  backgroundColor = "rgba(0, 0, 0, 0.1)",
  isSkill = false,
  icons = [],
}) => {
  // const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        my: 4,
        gap: "2rem",
        flexDirection: {
          xs: isSkill ? "column" : "row",
          md: "row",
        },
        textAlign: "left",
      }}
    >
      <Box minWidth={{ sx: 100, md: 180 }}>
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
      <Box width={"100%"}>
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
        {company ? (
          <>
            <Typography variant="subtitle1" textAlign={"right"}>
              {company} (Tokyo, Japan)
            </Typography>
            {/* <Typography sx={{ my: 2 }}>{t("jobDes")}</Typography> */}
          </>
        ) : null}
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

const gesherSkills = [
  { src: "/images/icons/figma.svg", alt: "Figma" },
  { src: "/images/icons/html-5.svg", alt: "HTML", whiteBackground: true },
  { src: "/images/icons/css-3.svg", alt: "CSS", whiteBackground: true },
  { src: "/images/icons/javascript.svg", alt: "JavaScript" },
  { src: "/images/icons/react.svg", alt: "React.js" },
  { src: "/images/icons/adobe-photoshop.svg", alt: "Adobe Phoptoshop" },
  { src: "/images/icons/adobe-illustrator.svg", alt: "Adobe Illustrator" },
];

const ttSkills = [{ src: "/images/icons/figma.svg", alt: "Figma" }];

const About = () => {
  const { t } = useTranslation();

  return (
    <Container sx={{ my: 6 }}>
      <TwoColContainer
        sx={{ flexDirection: { xs: "column-reverse", md: "row" }, my: 4 }}
      >
        <Box sx={{ textAlign: "left" }}>
          <FuriganaTypography
            variant="h3"
            sx={{
              my: 4,
              fontSize: { xs: "2.5rem", md: "3rem" },
              textAlign: "center",
              lineHeight: "0.7",
            }}
          >
            <ruby>
              <rt>グエン・ミン・チャン</rt>
              <br />
              NGUYEN MINH TRANG
            </ruby>
          </FuriganaTypography>
          <Typography variant="body1">{t("description")}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 200,
              height: 200,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                width: 180,
                height: 180,
                right: 0,
                bottom: 0,
                borderRadius: "20%",
                border: `2px solid ${useTheme().palette.secondary.dark}`,
                zIndex: -1,
              },
            }}
          >
            <IconBox sx={{ width: 180, height: 180 }}>
              <IconImage
                src={
                  "https://lh3.googleusercontent.com/fife/ALs6j_FuINOnesmk3ggdhyVyZEASZO5OhmQG2t7msc02oxJlsq2gp4t6H56ih3EEs2AeNU3WYx66VIdRChDHD25iFqQVX-l0bpYS_TXzfXQXBkQeih8dmfdHyu_yZlGAwJvi8wwBXRG8_5XC16A2rmc1q2d5Ak5I4oL3lx3Is-w-u0navMzMPHlB4Vl-AlG_pc-LDdg4pjdYugkylDpmktZ2tpiKfq2wUm2o7mV0b402fkcQ4AblA8t16hb58cv4B9plYa_KaFU4XoDQ7Sci75ftY6ZP-S03EBhY59apsm_uhgTp9FKkBRFNvCry3Fau80Wzo6nyUR7u1tmVQ_kZDCTPeuJSDWMkgnbdqdtNB6g19-B_mdEGasLxB_H1pWv8QHoxjlXf2UbEwiTMU4VOjAswWbe4z_s1aAE7EN9zQA3CsNtMtQvUoJeBA2a6MrKrWxQGUnPmnEBKOdaNPLt4ss7rzfM9jHtD4VXVOlOthU57hsAzcIj7tMF_hbDmVpsFoZLV13rpPIIB3pb4wAL4HHsTQ8mtr3jWDkmziKsua47fcgf_14cpfWwWhPg6MlXH54B2WbacbSbqzsrcFaOVSLvR2Jicsfxek7ydojmqWL97XAyp_OmKkI8BzgahRf30Ipi5S3N0tJ5oFyLsY2oRbj3ZjLgaHK3uMzoyBGlSyJBUPyg1pBa-azi5DxoZQ9JDnpjL1SUHd1tVvX3lIBjVvXy5pi5DvMNNpY9P-1TJSja87Loy9Pot0vawuLUZl2rQu-S57TO-YhlT16W9QxHzKnqcNYDlBZ-mmVd6OtViLoeu1jKQCHes6rkJ0sOzlWUF-fJCMaUTU4DiW6wIeLdUBoMdMudZwd1rAHVNNrKTFqa7sXF-ngDlOg03I7pDf1Yjpb5H_MUlMMFHMwx1cLwut2km89x2Ca2x5HdBbaIEnaNEYxRwQ0BuUkvTlGyEYRNHUO-vUollHZjoPh_y4ZrX8KxSXBfXHkcsgMImW6gkVbXqYTBs5uizoJeOZEmdqgxAGghC6hSl_9j3clzAbsPepGf5GtQEWqlaTM3ByKTubMABr4LmTNjO3EVD0fhyRgU7xdZsFaEXPT8bNU5XltMdWV8Q6Wk_hAsdHdHVvWvcihoJmKeae-b-tavhEWzkFJ1POz1cHpdBrF2gI2TdKgOUEoyvWlIcuoh2yp0JDEobMBQqdNw-FlJSNcEWvAQ-Me9qaRjdzeYfXHl9NWfo522ZKBarqyq2JATRBXSKkYagKhZsLw7X8SyVYUSDhtM-_NeqIO2J_-ISXm-todVz01If5XMgXkF68EcczWYq-W7-eBH_NzzQMJy7yC7UNzGMv_YaUrhQFXypX9rYG_o8AsUa0rsp5_o-0u3zvX1w6URmPAAwULuIE2o8d49ycFtmrJius3wCP7ri0CmbAhgvLvhkdq79_HoKUivu5JsvMQqfJyGAYCYm7WrkNCFwaEKisu_c30LWdWjFKUoW8diGVPDe63PHGjaLzAho8gdlt5GjLPlUEpg8RTQwpzs7H9dasGo2Y-zKeDysOYSGE6u_wzr0ezTXlI3HafjNeHVUsBon4FLva2mQC5cHV2e7fiMzLaTlUVhQupQxddiKXm5RnMRPzrETcQ=w1390-h919"
                }
                alt="ava"
              />
            </IconBox>
          </Box>
          <Card sx={{ minWidth: "220px" }}>
            <CardContent sx={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: "3px" }}
              >
                <CakeRoundedIcon sx={{ marginRight: 1 }} />
                2001.01.16
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: "3px" }}
              >
                <LocationOnRoundedIcon sx={{ marginRight: 1 }} />
                Tokyo, Japan
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
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
            md: "row",
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

      <Divider
        sx={{
          my: 6,
          width: "100%",
          height: 4,
          backgroundColor: "primary.main",
        }}
      />

      {/* <Box
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
      > */}

      {/* education */}
      <Container sx={{ width: "100%" }}>
        <TitleBox>
          <TitleTypography variant="h4">EDUCATION</TitleTypography>
        </TitleBox>
        <EducationItem
          dateRange="4/2021 - NOW"
          imageSrc="/images/icons/dhu.jpg"
          altText="Digital Hollywood University"
          title={t("undergrad")}
          description={
            <>
              {t("university")}
              <br />
              {t("universityFaculty")}
              <br />
              {t("universityDepartment")}
            </>
          }
          backgroundColor="#ec6b04" // Optional custom background color
          isSkill={false}
        />
        <EducationItem
          dateRange="10/2019 - 3/2021"
          imageSrc="/images/icons/olj.jpg"
          altText="OLJ Language Academy"
          title={t("languageStudy")}
          description={t("languageSchool")}
          isSkill={false}
        />
        <EducationItem
          dateRange="9/2016 - 5/2019"
          imageSrc="/images/icons/cnn.png"
          altText="Foreign Language Specialized School"
          title={t("highSchool")}
          description={t("highSchoolName")}
          isSkill={false}
        />
      </Container>

      {/* <Divider
          orientation="vertical"
          sx={{
            width: { xs: "80%", md: "4px" },
            height: { xs: "auto", md: "600px" },
            backgroundColor: "primary.main",
            alignSelf: "center",
          }}
        /> */}

<Divider
        sx={{
          my: 6,
          width: "100%",
          height: 4,
          backgroundColor: "primary.main",
        }}
      />

      {/* exp */}
      <Container sx={{ flexShrink: 3 }}>
        <TitleBox>
          <TitleTypography variant="h4">EXPERIENCES</TitleTypography>
        </TitleBox>
        <EducationItem
          dateRange="9/2024 - NOW"
          title={t("ttRole")}
          company={t("ttLocation")}
          description={
            <>
              <List sx={{ listStyle: "inside" }}>
                <ListItem>{t("ttJobDes1")}</ListItem>
                <ListItem>{t("ttJobDes2")}</ListItem>
              </List>
            </>
          }
          isSkill={true}
          icons={ttSkills}
        />
        <EducationItem
          dateRange="7/2024 - NOW"
          title={t("gesherRole")}
          company={t("gesherLocation")}
          description={
            <>
              <List sx={{ listStyle: "inside" }}>
                <ListItem>{t("gesherJobDes1")}</ListItem>
                <ListItem>{t("gesherJobDes2")}</ListItem>
                <ListItem>{t("gesherJobDes3")}</ListItem>
              </List>
            </>
          }
          isSkill={true}
          icons={gesherSkills}
        />
        <EducationItem
          dateRange="5/2023 - 7/2024"
          title={t("mdkRole")}
          company={t("mdkLocation")}
          description={
            <>
              <List sx={{ listStyle: "inside" }}>
                <ListItem>{t("mdkJobDes1")}</ListItem>
                <ListItem>{t("mdkJobDes2")}</ListItem>
                <ListItem>{t("mdkJobDes3")}</ListItem>
                <ListItem>{t("mdkJobDes4")}</ListItem>
              </List>
            </>
          }
          backgroundColor="#ec6b04" // Optional custom background color
          isSkill={true}
          icons={mdkSkills}
        />
        <EducationItem
          dateRange="11/2021 - 12/2021"
          title={t("lyymRole")}
          company={t("lyymLocation")}
          description={
            <>
              <Typography>{t("lyymJobDes")}</Typography>
            </>
          }
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
      {/* </Box> */}

      <Divider
        sx={{
          my: 6,
          width: "100%",
          height: 4,
          backgroundColor: "primary.main",
        }}
      />

      {/* languages */}
      <Box sx={{ my: 4}}>
        <TitleBox>
          <TitleTypography variant="h4">LANGUAGES</TitleTypography>
        </TitleBox>
        <List
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: {
              xs: 2,
            }, textAlign: "left" 
          }}
        >
          <LanguageProficiencyItem
            language={t("english")}
            proficiency={t("langPro")}
            certifications={
              <>
                TOEIC L&R 910/990 (4/2021)
                <br />
                TOEIC S&W 290/400 (11/2020)
              </>
            }
          />
          <LanguageProficiencyItem
            language={t("japanese")}
            proficiency={t("langPro")}
            certifications="JLPT N1 (7/2024)"
          />
          <LanguageProficiencyItem
            language={t("vietnamese")}
            proficiency={t("langNative")}
            certifications=""
          />
        </List>
      </Box>
    </Container>
  );
};

export default About;
