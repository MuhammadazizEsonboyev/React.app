import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from "react-i18next"

export default function Home() {
    const { t } = useTranslation()

    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={6} md={8}>
                <Typography component="h1" sx={{ paddingTop: "70px", fontSize: "30px" }}>{t("admin.drawer.menu_home")}</Typography>
            </Grid>
        </Grid>
    )
}
