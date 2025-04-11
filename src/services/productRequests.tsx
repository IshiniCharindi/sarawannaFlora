import { UploadFile } from "antd";
import axios from "axios";
import domain from "./serviceConfig";
import { headers, fileUploadHeaders } from "./serviceConfig";
import Category from "../models/Category";

const uploadImageRequest = async (files: Array<File>) => {
    console.log('uploading the file', files)
    const formData = new FormData();

    files.forEach((file) => {
        formData.append("file", file)
    })
    
    console.log(formData.get("file"))
    return await axios.post('http://localhost:3000/product/uploadImage', formData); // Axios will handle headers
};


const createCategoryRequest = async(category: Category) => {
    return await domain.post('/product/editCategory', category, headers)
}

const loadCategoryRequest = async() => {
    return await domain.get('/product/fetchCategories', headers)
}





export {
    uploadImageRequest,
    loadCategoryRequest,
    createCategoryRequest
}