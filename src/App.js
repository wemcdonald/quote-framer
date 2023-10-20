import Papa from 'papaparse';
import './App.css';
import {useCallback, useState} from "react";
import QuoteCard from "./components/QuoteCard";
import {Stack} from "@mui/material";
import Settings from "./components/Settings";
import FontProvider from "./FontProvider";


function App(callback, deps) {
    const [rows, setRows] = useState([]);

    const loadFiles = useCallback((file) => {
        if (file) {
            Papa.parse(file, {
                complete: (result) => {
                    setRows(result.data);
                },
                header: false,
            });
        }
    }, []);

    const saveImages = useCallback(() => {

    }, []);

    return (
        <FontProvider>
            <Stack className="App" alignItems={"center"}>
                <Stack width={"100%"} maxWidth={"1200px"} direction={"column"}>
                    <h1>Quotes</h1>
                    <Settings loadFiles={loadFiles} saveImages={saveImages}/>
                    <Stack direction="column" width={"100%"} spacing={2}>
                        {rows.map((row, index) => (
                            <QuoteCard key={index} row={row}/>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </FontProvider>
    );
}

export default App;
