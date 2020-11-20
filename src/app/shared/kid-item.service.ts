import { Injectable } from '@angular/core';
import { KidItemModel } from './kid-item.model';

@Injectable({
  providedIn: 'root'
})
export class KidItemService {

  items = [
    new KidItemModel('../../assets/shirt.png','Shirt', 10, 0, 0), 
    new KidItemModel('../../assets/short.jpg','Trousers', 9, 0, 0),   
    new KidItemModel('../../assets/jeans.jpg','Jeans', 8, 0, 0),
    new KidItemModel('../../assets/tshirt.png','T-shirt', 7, 0, 0)
  ];

  constructor() { }
}
