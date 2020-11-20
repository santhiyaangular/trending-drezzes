import { Component, OnInit } from '@angular/core';
import { AddressModel } from '../shared/address.model';
import { ManageAddress } from '../shared/address.service';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent implements OnInit {

  addressList: AddressModel [] = [];
  constructor(private manageAddress: ManageAddress ) { }
  ngOnInit(): void {
    this.addressList = this.manageAddress.addressList;
  }

 

  // addressDetails(){
  //   this.isCollapsed = this.isCollapsed;

  // }

  
}
