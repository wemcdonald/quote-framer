import {Button, Stack} from "@mui/material";
import FilesDragAndDrop from "./FilesDragAndDrop";
import {FontSelectors} from "./FontSelector";

export default function Settings({loadFiles, saveImages}) {
    return (
        <Stack sx={{border: "2px solid black", borderRadius:4}} padding={2} alignItems={"center"} gap={2}>
            <FilesDragAndDrop handleChange={loadFiles} />
            <FontSelectors />
            <Button onClick={saveImages}>Save Images</Button>
        </Stack>
    )
}
