import { Component, OnInit } from '@angular/core';
import { AddressModel } from '../shared/address.model';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css']
})
export class DeliveryInfoComponent implements OnInit {
  // firstName: string = '';
  // lastName: string = '';
  // streetAddress:string = '';
  // city:string = '';
  // zipCode:number;
  // phoneNumber:number;

  AddressModel = new AddressModel('', '', '', 0, '', '', '', 0)



  constructor() { }

  ngOnInit(): void {
  }

}
