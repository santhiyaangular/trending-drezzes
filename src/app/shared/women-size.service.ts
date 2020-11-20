export class WomenSizeService{
    shirtSize = ['s','m','l','xl'];
    jeansSize = ['26','28','30','32','34'];
    skirtSize = ['26','28','30','32','34'];
    sweaterSize = ['s','m','l','xl'];
    getSize(type:string){
        
        if (type==='T-shirt'){
            return this.shirtSize;
        }
        else if (type==='Jeans') {
            return this.jeansSize;
        }
        else if (type==='Skirt') {
            return this.skirtSize;
        }
        else if (type==='Sweater') {
            return this.sweaterSize;
        }
    }
}