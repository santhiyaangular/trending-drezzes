export class CardModel {
    constructor(
        public cardType: string,
        public nameOnCard: string,
        public cardNumber: number,
        public expDate: string,
        public cvv: number
    ){
    }
}