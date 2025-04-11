import Category from "./Category2"
import { createProductRequest, uploadImageRequest } from "../services/productRequests"

interface Product {
    productId?: string,
    name?: string,
    stock?: boolean,
    category?: Category | string,
    topItem?: boolean,
    description?: string,
    unitPrice?: number,
    unitMeasured?: number,
    imageList?: Array<string> | Array<File>
}


class ProductServices implements Product {
    productId?: string
    name?: string
    stock?: boolean
    category?: Category | string
    topItem?: boolean
    description?: string
    unitPrice?: number
    unitMeasured?: number
    imageList?: Array<string> | Array<File>


    static async productSubmission(imageList: Array<string> | Array<File>, product: Product) {
        if (Array.isArray(imageList) && typeof imageList[0] === "string") return false;

        const fileArray = imageList.filter(item => item instanceof File) as File[];
        const response = await uploadImageRequest(fileArray);
        if(response.status === 201 && response.data.proceed) {
            product.imageList = response.data.content
            const response2 = await createProductRequest(product)
            return response2.status === 201 && response.data.proceed
        } else return false;
    }   
}



export default Product
export {ProductServices}