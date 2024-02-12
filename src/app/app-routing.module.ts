import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdescriptionComponent } from './ALLProductDescriptions/productdescription/productdescription.component';
import { HomeComponent } from './home/home.component';
import { HeadphoneComponent } from './CategoryComponent/headphone/headphone.component';
import { LaptopsComponent } from './CategoryComponent/laptops/laptops.component';
import { MobilesComponent } from './CategoryComponent/mobiles/mobiles.component';
import { ACComponent } from './CategoryComponent/ac/ac.component';
import { RefrigeratorsComponent } from './CategoryComponent/refrigerators/refrigerators.component';
import { SmartTvComponent } from './CategoryComponent/smart-tv/smart-tv.component';
import { AddAcComponent } from './ADDPRODUCTSFORMS/add-ac/add-ac.component';
import { AddFridgeComponent } from './ADDPRODUCTSFORMS/add-fridge/add-fridge.component';
import { AddHeadphoneComponent } from './ADDPRODUCTSFORMS/add-headphone/add-headphone.component';
import { AddLapComponent } from './ADDPRODUCTSFORMS/add-lap/add-lap.component';
import { AddMobComponent } from './ADDPRODUCTSFORMS/add-mob/add-mob.component';
import { AddTvComponent } from './ADDPRODUCTSFORMS/add-tv/add-tv.component';
import { CartComponent } from './cart/cart.component';
import { ACdescriptionComponent } from './ALLProductDescriptions/acdescription/acdescription.component';
import { FdescriptionComponent } from './ALLProductDescriptions/fdescription/fdescription.component';
import { HdescriptionComponent } from './ALLProductDescriptions/hdescription/hdescription.component';
import { MdescriptionComponent } from './ALLProductDescriptions/mdescription/mdescription.component';
import { TVdescriptionComponent } from './ALLProductDescriptions/tvdescription/tvdescription.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'headphones',component:HeadphoneComponent},
  {path:'laptops',component:LaptopsComponent},
  {path:'mobiles',component:MobilesComponent},
  {path:'AC',component:ACComponent},
  {path:'refrigerators',component:RefrigeratorsComponent},
  {path:'smarttv',component:SmartTvComponent},
  {path:'Productdescription/:_id',component:ProductdescriptionComponent},
  {path:'ACdescription/:_id',component:ACdescriptionComponent},
  {path:'Fdescription/:_id',component:FdescriptionComponent},
  {path:'Hdescription/:_id',component:HdescriptionComponent},
  {path:'Mdescription/:_id',component:MdescriptionComponent},
  {path:'TVdescription/:_id',component:TVdescriptionComponent},
  {path:'Cart',component:CartComponent},

  {path:'addac',component:AddAcComponent},
  {path:'addfridge',component:AddFridgeComponent},
  {path:'addheadphone',component:AddHeadphoneComponent},
  {path:'addlap',component:AddLapComponent},
  {path:'addmob',component:AddMobComponent},
  {path:'addtv',component:AddTvComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
