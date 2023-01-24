import { Avatar, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function About() {
    const [data, setData] = useState([])
    const { id } = useParams()
    const getOne = (id) => {
        axios.get(`http://localhost:3000/data/${id}`)
            .then((data) => {
                setData(data.data)
            })
    }
    useEffect(() => {
        getOne(id)
    }, [])

    return (
        <div>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={6}>
                    <Paper elevation={3} style={{ marginTop: "100px" }}>
                        <h1 style={{ paddingLeft: "20px", paddingTop: "20px" }}>{data.name} :</h1>
                        <Typography component="div" style={{ paddingLeft: "20px", paddingTop: "20px", display: "flex", justifyContent: "space-between"}}>
                            <Avatar alt="Remy Sharp" src={data.image} sx={{ width: 100, height: 100 }} />
                            <Typography component="div">
                                    <Paper elevation={2} sx={{padding: "10px"}}>
                                        <Typography component="div" width={300}>
                                            <h3 style={{color: "gray"}}>Task name: <span style={{color: "black"}}>{data.description}</span></h3>
                                        </Typography>
                                    </Paper>
                            </Typography>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}
