import { Injectable } from '@angular/core';
import { MenModel } from './men.model';

@Injectable({
  providedIn: 'root'
})
export class MenService {
  menItems: MenModel[] = [
    new MenModel('Casual Shirt', 'https://ae01.alicdn.com/kf/HTB1uskXOpXXXXXAXFXXq6xXFXXXg/Pioneer-Camp-casual-shirt-men-brand-clothing-2019-new-long-sleeve-slim-fit-solid-male-shirt.jpg', 10.99 , 0, 0),
    new MenModel('Formal Shirt', 'https://4.imimg.com/data4/QF/MU/MY-2428689/men-s-formal-shirt-500x500.jpg', 20.99, 0, 0),
    new MenModel('Jeans', 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/408487/item/goods_68_408487.jpg?width=2000', 25, 0, 0),
    new MenModel('Trousers', 'http://image.sportsmansguide.com/adimgs/l/2/224167i34_ts.jpg', 15.99, 0, 0),
    new MenModel('Shorts', 'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2015/07/03/14/Zalando%20Gant.jpg', 12.99, 0, 0)
  ];

  public getMenItems(){
    return this.menItems;
  }

  constructor() { }
}
