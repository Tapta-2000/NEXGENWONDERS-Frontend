import { Component } from '@angular/core';
import { NexgenservicesService } from '../Services/nexgenservices.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private nexserve:NexgenservicesService){}

  userarr:any[]=[];
  ngOnInit()
  {
    this.nexserve.getuserdetails().subscribe(val=>
      {
        this.userarr=val;
        console.log(val)

      })

  }

  signinobj:any={
    email:'',
    password:''
  }
  onsubmit()
  {
  const obj=this.userarr.find((val)=>
  {
   return val.email==this.signinobj.email && val.password==this.signinobj.password;
  })
  console.log(obj)


  if(obj)
  {
    this.nexserve.storeemail(obj,true);
    alert('Log in Successful');
  }
  else{
    alert('Wrong Credential');
  }

  }

}
