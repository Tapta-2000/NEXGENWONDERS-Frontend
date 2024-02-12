import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-lap',
  templateUrl: './add-lap.component.html',
  styleUrls: ['./add-lap.component.css']
})
export class AddLapComponent implements OnInit {

  constructor( private http:HttpClient){}


  lapiform:FormGroup;
  ngOnInit()
  {
    this.lapiform=new FormGroup({
      title:new FormControl('mylaptop',Validators.required),
      image:new FormControl(null,Validators.required),
      image1:new FormControl(null,Validators.required),
      image2:new FormControl(null,Validators.required),
      image3:new FormControl(null,Validators.required),
      
      rating:new FormControl('5',Validators.required),
      mrp:new FormControl('70000',Validators.required),
      discount:new FormControl('11',Validators.required),
      finalprice:new FormControl('69998',Validators.required),
      available:new FormControl('7',Validators.required),
      peoplerated:new FormControl('1098',Validators.required),
      package:new FormControl('laptop charger',Validators.required),
      modelnum:new FormControl('gdrt56',Validators.required),
      part:new FormControl('bhjki9',Validators.required),
      modelname:new FormControl('victok8',Validators.required),
      series:new FormControl('vict',Validators.required),
      type:new FormControl('gaming',Validators.required),
      color:new FormControl('blue',Validators.required),
      pbrand:new FormControl('asus',Validators.required),
      pname:new FormControl('victor v8',Validators.required),
      ssd:new FormControl('512',Validators.required),
      ram:new FormControl('8',Validators.required),
      emmc:new FormControl('890',Validators.required),
      clock:new FormControl('290',Validators.required),
      ramf:new FormControl('7850',Validators.required),
      cache:new FormControl('4',Validators.required),
      gp:new FormControl('juok',Validators.required),
      cores:new FormControl('2',Validators.required),
      osa:new FormControl('windows',Validators.required),
      os:new FormControl('8',Validators.required),
      ts:new FormControl('YES',Validators.required),
      sr:new FormControl('1236*963',Validators.required),
      speaker:new FormControl('booz',Validators.required),
      bluetooth:new FormControl('8.13',Validators.required),
      weight:new FormControl('1.69',Validators.required),
      screen:new FormControl('14',Validators.required),
      screensize:new FormControl('1263*963',Validators.required),
      text:new FormControl('hello gaming laptop',Validators.required),
      
    })

  }

  valid:boolean=false;

onsubmit()
{
  console.log(this.lapiform)
  if(this.lapiform.invalid)
  {
    this.valid=true;
    alert('Hello Badal ,Please Fill all the details .All details are mandatory')
  }
  else{
    const url='http://localhost:4000/laptops';
    this.http.post(url,this.lapiform.value).subscribe((val)=>
    {
      console.log(val)
      
    })
    alert('Your Data Successfully Submitted')
  }

}







}
