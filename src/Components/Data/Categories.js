import { Hotdogs } from "./Hotdogs";
import { DrinksOthers } from "./Drinks_Others";
import { Burgers } from "./Burgers";
import { Salchipapas } from "./Salchipapas";
import { PataconesOthers} from "./Patacones_Others";
import { Pizzas } from "./Pizzas";

export const Categories = [Pizzas, Hotdogs, Burgers, Salchipapas, PataconesOthers, DrinksOthers];

export const AllProducts = Pizzas.products.concat(Hotdogs.products).concat(Burgers.products).concat(Salchipapas.products).concat(PataconesOthers.products).concat(DrinksOthers.products);