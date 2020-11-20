import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../shared/cart-item.service';
import { Subscriber, Observable, Subscription } from 'rxjs';
import { WomenItemModel } from '../shared/women-item.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
image="../assets/cartitem.jpg";
private observableSubscribtion: Subscription;
womenItem: WomenItemModel;
cartItems=[];
cartItemCount = 0;
  constructor(private cartitemService: CartItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartItemCount = this.cartitemService.getItemCount();
    const customObservable = this.cartitemService.cartItemsObservable
    .subscribe((itemList: WomenItemModel[]) => {
      this.cartItemCount = itemList.length;
    });
   
  }
  onClick(){
    this.router.navigate(['cart-detail'],{relativeTo: this.route});
   }

}
