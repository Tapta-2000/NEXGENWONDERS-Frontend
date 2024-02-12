import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-mob',
  templateUrl: './add-mob.component.html',
  styleUrls: ['./add-mob.component.css']
})
export class AddMobComponent implements OnInit {

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
      modelnum:new FormControl(null,Validators.required),
  
      modelname:new FormControl(null,Validators.required),
  
      type:new FormControl(null,Validators.required),
      color:new FormControl('select',Validators.required),
      os:new FormControl('os',Validators.required),
      pname:new FormControl(null,Validators.required),
      Pcore:new FormControl(null,Validators.required),
      Pclock:new FormControl(null,Validators.required),
      Sclock:new FormControl(null,Validators.required),
      memoryslot:new FormControl(null,Validators.required),
      rom:new FormControl(null,Validators.required),
      ram:new FormControl(null,Validators.required),
      Pcamera:new FormControl(null,Validators.required),
      Scamera:new FormControl(null,Validators.required),
      nt:new FormControl(null,Validators.required),
      bv:new FormControl(null,Validators.required),
      wv:new FormControl(null,Validators.required), 
      bc:new FormControl(null,Validators.required),
      bluetooth:new FormControl(null,Validators.required),
      dimension:new FormControl(null,Validators.required),
      weight:new FormControl(null,Validators.required),
      waranty:new FormControl(null,Validators.required),

     
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
    const url='http://localhost:4000/mobiles';
    this.http.post(url,this.mobform.value).subscribe((val)=>
    {
      console.log(val)
      
    })
    alert('Your Data Successfully Submitted')
  }
}

}