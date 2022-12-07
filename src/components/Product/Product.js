import React, { useState } from 'react'
import { Grid, TextField, Typography, Button } from '@mui/material'
import { useTranslation } from "react-i18next"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function Product() {
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      name: name,
      description: description,
      price: price,
      img: image
    }
    await axios.post("http://localhost:3000/data", data)
      .then(res => {
        res.status === 201 ? alert('Success') : alert('Error');
        navigate("/product-list")
      })
  }

  return (
    <React.Fragment>
      <Grid container
        direction="row"
        justifyContent="end"
        alignItems="center">
        <Grid item xs={8}>
          <Typography component="h1" sx={{ paddingTop: "70px", paddingBottom: "30px", fontSize: "30px" }}>{t("admin.drawer.menu_product")}</Typography>
          <form  onSubmit={handleSubmit}>
            <TextField id="outlined-basic" required onChange={(e) => setName(e.target.value)} sx={{ width: "600px", marginBottom: "20px" }} label="Name" variant="outlined" />
            <TextField id="outlined-basic" required onChange={(e) => setPrice(e.target.value)} sx={{ width: "600px", marginBottom: "20px" }} label="Description" variant="outlined" />
            <TextField id="outlined-basic" required onChange={(e) => setDescription(e.target.value)} sx={{ width: "600px", marginBottom: "20px" }} label="Price" variant="outlined" />
            <TextField id="outlined-basic" required onChange={(e) => setImage(e.target.value)} sx={{ width: "600px", marginBottom: "20px" }} label="Image" variant="outlined" />
            <Button variant='outlined' type="submit" sx={{ width: "58%" }}>Create info</Button>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
