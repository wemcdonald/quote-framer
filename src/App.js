import Papa from 'papaparse';
import './App.css';
import {useCallback, useState} from "react";
import QuoteCard from "./components/QuoteCard";
import {Stack} from "@mui/material";
import Settings from "./components/Settings";
import FontProvider from "./FontProvider";
import {toJpeg} from "html-to-image";
import download from "downloadjs";


function App(callback, deps) {
    const [rows, setRows] = useState([]);

    const loadFiles = useCallback((file) => {
        if (file) {
            Papa.parse(file, {
                complete: (result) => {
                    setRows(result.data);
                },
                header: false,
                skipEmptyLines: true,
            });
        }
    }, []);

    const saveImage = useCallback((index) => {
        toJpeg(document.getElementById(`quote-card-${index}`), { quality: 0.95, cacheBust: true, backgroundColor: "black" })
            .then(function (dataUrl) {
                download(dataUrl, `quote-${index}.jpg`);
            });
    }, [])

    const saveImages = useCallback(() => {
        if (rows.length > 0) {
            saveImage(0);
        }
    }, [saveImage, rows.length]);

    return (
        <FontProvider>
            <Stack className="App" alignItems={"center"}>
                <Stack width={"100%"} maxWidth={"1200px"} direction={"column"} mt={4}>
                    <Settings loadFiles={loadFiles} saveImages={saveImages}/>
                    <Stack direction="column" width={"100%"} spacing={2}>
                        {rows?.slice(1, -1).map((row, index) => (
                            <QuoteCard key={index} row={row} index={index}/>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </FontProvider>
    );
}

export default App;
