import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
    return response.status(200).json(categoriesRepository.list());
});

categoriesRoutes.post("/", (request, response) => {
    const { description, name } = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists)
        return response.status(400).json({ error: "Category already exists" });

    categoriesRepository.create({ description, name });

    return response.status(201).json();
});

export { categoriesRoutes };
