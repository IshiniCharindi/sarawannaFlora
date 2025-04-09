// import uploadImageFireStorage, { deleteFirebaseImage } from "../middleware/firebaseImageUpload"
// import { createProductQuery, deleteProductQuery, updateProductQuery } from "../services/productQuery"
// import { loadProductsQuery } from "../services/productQuery"
// import { v4 } from 'uuid'

interface ProductInterface {
    product_id?: string
    tittle: string
    stock: boolean
    top_item: boolean
    cat_id: string
    description: string
    unit_price: number
    category: string
    unit_measured: string
    coverImageLink?: any
    rawImage?: any
}

class Product implements ProductInterface {
    product_id?: string
    tittle: string
    stock: boolean
    top_item: boolean
    cat_id: string
    description: string
    unit_price: number
    category: string
    unit_measured: string
    coverImageLink: string
    rawImage: any

    constructor({
                    product_id,
                    tittle,
                    stock,
                    top_item,
                    cat_id,
                    description,
                    unit_price,
                    category,
                    unit_measured,
                    coverImageLink,
                    rawImage
                }: ProductInterface) {
        this.product_id = product_id
        this.tittle = tittle
        this.stock = stock
        this.top_item = top_item
        this.cat_id = cat_id
        this.description = description
        this.unit_price = unit_price
        this.category = category
        this.unit_measured = unit_measured
        this.coverImageLink = coverImageLink
        this.rawImage = rawImage
    }

    // Create new Product
    // async createNewProduct(): Promise<boolean> {
    //     this.product_id = v4()
    //     try {
    //         // Upload the image to fire store and return image link
    //         if (this.rawImage) {
    //             this.coverImageLink = await uploadImageFireStorage(this.rawImage, `MasImpex/product-covers/${this.product_id}`)
    //         }
    //         const response = await createProductQuery(this.extractJSON())
    //
    //         return response.status === 200 && response.data.proceed // Product created successfully.
    //     } catch (err) {
    //         return false // Unable to create.
    //     }
    // }

    // Update product
    // async updateProduct(): Promise<boolean> {
    //     try {
    //         // Upload the new image and delete the previous
    //         if (this.rawImage && this.rawImage.slice(0, 11) === 'data:image/') {
    //             this.coverImageLink = await uploadImageFireStorage(this.rawImage, `MasImpex/product-covers/${this.product_id}`);
    //             // if (this.coverImageLink) await deleteFirebaseImage(`MasImpex/product-covers/${this.product_id}`);
    //         }
    //         const response = await updateProductQuery(this.extractJSON())
    //         return response.status === 201 && response.data.proceed
    //     } catch (e) {
    //         return false
    //     }
    // }

    // Delete a product from the system
    // async deleteProduct(): Promise<boolean> {
    //     const response = await deleteProductQuery(this.product_id ?? '')
    //
    //     // Delete the image if the removal is successful ...
    //     if (response.status === 201 && response.data.proceed) {
    //         if (this.product_id) {
    //             await deleteFirebaseImage(`MasImpex/product-covers/${this.product_id}`)
    //         }
    //         return true
    //     }
    //     return false
    // }

    // static async fetchAllProducts(): Promise<Array<ProductInterface> | boolean> {
    //     const response = await loadProductsQuery()
    //     if (response.status === 200 && response.data.proceed) {
    //         return response.data.content?.map((element: ProductInterface) => {
    //             return new Product(element)
    //         })
    //     }
    //
    //     return false
    // }

    // extractJSON(): ProductInterface {
    //     return {
    //         product_id: this.product_id,
    //         tittle: this.tittle,
    //         stock: this.stock,
    //         top_item: this.top_item,
    //         cat_id: this.cat_id,
    //         description: this.description,
    //         unit_price: this.unit_price,
    //         category: this.category,
    //         unit_measured: this.unit_measured,
    //         coverImageLink: this.coverImageLink
    //     }
    // }
}

export default Product
export { type ProductInterface }
