import React, { useState } from "react";
import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root': {
    borderRadius: theme.shape.borderRadius,
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
    },
    '&:not(.Mui-selected)': {
      backgroundColor: 'transparent',
      // Responsive color based on screen size
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.secondary.main,
      },
      [theme.breakpoints.up('md')]: {
        color: theme.palette.primary.contrastText,
      },
    },
  },
}));

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(i18n.language);

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string | null
  ) => {
    if (newLanguage) {
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <StyledToggleButtonGroup
      color="info"
      value={language}
      exclusive
      onChange={handleLanguageChange}
      aria-label="Language Switcher"
    >
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
      <ToggleButton value="jp" aria-label="Japanese">
        JA
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
};

export default LanguageSwitcher;
