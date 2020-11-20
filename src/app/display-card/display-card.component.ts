import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/card.service';
import { CardModel } from '../shared/card.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
  cardList: CardModel[] = [];

  constructor(private cardService: CardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cardList = this.cardService.getCardList();
  }

  onEditClick(selectedCard: CardModel){
    this.router.navigate(['../edit-card'], { relativeTo: this.route, state: selectedCard });
  }

}
