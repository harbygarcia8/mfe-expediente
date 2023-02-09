import React, {useState}from "react";
import '../styles/App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const App = () => {

    const [dense, setDense] = useState(false);

    return (
        <section>
            <div>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={dense}
                                onChange={(event) => setDense(event.target.checked)}
                            />
                       }
                        label="Consulta básica"
                    />
                </FormGroup>
            </div>
            <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={dense}
                                onChange={(event) => setDense(event.target.checked)}
                            />
                       }
                        label="NUP"
                    />
                </FormGroup>
                <TextField id="outlined-basic" variant="outlined" />
                <TextField id="outlined-basic" variant="outlined" />
                <TextField id="outlined-basic" variant="outlined" />
                <TextField id="outlined-basic" variant="outlined" />
                <TextField id="outlined-basic" variant="outlined" />
                <TextField id="outlined-basic" variant="outlined" />

        </section>
    )
}

export default App;