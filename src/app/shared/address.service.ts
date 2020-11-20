import { AddressModel } from './address.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ManageAddress {
    
    addressList: AddressModel [] = [
        new AddressModel ('Anita', 'Sugumar', 'anitashally@gmail.com', 2483857061, '1432 Teal Trce', 'PA', 'Pittsburg', 15237),
        new AddressModel ('Sadeesh', 'Ramakrishnan','sadeeshivri@gmail.com', 4193246382, '1432 Oakhill ct', 'OH', 'Toledo', 14562)
    ];
 
    constructor() {
    }
    

    updateAddress(updatedAddress: AddressModel){
        this.addressList.map(address =>{
            if(address.email === updatedAddress.email){
                return updatedAddress;
            }else {
                return address;
            }
        });
    }


}