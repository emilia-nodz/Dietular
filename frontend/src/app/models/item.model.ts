import { Allergen } from "./allergen.model";

export interface Item {
    id: number,
    allergens: number[],
    allergenDetails?: Allergen[],
    name: string,
    description: string,
    weight: number,
    calories: number,
    carbohydrates: number,
    proteins: number,
    fats: number       
}

