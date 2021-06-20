import { Category } from "../model/Category";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

class ListAllCategoryService {
    constructor(private repository: ICategoriesRepository) {}

    execute(): Category[] {
        return this.repository.list();
    }
}

export { ListAllCategoryService };
