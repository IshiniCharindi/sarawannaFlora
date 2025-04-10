import domain from "./serviceConfig";
import { headers, fileUploadHeaders } from "./serviceConfig";

const uploadImageRequest = async (file: Array<File>) => {
    const formData = new FormData()
    file.forEach((item) => {
        formData.append('file', item)
    })
    return await domain.post('/product/uploadImage', formData, fileUploadHeaders)
}



export {
    uploadImageRequest
}