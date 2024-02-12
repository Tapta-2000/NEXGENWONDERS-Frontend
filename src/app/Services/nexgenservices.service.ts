import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NexgenservicesService {

  constructor(private http:HttpClient) { }

  categoryarr:any[]=[
    {
      name:'Laptops',
      image:'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp',
      routelink:'/laptops'
    },
    {
      name:'Mobiles',
      image:'https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      routelink:'/mobiles'
    },
    {
      name:'Headphones',
      image:'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      routelink:'/headphones'
    },
    {
      name:'Smart Televisions',
      image:'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB0ZWxldmlzaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      routelink:'/smarttv'
    },
    {
      name:'AC',
      image:'https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      routelink:'/AC'
    },
    {
      name:'Refrigerators',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTeC33FNnmyMUI5AOoBGnpCw0coe78y4r-g&usqp=CAU',
      routelink:'/refrigerators'
    },
  ]

getalllapis()
{
  const url='http://localhost:4000/laptops'
  return this.http.get<any[]>(url);
}
getallmobs()
{
  const url='http://localhost:4000/mobiles'
  return this.http.get<any[]>(url);
}

getallTv()
{
  const url='http://localhost:4000/smarttv'
  return this.http.get<any[]>(url);
}

getallac()
{
  const url='http://localhost:4000/acs'
  return this.http.get<any[]>(url);
}

getallfridge()
{
  const url='http://localhost:4000/fridge'
  return this.http.get<any[]>(url);
}

getallheadphones()
{
  const url='http://localhost:4000/headphone'
  return this.http.get<any[]>(url);
}

getuserdetails()
{
  const url='http://localhost:4000/userdetails'
  return this.http.get<any[]>(url);
}

cartproducts()
{
  const url='http://localhost:4000/Cart'
  return this.http.get<any[]>(url);
}

getallreviews()
{
  const url='http://localhost:4000/lapreviews'
  return this.http.get<any[]>(url);
}

getmobreviews()
{
  const url='http://localhost:4000/mobreviews'
  return this.http.get<any[]>(url);
}
getacreviews()
{
  const url='http://localhost:4000/acreviews'
  return this.http.get<any[]>(url);
}
getfridgereviews()
{
  const url='http://localhost:4000/fridgereviews'
  return this.http.get<any[]>(url);
}
gettvreviews()
{
  const url='http://localhost:4000/tvreviews'
  return this.http.get<any[]>(url);
}
getheadreviews()
{
  const url='http://localhost:4000/headreviews'
  return this.http.get<any[]>(url);
}
//.................. User Details..................

useremail:string;
userpwd:string;
news:boolean;
storeemail( user:any,news:boolean)
{
  this.useremail=user.email;
  this.userpwd=user.password;
  this.news=news;
 


}


//delete functions

justdelete(id:string)
{
  const url='http://localhost:4000/Cart/'
  this.http.delete(url+id).subscribe(val=>
    {
      console.log(val);
    })

}


acdelete(id:string)
{
  const url='http://localhost:4000/acs/'
  this.http.delete(url+id).subscribe(val=>
    {
      console.log(val);
    })

}
fridgedelete(id:string)
{
  const url='http://localhost:4000/fridge/'
  this.http.delete(url+id).subscribe(val=>
    {
      console.log(val);
    })

}
headdelete(id:string)
{
  const url='http://localhost:4000/headphone/'
  this.http.delete(url+id).subscribe(val=>
    {
      console.log(val);
    })

}
mobiledelete(id:string)
{
  const url='http://localhost:4000/mobiles/'
  this.http.delete(url+id).subscribe(val=>
    {
      console.log(val);
    })

}

productdelete(id:string)
{
  const url='http://localhost:4000/laptops/'
  this.http.delete(url+id).subscribe(val=>
    {
      console.log(val);
    })

}
tvdelete(id:string)
{
  const url='http://localhost:4000/smarttv/'
  this.http.delete(url+id).subscribe(val=>
    {
      console.log(val);
    })

}


}
