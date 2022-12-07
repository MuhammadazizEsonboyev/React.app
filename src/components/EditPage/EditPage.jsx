import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditPage() {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()
    console.log(user)

    const getDataById = async (id) => {
        await axios.get(`http://localhost:3000/data/${id}`)
            .then((data) => {
                setUser(data?.data);
                setName(data?.data?.name)
                setDescription(data?.data?.description)
                setPrice(data?.data?.price)
                setImage(data?.data?.img)
            })
    }


    const edtiData = (e) => {
        e.preventDefault()
        const item = {
            name: name,
            description: description,
            price: price,
            img: image
        }
        axios.put(`http://localhost:3000/data/${id}`, item)
            .then(res => {
                if (res.status === 200) {
                    alert("Succesfully")
                    setName("")
                    setDescription("")
                    setPrice("")
                    setImage("")
                    navigate("/product-list")
                }
            })
    }


    useEffect(() => {
        getDataById(id)
    }, [id])



    return (
        <>
            <Grid container
                direction="row"
                justifyContent="end"
                alignItems="center">
                <Grid item xs={6} md={8} sx={{ marginLeft: "200px" }}>
                    <h1>Hello world</h1>
                    <form onSubmit={edtiData}>
                        <TextField id="outlined-basic" required value={name} onChange={(e) => setName(e.target.value)} sx={{ width: "600px", marginBottom: "20px" }} label="Name" variant="outlined" />
                        <TextField id="outlined-basic" required value={description} onChange={(e) => setPrice(e.target.value)} sx={{ width: "600px", marginBottom: "20px" }} label="Description" variant="outlined" />
                        <TextField id="outlined-basic" required value={price} onChange={(e) => setDescription(e.target.value)} sx={{ width: "600px", marginBottom: "20px" }} label="Price" variant="outlined" />
                        <TextField id="outlined-basic" required value={image} onChange={(e) => setImage(e.target.value)} sx={{ width: "600px", marginBottom: "20px" }} label="Image" variant="outlined" />
                        <Button variant='outlined' type="submit" sx={{ width: "58%" }}>Create info</Button>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}
