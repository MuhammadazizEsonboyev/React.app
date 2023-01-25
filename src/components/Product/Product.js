import React, { useState } from 'react'
import { Grid, TextField, Typography, Button, Paper } from '@mui/material'
import { useTranslation } from "react-i18next"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function Product() {
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('https://w7.pngwing.com/pngs/980/304/png-transparent-computer-icons-user-profile-avatar-heroes-silhouette-avatar-thumbnail.png')
  const [href, setHref] = useState('')
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      name: name,
      description: description,
      price: price,
      image: image,
      tg_href: href
    }
    await axios.post("http://localhost:3000/data", data)
      .then(res => {
        res.status === 201 ? alert('Success') : alert('Error');
        navigate("/product-list")
      })
  }

  return (
    <Grid container
      direction="row"
      justifyContent="center">
      <Grid item xs={5} sx={{ marginLeft: "150px", marginTop: "80px", flexDirection: "column" }}>
        <Paper elevation={3}>
          <React.Fragment>
            <Grid container
              direction="row"
              justifyContent="center" textAlign="start" >
              <Grid item xs={8} sx={{ paddingBottom: "80px" }}>
                <Typography component="h1" sx={{ paddingTop: "70px", paddingBottom: "30px", fontSize: "30px" }}>{t("admin.drawer.menu_product")}</Typography>
                <form onSubmit={handleSubmit} >
                  <TextField id="outlined-basic" required onChange={(e) => setName(e.target.value)} sx={{ marginBottom: "20px", width: "100%", outline: "none" }} label="Name" variant="outlined" />
                  <TextField id="outlined-basic" required onChange={(e) => setPrice(e.target.value)} sx={{ marginBottom: "20px", width: "100%", outline: "none" }} label="Task" variant="outlined" />
                  <TextField id="outlined-basic" required onChange={(e) => setDescription(e.target.value)} sx={{ marginBottom: "20px", width: "100%", outline: "none" }} label="Day" variant="outlined" />
                  {/* <TextField id="outlined-basic" required value={"https://w7.pngwing.com/pngs/980/304/png-transparent-computer-icons-user-profile-avatar-heroes-silhouette-avatar-thumbnail.png"} onChange={(e) => setImage(e.target.value)} sx={{ marginBottom: "20px", width: "100%", outline: "none" }} label="Image" variant="outlined" /> */}
                  <TextField id="outlined-basic" required onChange={(e) => setHref(e.target.value)} sx={{ marginBottom: "20px", width: "100%", outline: "none" }} label="Telegram personal blog" variant="outlined" />
                  <Button variant='outlined' type="submit" sx={{ width: "100%" }}>Create info</Button>
                </form>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      </Grid>
    </Grid>
  )
}
