import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next"
import { InputLabel } from '@mui/material';
const ru = require("../../../img/ru.png") 
const usa = require("../../../img/uz.png") 
const uz = require("../../../img/usa.png") 



export default function SelectSmall() {
    const [age, setAge] = React.useState('translate');
    const { i18n } = useTranslation()

    const handleChange = (event) => {
        setAge(event.target.value);
        i18n.changeLanguage(event.target.value);
    };



    return (
        <FormControl sx={{ m: 1, minWidth: 120, outline: "none" }} size="small">
            <InputLabel id="demo-simple-select-label">{age}</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={"tra"}
                label={age}
                onChange={handleChange}
            >
                <MenuItem value={"en"}> <img src={uz} style={{width: "20px", marginRight: "10px"}}  alt="" /> English</MenuItem>
                <MenuItem value={"ru"}><img src={ru}  style={{width: "20px", marginRight: "10px"}} alt="" /> Russian</MenuItem>
                <MenuItem value={"uz"}><img src={usa} style={{width: "20px", marginRight: "10px"}}  alt="" /> Uzbek</MenuItem>
            </Select>
        </FormControl>
    );
}