import { Item } from './item.model';
export interface Day {
    id: number,
    date: Date,
    items: Item[],
    item_details?: Item[]; 
    meals: String[], 
}
