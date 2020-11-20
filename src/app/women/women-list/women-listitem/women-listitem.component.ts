import { Component, OnInit, Input } from '@angular/core';
import { WomenItemModel } from 'src/app/shared/women-item.model';
import { WomenSizeService } from 'src/app/shared/women-size.service';
import { CartItemService } from 'src/app/shared/cart-item.service';

@Component({
  selector: 'app-women-listitem',
  templateUrl: './women-listitem.component.html',
  styleUrls: ['./women-listitem.component.css']
})
export class WomenListitemComponent implements OnInit {
@Input() womenItem: WomenItemModel;
  constructor(private womenSizeService: WomenSizeService,private cartItemService: CartItemService) { }

  ngOnInit(): void {
  }
  onClick(event: any){
    this.womenItem.quantity = +(<HTMLInputElement> event.target).value;
    this.womenItem.total = this.womenItem.price * this.womenItem.quantity;
  }
  getSize(type: string){
    return this.womenSizeService.getSize(type);
  }
  onAddToBagClicked(){
       this.cartItemService.addItemToCart(this.womenItem);
  }
}
