import { Component, OnInit, Input } from '@angular/core';
import { KidItemModel } from 'src/app/shared/kid-item.model';
import { KidItemService } from 'src/app/shared/kid-item.service';
import { KidsSizeService } from 'src/app/shared/kid-size.service';

@Component({
  selector: 'app-kidlist-item',
  templateUrl: './kidlist-item.component.html',
  styleUrls: ['./kidlist-item.component.css']
})
export class KidlistItemComponent implements OnInit {
  @Input ()
  item: KidItemModel;
  constructor(private kidsService: KidItemService, private kidsSizeService: KidsSizeService) { }

  ngOnInit(): void {
  }

  clickOnQty(event: Event){
    // console.log(event);
    this.item.qty= +(<HTMLInputElement>event.target).value;
    this.item.total= this.item.qty * this.item.rate;

  }

  getKidSize(name: string) {
    return this.kidsSizeService.getSize(name);
  }

}
