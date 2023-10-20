import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["TSV"];

export default function FilesDragAndDrop({handleChange}) {
    return (
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    );
}
