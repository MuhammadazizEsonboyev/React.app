import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next"



export default function SelectSmall() {
    const [age, setAge] = React.useState('');
    const { i18n } = useTranslation()
    console.log(age)

    const handleChange = (event) => {
        setAge(event.target.value);
        i18n.changeLanguage(age);
    };


    return (
        <FormControl sx={{ m: 1, minWidth: 120, outline: "none" }} size="small">
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={"eng"}>English</MenuItem>
                <MenuItem value={"ru"}>Russian</MenuItem>
                <MenuItem value={"uz"}>Uzbek</MenuItem>
            </Select>
        </FormControl>
    );
}