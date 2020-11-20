import { WomenItemModel } from './women-item.model';
import { Observable, Subject } from 'rxjs';

export class CartItemService {
    cartItems = [];
    cartItemsObservable = new Subject<WomenItemModel[]>();
    addItemToCart(item: WomenItemModel) {
        this.cartItems.push(item);
        this.cartItemsObservable.next(this.cartItems);
        console.log(this.cartItems.length);
    }
    getItemCount() {
        return this.cartItems.length;
    }
    getCartItems(){
       return this.cartItems;
    }
}