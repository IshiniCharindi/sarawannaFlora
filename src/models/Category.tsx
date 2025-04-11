import { loadCategoryRequest, createCategoryRequest } from "../services/productRequests";
interface Category {
    catId?: string,
    name?: string
}


class CategoryServices implements Category {
    catId?: string;
    name?: string;

    static async loadCategories() {
        const response = await loadCategoryRequest()
        if(response.status === 200 && response.data.proceed) {
            return response.data.content
        } 
        console.error('Error', response.data.message)
        return false
    }


    static async createNewCategory(category: Category) {
        const response = await createCategoryRequest(category)
        return response.status === 201 && response.data.proceed
    }
}


export default Category
export {
    CategoryServices
}