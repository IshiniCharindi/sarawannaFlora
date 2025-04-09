// import uploadImageFireStorage, { deleteFirebaseImage } from "../middleware/firebaseImageUpload"
// import { createCategoryQuery, deleteCategoryQuery, updateCategoryQuery } from "../services/productQuery"
// import { loadCategoriesQuery } from "../services/productQuery"
// import {v4} from 'uuid'

interface CategoryInterface {
    categoryID?: string
    name?: string
    tags?: string
    coverImageLink?: any
}

class Category implements CategoryInterface {
    categoryID?: string
    name?: string
    tags?: string
    coverImageLink: string
    rawImage: any

    constructor({categoryID ,name, tags, coverImageLink}: CategoryInterface) {
        this.categoryID = categoryID
        this.name = name
        this.tags = tags
        this.coverImageLink = coverImageLink
    }

    // // Create new Category
    // async createNewCategory(): Promise<boolean> {
    //     this.categoryID = v4()
    //     // Upload the image to fire store and return image link
    //     try {
    //         this.coverImageLink = await uploadImageFireStorage(this.rawImage, `MasImpex/category-covers/${this.categoryID}`)
    //         const response = await createCategoryQuery(this.extractJSON())
    //
    //         return response.status === 200 && response.data.proceed // Category created successfully.
    //     } catch(err) {return false} // Unable to create.

    // }


    // Update category
    // async updateCategory(): Promise<boolean>{
    //     try {
    //         // Upload the new image and delete the previous
    //         if(this.rawImage.slice(0, 11) === 'data:image/') {
    //             this.coverImageLink = await uploadImageFireStorage(this.rawImage, `MasImpex/category-covers/${this.categoryID}`);
    //             // if(this.coverImageLink) await deleteFirebaseImage(`MasImpex/category-covers/${this.categoryID}`);
    //         }
    //         const response = await updateCategoryQuery(this.extractJSON())
    //         return response.status === 201 && response.data.proceed
    //     } catch(e) {return false}
    //
    // }


    // Delete a category from the system
    // async categoryDelete() {
    //     const response = await deleteCategoryQuery(this.categoryID ?? '')
    //
    //     // Delete the image if the removal is successful ...
    //     if(response.status === 201 && response.data.proceed) {
    //         await deleteFirebaseImage(`MasImpex/category-covers/${this.categoryID}`)
    //         return true;
    //     }
    //
    //     return false;
    // }



    // static async fetchAllCategories(): Promise<Array<CategoryInterface> | boolean> {
    //     const response = await loadCategoriesQuery()
    //     if(response.status === 200 && response.data.proceed) {
    //         return response.data.content?.map((element: CategoryInterface) => {
    //             return new Category(element)
    //         })
    //     }
    //
    //     return false
    // }


    // extractJSON(): CategoryInterface {
    //     return {
    //         categoryID: this.categoryID,
    //         name: this.name,
    //         tags: this.tags,
    //         coverImageLink: this.coverImageLink
    //     }
    // }
}


export default Category
export {type CategoryInterface}