import { UploadFile } from "antd";
import axios from "axios";
import domain from "./serviceConfig";
import { headers, fileUploadHeaders } from "./serviceConfig";

const uploadImageRequest = async (files: Array<File>) => {
    console.log('uploading the file', files)
    const formData = new FormData();

    files.forEach((file) => {
        formData.append("file", file)
    })
    
    console.log(formData.get("file"))
    return await axios.post('http://localhost:3000/product/uploadImage', formData); // Axios will handle headers
};





export {
    uploadImageRequest
}