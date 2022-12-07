import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import Example from '../charts/ReactChart'

export default function Home() {

    return (
        <>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid xs={8} sx={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
                    <Grid item xs={3}>
                        <Paper sx={{ textAlign: "center" }}>
                            <Typography sx={{ paddingTop: "30px", fontSize: "25px", fontWeight: "500", color: "#9FA2B4" }}>Unresolved</Typography>
                            <Typography sx={{ fontSize: "30px", paddingBottom: "25px", fontWeight: "600" }}>60</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper sx={{ textAlign: "center" }}>
                            <Typography sx={{ paddingTop: "30px", fontSize: "25px", fontWeight: "500", color: "#000" }}>Overdue</Typography>
                            <Typography sx={{ fontSize: "30px", paddingBottom: "25px", fontWeight: "600" }}>78</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper sx={{ textAlign: "center" }}>
                            <Typography sx={{ paddingTop: "30px", fontSize: "25px", fontWeight: "500", color: "#000" }}>Open</Typography>
                            <Typography sx={{ fontSize: "30px", paddingBottom: "25px", fontWeight: "600" }}>98</Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={6} sx={{marginTop: "50px"}}>
                    {/* <PureComponentk /> */}
                    {/* <SimpleChart/> */}
                    <Example />
                </Grid>

            </Grid>


        </>
    )
}
