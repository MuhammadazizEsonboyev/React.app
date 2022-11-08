import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useTranslation } from "react-i18next"


export default function Product() {
  const { t } = useTranslation()

  return (
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Grid item xs={6} md={8}>
        <Typography component="h1" sx={{ paddingTop: "70px", fontSize: "30px" }}>{t("admin.drawer.menu_product")}</Typography>
      </Grid>
    </Grid>
  )
}
