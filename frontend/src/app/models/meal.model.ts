import { Item } from "./item.model"
export interface Meal {
    id: number,
    name: string,
    description: string,
    item_details: Item[],
    numberOfPortions: number,
    portionWeight: number,
    caloriesPerPortion: number,
    meal_image: string,
}