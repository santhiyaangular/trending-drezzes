import { Component, OnInit } from '@angular/core';
import { KidItemModel } from 'src/app/shared/kid-item.model';
import { KidItemService } from 'src/app/shared/kid-item.service';






@Component({
  selector: 'app-kid-list',
  templateUrl: './kid-list.component.html',
  styleUrls: ['./kid-list.component.css']
})
export class KidListComponent implements OnInit {
  kidsItem: KidItemModel[];
  total: string;
  constructor(private service: KidItemService) { }

  ngOnInit() {
    this.kidsItem = this.service.items;
  }

 

  
}
