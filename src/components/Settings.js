import {Button, Stack} from "@mui/material";
import FilesDragAndDrop from "./FilesDragAndDrop";
import {FontSelectors} from "./FontSelector";

export default function Settings({loadFiles, saveImages}) {
    return (
        <Stack sx={{border: "2px solid black", borderRadius:1}} padding={2} alignItems={"center"}>
            {/*<FilePicker type="file" onChange={loadFiles} accept=".tsv" />*/}
            <FilesDragAndDrop handleChange={loadFiles} />
            <Button onClick={saveImages}>Save Images</Button>
            <FontSelectors />
        </Stack>
    )
}
