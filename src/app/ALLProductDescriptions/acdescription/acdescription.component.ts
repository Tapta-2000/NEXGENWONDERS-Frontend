import { Component } from '@angular/core';
import { NexgenservicesService } from '../../Services/nexgenservices.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acdescription',
  templateUrl: './acdescription.component.html',
  styleUrls: ['./acdescription.component.css']
})
export class ACdescriptionComponent {

  constructor(private nexserve:NexgenservicesService,private activatedRoute:ActivatedRoute,private http:HttpClient){}

  laparray:any[]=[];
  productobj;
  productid;
  acurl:string='http://localhost:4000/acreviews'
  acarrrev:any[]=[]

  cartarray:any[]=[];

ngOnInit()
{

  this.nexserve.cartproducts().subscribe((val)=>
  {
    this.cartarray=val;
  })


  this.nexserve.getacreviews().subscribe(val=>
    {
      this.acarrrev=val;
    })

  this.activatedRoute.paramMap.subscribe((param)=>
  {
   this.productid= param.get('_id');
   console.log(this.productid);
  
  })

  this.nexserve.getallac().subscribe((val)=>
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




acdelete(id:string)
{
  this.nexserve.acdelete(id)

  
}


trending(obj:any)
{
  
}

}
