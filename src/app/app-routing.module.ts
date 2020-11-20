import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MenListComponent } from './men/men-list/men-list.component';
import { WomenListComponent } from './women/women-list/women-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KidListComponent } from './kids/kid-list/kid-list.component';
import { KidlistItemComponent } from './kids/kid-list/kidlist-item/kidlist-item.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { MenItemComponent } from './men/men-list/men-item/men-item.component';
import { PaymentInfoComponent } from './payment/payment-info.component';
import { WomenListitemComponent } from './women/women-list/women-listitem/women-listitem.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ManageCardComponent } from './manage-card/manage-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { DisplayAddressComponent } from './manage-address/display-address/display-address.component';
import { EditAddressComponent } from './manage-address/edit-address/edit-address.component';
import { CartDetailComponent } from './cart-item/cart-detail/cart-detail.component';
import { CartItemService } from './shared/cart-item.service';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'men', component: MenComponent},
      {path: 'women', component: WomenComponent},
      {path: 'kids', component: KidsComponent},
      {path: 'delivery-info', component: DeliveryInfoComponent},
      {path: 'payment-info', component: PaymentInfoComponent},
      {path: 'manage-card', component: ManageCardComponent,
        children: [
          {path: 'edit-card', component: EditCardComponent},
          {path: 'display-card', component: DisplayCardComponent}
        ]},
      {path: 'manage-address', component: ManageAddressComponent},
      {path: 'cart-detail', component: CartDetailComponent}
    ]}
];

@NgModule({
  declarations: [
    MenComponent,
    WomenComponent,
    KidsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    MenListComponent,
    WomenListComponent,
    KidListComponent,
    KidlistItemComponent,
    DeliveryInfoComponent,
    MenItemComponent,
    PaymentInfoComponent,
    WomenListitemComponent,
    CartItemComponent,
    ManageCardComponent,
    EditCardComponent,
    DisplayCardComponent,
    ManageAddressComponent,
    DisplayAddressComponent,
    EditAddressComponent,
    CartDetailComponent
  ],
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
  exports: [RouterModule, MenItemComponent, HomeComponent, HeaderComponent, FooterComponent, CommonModule, CartItemComponent],
  providers:[CartItemService]
})
export class AppRoutingModule { }
