import {FileUploader} from "react-drag-drop-files";
import {Stack} from "@mui/material";

const fileTypes = ["TSV"];

export default function FilesDragAndDrop({handleChange}) {
    return (
        <Stack mb={2}>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>
        </Stack>
    );
}
