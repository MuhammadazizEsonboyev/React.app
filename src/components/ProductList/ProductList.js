import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import { Link, Navigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function ProductList() {
  const { t } = useTranslation()

  const [rows, setRows] = useState([])

  const fetchData = () => {
    axios.get("http://localhost:3000/data")
      .then((data) => {
        setRows(data.data)
      })
  }

  const handleChange = (id) => {
    axios.delete(`http://localhost:3000/data/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Seccesfull")
          setRows(rows.filter((el) => el.id !== id))
        }
      })
  }





  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Grid item xs={6} md={8} sx={{ marginLeft: "200px", }}>
        <Typography component="h1" sx={{ paddingTop: "70px", fontSize: "30px", marginBottom: "50px" }}>{t("admin.drawer.menu_category")}</Typography>

        <Paper elevation={3}>
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right" sx={{paddingLeft: "10px"}} >Edit</TableCell>
                  <TableCell align="right" sx={{paddingLeft: "10px"}}>Delete</TableCell>
                  <TableCell align="right" sx={{paddingLeft: "10px"}}>About</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={row.image} style={{ borderRadius: "6px" }} width={100} height={"60px"} alt="" />
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.price}$</TableCell>
                    <TableCell align="right" >
                      <Link style={{ textDecoration: "none" }} to={row.id ? `/product-list/edit-product/${row.id}` : null}>
                        <Button variant='outlined' >Edit</Button>
                      </Link>
                    </TableCell>
                    <TableCell align="right" >
                      <Button variant='outlined'  onClick={() => handleChange(row.id)}>Delete</Button>
                    </TableCell>
                    <TableCell align="right" >
                      <Link to={`/product-list/about/${row.id}`} style={{ textDecoration: "none" }}>
                        <Button variant='outlined'>About</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>


        </Paper>
      </Grid>
    </Grid>
  )
}

