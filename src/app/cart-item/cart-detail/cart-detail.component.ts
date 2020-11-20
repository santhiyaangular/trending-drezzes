import { Component, OnInit } from '@angular/core';
import { CartItemService } from 'src/app/shared/cart-item.service';
import { WomenItemModel } from 'src/app/shared/women-item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cartItems = [];
 
  constructor(private cartItemService: CartItemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cartItems = this.cartItemService.getCartItems();
    });
  }
  onEdit(){
    this.router.navigate(['../women'], {relativeTo: this.route});
  }
}
