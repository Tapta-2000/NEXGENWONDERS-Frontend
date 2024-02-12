import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-tv',
  templateUrl: './add-tv.component.html',
  styleUrls: ['./add-tv.component.css']
})
export class AddTvComponent {
  constructor( private http:HttpClient){}


  mobform:FormGroup;
  ngOnInit()
  {
    this.mobform=new FormGroup({
      title:new FormControl(null,Validators.required),
      image:new FormControl(null,Validators.required),
      image1:new FormControl(null,Validators.required),
      image2:new FormControl(null,Validators.required),
      image3:new FormControl(null,Validators.required),
      
      rating:new FormControl(null,Validators.required),
      mrp:new FormControl(null,Validators.required),
      discount:new FormControl(null,Validators.required),
      finalprice:new FormControl(null,Validators.required),
      available:new FormControl(null,Validators.required),
      peoplerated:new FormControl(null,Validators.required),
      package:new FormControl(null,Validators.required),
      displaysize:new FormControl(null,Validators.required),
     
  
      modelname:new FormControl(null,Validators.required),
  
      screentype:new FormControl(null,Validators.required),
      color:new FormControl('select',Validators.required),
      hdmi:new FormControl(null,Validators.required),
      usb:new FormControl(null,Validators.required),
      series:new FormControl(null,Validators.required),
      wmi:new FormControl(null,Validators.required),
      brightness:new FormControl(null,Validators.required),
      cr:new FormControl(null,Validators.required),
      va:new FormControl(null,Validators.required),
      ar:new FormControl(null,Validators.required),
      rr:new FormControl(null,Validators.required),
      st:new FormControl(null,Validators.required),
      svf:new FormControl(null,Validators.required),
      saf:new FormControl(null,Validators.required),
      sapps:new FormControl(null,Validators.required),
      os:new FormControl(null,Validators.required),
      pname:new FormControl(null,Validators.required),
      smemory:new FormControl(null,Validators.required),
      weight:new FormControl(null,Validators.required),
      pmanage:new FormControl(null,Validators.required),
      pconsum:new FormControl(null,Validators.required),
      smirror:new FormControl(null,Validators.required),
      warranty:new FormControl(null,Validators.required),
      text:new FormControl(null,Validators.required),
     
      
    })

  }

  valid:boolean=false;

onsubmit()
{
  console.log(this.mobform)
  if(this.mobform.invalid)
  {
    this.valid=true;
    alert('Hello Badal ,Please Fill all the details .All details are mandatory')
  }
  else{
    const url='http://localhost:4000/smarttv';
    this.http.post(url,this.mobform.value).subscribe((val)=>
    {
      console.log(val)
      
    })
    alert('Your Data Successfully Submitted')
  }
}

}
