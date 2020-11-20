import { CardModel } from './card.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class CardService {
    cardList: CardModel[] = [
        new CardModel('visa', 'Jenifer', 786537654321, '06/23', 435),
        new CardModel('master', 'John', 987056448733, '03/26', 678),
        new CardModel('amex', 'Jessin', 564472990765, '02/22', 789),
        new CardModel('discover', 'Jannis', 657784531265, '05/25', 123)
    ];

    getCardList(){
        return this.cardList;
    }

    updateCard(updatedCard: CardModel){
        this.cardList.map(card => {
            if (card.cardNumber === updatedCard.cardNumber){
                return updatedCard;
            }else{
                return card;
            }
        });
    }

}