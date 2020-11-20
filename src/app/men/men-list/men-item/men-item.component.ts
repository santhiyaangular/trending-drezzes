import { Component, OnInit, Input } from '@angular/core';
import { MenModel } from 'src/app/shared/men.model';
import { MenSizeService } from 'src/app/shared/men-size.service';

@Component({
  selector: 'app-men-item',
  templateUrl: './men-item.component.html',
  styleUrls: ['./men-item.component.css']
})
export class MenItemComponent implements OnInit {
  @Input() item: MenModel;

  constructor(private menSizeService: MenSizeService) { }

  ngOnInit(): void {
  }
  getSize(x: string){
    return this.menSizeService.getSize(x);
}
  onClickQty(event: Event){
    this.item.quantity = +(event.target as HTMLInputElement).value;
    this.item.totalPrice = this.item.quantity * this.item.price;
}

}
