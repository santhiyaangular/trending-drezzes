import { Component, OnInit, Input } from '@angular/core';
import { AddressModel } from 'src/app/shared/address.model';
import { ManageAddress } from 'src/app/shared/address.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-address',
  templateUrl: './display-address.component.html',
  styleUrls: ['./display-address.component.css']
})
export class DisplayAddressComponent implements OnInit {
  @Input() address: AddressModel;
  isEdited:boolean = true;

  constructor(private manageAddress: ManageAddress) { }

  ngOnInit(): void {
   
  }
  onSelect(){
        this.isEdited = !this.isEdited;
   
  }

  updateAddress(){
    console.log(this.address);
    this.manageAddress.updateAddress(this.address);
    this.isEdited = !this.isEdited;
    // console.log(updatedAddress);
  }

  updateField(event: Event, field: string){
    if(field === 'firstName'){
      this.address.firstName = (<HTMLInputElement>event.target).value;
    }
  }
}
