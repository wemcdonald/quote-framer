import Papa from 'papaparse';
import './App.css';
import {useCallback, useState} from "react";
import QuoteCard from "./components/QuoteCard";
import {Stack} from "@mui/material";
import Settings from "./components/Settings";
import FontProvider from "./FontProvider";
import {toBlob} from "html-to-image";
import JSZip from "jszip";
import { saveAs } from 'file-saver';


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


    const saveImages = useCallback(async () => {
        const totalDigits = rows.length.toString().length;
        const zip = new JSZip();

        let imagePromises = [];
        rows?.forEach((row, index) => {
            if (index > 0) {
                const paddedIndex = index.toString().padStart(totalDigits, '0');

                const promise = toBlob(document.getElementById(`quote-card-${index}`), {
                    quality: 0.95,
                    cacheBust: true,
                    backgroundColor: "black"
                }).then(blob => {
                    zip.file(`quote-${paddedIndex}.png`, blob);
                })
                .catch(error => {
                    console.error(`Failed to capture image for element ${index}:`, error);
                });
                imagePromises.push(promise);
            }
        });

        await Promise.all(imagePromises);

        zip.generateAsync({ type: 'blob' })
            .then(blob => {
                saveAs(blob, 'quotes.zip');
            });

    }, [rows]);

    return (
        <FontProvider>
            <Stack className="App" alignItems={"center"} padding={4} minWidth={"1300px"}>
                <Stack width={"100%"} maxWidth={"1280px"} direction={"column"} gap={4}>
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
