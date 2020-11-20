import { WomenItemModel } from './women-item.model';

export class WomenItemService{
    womenItems: WomenItemModel[] = [new WomenItemModel('T-shirt',20.99,'../../assets/t-shirts.jpg',0,0),
                                new WomenItemModel('Jeans',15.99,'../../assets/jeanss.jpg',0,0),
                                new WomenItemModel('Skirt',17.99,'../../assets/skirt.jpg',0,0),
                                new WomenItemModel('Sweater',29.99,'../../assets/sweaters.jpg',0,0)
    ];
}