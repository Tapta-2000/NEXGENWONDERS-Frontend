import { Component } from '@angular/core';
import { NexgenservicesService } from '../Services/nexgenservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  display = "none";
  id;
 
openModal(id:string) {
    this.display = "block";
    this.id=id;
  }
  onCloseHandled() {
    this.display = "none";
  }

  delete()
  {
    this.nexserve.justdelete(this.id);

  }







  constructor(private nexserve:NexgenservicesService){
    this.myemail=this.nexserve.useremail
    this.nexserve.cartproducts().subscribe(val=>
      {
        this.cartarray=val.filter(x=>
          {
            x.available=1;
            
            return x.email==this.myemail

          });
      })
  }
  cartarray:any[]=[];
  myemail:string

  totalprice:number=0;

  


  ngOnInit()
  {
    
   
      
     
      

      

  }

discount:number=60;
tax:number=30;

  totalpricefun()
  {
    let total:number=0;
    for(let x of this.cartarray)
    {
      total=total+parseInt(x.finalprice)*parseInt(x.available);
    }
   this.totalprice=total-this.discount+this.tax;
    return total;

  }


}
