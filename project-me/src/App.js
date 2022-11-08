import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";


function App() {

  const { t, i18n } = useTranslation()
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select onChange={handleLanguageChange} value={i18n.language}>
          <MenuItem value="uz">
            {t("admin.language_label.uzbek")}
          </MenuItem>
          <MenuItem value="ru">
            {t("admin.language_label.russian")}
          </MenuItem>
          <MenuItem value="en">
            {t("admin.language_label.english")}
          </MenuItem>
        </Select>
      </FormControl>
      <h1>{t("admin.drawer.menu_text")}</h1>
    </>
  );
}

export default App;
