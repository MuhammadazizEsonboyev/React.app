import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const cr_image = require("../../img/qr.code.jpg")

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
                justifyContent="center" mt={12}>
                <Grid item xs={4}>
                    <Card sx={{ height: "300px" }}>
                        <Typography component="div" sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
                            <CardMedia
                                sx={{ height: "140px", width: "140px", borderRadius: "50%" }}
                                image={data.image}
                                title="green iguana"
                            />
                        </Typography>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {data.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.description} day
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={data.tg_href}>Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="300"
                        image={cr_image}
                    />
                </Grid>
            </Grid>

        </div>
    )
}
