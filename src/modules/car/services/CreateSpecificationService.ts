import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    description: string;
    name: string;
}

class CreateSpecificationService {
    constructor(private repository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists = this.repository.findByName(name);

        if (categoryAlreadyExists) throw new Error("Category already exists");

        this.repository.create({ description, name });
    }
}

export { CreateSpecificationService };
