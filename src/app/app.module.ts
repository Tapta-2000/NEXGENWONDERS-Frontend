import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingproductsComponent } from './trendingproducts/trendingproducts.component';
import { ProductdescriptionComponent } from './ALLProductDescriptions/productdescription/productdescription.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HeadphoneComponent } from './CategoryComponent/headphone/headphone.component';
import { NexgenservicesService } from './Services/nexgenservices.service';
import { LaptopsComponent } from './CategoryComponent/laptops/laptops.component';
import { MobilesComponent } from './CategoryComponent/mobiles/mobiles.component';
import { ACComponent } from './CategoryComponent/ac/ac.component';
import { RefrigeratorsComponent } from './CategoryComponent/refrigerators/refrigerators.component';
import { SmartTvComponent } from './CategoryComponent/smart-tv/smart-tv.component';
import { AddLapComponent } from './ADDPRODUCTSFORMS/add-lap/add-lap.component';
import { AddMobComponent } from './ADDPRODUCTSFORMS/add-mob/add-mob.component';
import { AddHeadphoneComponent } from './ADDPRODUCTSFORMS/add-headphone/add-headphone.component';
import { AddTvComponent } from './ADDPRODUCTSFORMS/add-tv/add-tv.component';
import { AddAcComponent } from './ADDPRODUCTSFORMS/add-ac/add-ac.component';
import { AddFridgeComponent } from './ADDPRODUCTSFORMS/add-fridge/add-fridge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http';
import { ReviewsComponent } from './reviews/reviews.component';
import { CartComponent } from './cart/cart.component';

import { ACdescriptionComponent } from './ALLProductDescriptions/acdescription/acdescription.component';
import { FdescriptionComponent } from './ALLProductDescriptions/fdescription/fdescription.component';
import { HdescriptionComponent } from './ALLProductDescriptions/hdescription/hdescription.component';
import { MdescriptionComponent } from './ALLProductDescriptions/mdescription/mdescription.component';
import { TVdescriptionComponent } from './ALLProductDescriptions/tvdescription/tvdescription.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TrendingproductsComponent,
    ProductdescriptionComponent ,
    CategoriesComponent,
    HeadphoneComponent,
    LaptopsComponent,
    MobilesComponent,
    ACComponent,
    RefrigeratorsComponent,
    SmartTvComponent,
    AddLapComponent,
    AddMobComponent,
    AddHeadphoneComponent,
    AddTvComponent,
    AddAcComponent,
    AddFridgeComponent,
    ReviewsComponent,
    CartComponent,
   
    ACdescriptionComponent,
    FdescriptionComponent,
    HdescriptionComponent,
    MdescriptionComponent,
    TVdescriptionComponent,
    SignupComponent,
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [NexgenservicesService],
  bootstrap: [AppComponent]
})
export class AppModule {  } 
