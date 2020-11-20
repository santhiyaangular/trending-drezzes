import { Component, OnInit } from '@angular/core';
import { WomenItemService } from 'src/app/shared/women-item.service';
import { WomenItemModel } from 'src/app/shared/women-item.model';
import { WomenSizeService } from 'src/app/shared/women-size.service';

@Component({
  selector: 'app-women-list',
  templateUrl: './women-list.component.html',
  styleUrls: ['./women-list.component.css'],
  providers: [WomenItemService, WomenSizeService],
})
export class WomenListComponent implements OnInit {
womenItems = [new WomenItemModel('shirt',25.99,'../../assets/t-shirt.jpg',0,0)];

  constructor(private womenItemService: WomenItemService) { }

  ngOnInit(): void {
    this.womenItems = this.womenItemService.womenItems;
  }
 
 
}
