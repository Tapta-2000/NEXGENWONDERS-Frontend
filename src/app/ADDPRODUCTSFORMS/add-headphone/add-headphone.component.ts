import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-headphone',
  templateUrl: './add-headphone.component.html',
  styleUrls: ['./add-headphone.component.css']
})
export class AddHeadphoneComponent {

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
      htype:new FormControl(null,Validators.required),
  
      modelname:new FormControl(null,Validators.required),
  
    
      color:new FormControl('select',Validators.required),
      phours:new FormControl(null,Validators.required),
      hdesign:new FormControl(null,Validators.required),
      bv:new FormControl(null,Validators.required),
      mic:new FormControl(null,Validators.required),
     
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
    const url='http://localhost:4000/headphone';
    this.http.post(url,this.mobform.value).subscribe((val)=>
    {
      console.log(val)
      
    })
    alert('Your Data Successfully Submitted')
  }
}
}
