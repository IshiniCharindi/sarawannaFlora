import Category from "./Category2"

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



}



export default Product
export {ProductServices}