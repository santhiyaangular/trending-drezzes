import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenSizeService {
  shirtSize = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
  pantSize = [38, 40, 42, 44, 46];
  itemPrice = [10.99, 20.99, 25, 15.99, 12.99];

  public getSize(type: string){
    if (type === 'Casual Shirt')
    {
      return this.shirtSize;
    }
    else if (type === 'Formal Shirt')
    {
      return this.shirtSize;
    }
    else if (type === 'Jeans')
    {
      return this.pantSize;
    }
    else if (type === 'Trousers')
    {
      return this.pantSize;
    }
    else if (type === 'Shorts')
    {
      return this.pantSize;
    }
  }

  constructor() { }
}

