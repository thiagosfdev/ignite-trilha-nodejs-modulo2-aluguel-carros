import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
    const { description, name } = request.body;

    const category: Category = new Category();

    Object.assign(category, {
        created_at: new Date(),
        description,
        name,
    });

    categories.push(category);

    return response.status(201).json(category);
});

export { categoriesRoutes };