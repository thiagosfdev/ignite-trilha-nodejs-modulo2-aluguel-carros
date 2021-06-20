import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { ListAllCategoryService } from "../services/ListAllCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
    const listAllCategoryService = new ListAllCategoryService(
        categoriesRepository
    );
    return response.status(200).json(listAllCategoryService.execute());
});

categoriesRoutes.post("/", (request, response) => {
    const { description, name } = request.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    createCategoryService.execute({ description, name });

    return response.status(201).json();
});

export { categoriesRoutes };
