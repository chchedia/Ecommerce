import { Product } from './product';
export class Mousse extends Product{
    constructor(title, description, image, price, stock){super('Oreillers '+title, description, image, price+10, 6)}  
}
