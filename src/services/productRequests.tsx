import { UploadFile } from "antd";
import domain from "./serviceConfig";
import { headers, fileUploadHeaders } from "./serviceConfig";

const uploadImageRequest = async (file: UploadFile) => {
    
    return await domain.post('/product/uploadImage', file, fileUploadHeaders)
}



export {
    uploadImageRequest
}