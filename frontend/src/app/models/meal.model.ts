export interface Meal {
    id: number,
    name: string,
    description: string,
    items: string[]
    numberOfPortions: number,
    portionWeight: number,
    caloriesPerPortion: number,
}