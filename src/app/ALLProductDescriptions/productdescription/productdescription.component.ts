import { Component } from '@angular/core';
import { NexgenservicesService } from '../../Services/nexgenservices.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent {

  constructor(private nexserve:NexgenservicesService,private activatedRoute:ActivatedRoute,private http:HttpClient){}

  laparray:any[]=[];
  productobj;
  productid;
  cartarray:any[]=[];

  lapurl:string='http://localhost:4000/lapreviews'

ngOnInit()
{
  this.nexserve.cartproducts().subscribe((val)=>
  {
    this.cartarray=val;
  })

  this.activatedRoute.paramMap.subscribe((param)=>
  {
   this.productid= param.get('_id');
   console.log(this.productid);
  
  })

  this.nexserve.getalllapis().subscribe((val)=>
  {
    this.laparray=val;
    this.productobj=this.laparray.find(x=>x._id===this.productid);
    if(this.productobj != undefined)
    {
      console.log(this.productobj)
    }

  });

if(this.productobj !=undefined)
{
 console.log(this.productobj)
}

this.nexserve.getallreviews().subscribe(val=>
  {
    this.laprevarr=val;
  })

}



showmore:boolean=false;
showless:boolean=true;

show()
{
  this.showmore=true;
  this.showless=false;

}
showles()
{
  this.showless=true;
  this.showmore=false;
}



// send data to cart

addtocart(productobj:any)
{
  const cartobj:any=
  {
    id:productobj._id,
    image:productobj.image,
    title:productobj.title,
    finalprice:productobj.finalprice,
    available:productobj.available,
    email:this.nexserve.useremail

  }
 
  
 
  this.nexserve.cartproducts().subscribe((val)=>
  {
    this.cartarray=val.filter(x=>
      {
        return x.email==this.nexserve.useremail;
      });



    let check:boolean=true;
   for(let x of this.cartarray)
   {
    if(x.id==productobj._id)
    {
      check=false;
      console.log("false");
    }
   }

 if(check)
 {
  const url='http://localhost:4000/cart'
  this.http.post(url,cartobj).subscribe((val)=>
  {
    console.log("store in cart"+val)
  })
  alert('Added to the Cart')
 }
  })
}

// review.....................

laprevarr:any[]=[]

laptopdelete(id:string)
{
  this.nexserve.productdelete(id)

  
}




}
