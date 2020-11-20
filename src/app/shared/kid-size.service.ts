import { Injectable } from '@angular/core';

    @Injectable({
        providedIn: 'root'
      })

export class KidsSizeService {

    shirtSize = ['S','M', 'L'];
    pantSize = [6,8,10,12];
    jeansSize = [28,30,32,34];
    tshirtSize = [7, 9, 10, 12];
    constructor(){

    }

    public getSize(types:string){
        
        if (types==='Shirt'){
            return this.shirtSize
        }
        else if (types==='Trousers') {
            return this.pantSize
        }
        else if (types==='Jeans') {
            return this.jeansSize
        }
        else if (types==='T-shirt') {
            return this.tshirtSize
        }
    }
}