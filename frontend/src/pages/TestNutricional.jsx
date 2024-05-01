import { Button } from "@mui/material";
import { useLocation } from "react-router-dom"

const TestNutricional = ()=>{
    let location = useLocation();
    const {correo} = location.state;
    const piquiti = ()=>{
        console.log(correo);
    }
    return(
        
        <>
        <Button onClick={piquiti}>botonsito</Button>
        </>
    )
}

export default TestNutricional