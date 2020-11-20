export class AddressModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public contact: number,
        public addressType: string,
        public state: string,
        public city: string,
        public zipcode: number
    ){

    }
}