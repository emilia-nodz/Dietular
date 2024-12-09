import { Allergen } from "../models/allergen.model"

export interface Item {
    id: number,
    allergen_details: Allergen[],
    name: string,
    description: string,
    weight: number,
    calories: number,
    carbohydrates: number,
    proteins: number,
    fats: number       
}