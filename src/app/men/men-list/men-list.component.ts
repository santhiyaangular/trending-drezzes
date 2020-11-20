import { Component, OnInit, Input } from '@angular/core';
import { MenModel } from 'src/app/shared/men.model';
import { MenService } from 'src/app/shared/men-service';

@Component({
    selector: 'app-men-list',
    templateUrl: './men-list.component.html',
    styleUrls: ['./men-list.component.css']
})
export class MenListComponent implements OnInit{
    menItems: MenModel[];
    constructor(private menService: MenService){}
    ngOnInit(): void {
        this.menItems = this.menService.getMenItems();
    }
    
    


}