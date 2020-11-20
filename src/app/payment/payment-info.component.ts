import { Component } from '@angular/core';
import { AddressModel } from '../shared/address.model';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent {
    billingAddress = new AddressModel('', '', '', 0, '', '', '', 0);

  constructor() { }

  onPaymentSaveClick(){
    console.log(this.billingAddress);
  }
}