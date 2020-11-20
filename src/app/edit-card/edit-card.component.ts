import { Component, OnInit } from '@angular/core';
import { CardModel } from '../shared/card.model';
import { CardService } from '../shared/card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  card = new CardModel('', '', 0, '', 0);
  constructor(private cardService: CardService, private router: Router, private route: ActivatedRoute) {
    this.card = this.router.getCurrentNavigation().extras.state as CardModel;
   }

  ngOnInit(): void {
  }
  onClickSave(){
    this.cardService.updateCard(this.card);
    this.router.navigate(['../display-card'], {relativeTo: this.route});
  }

}
