import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormControl, FormControlName ,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private http :HttpClient){}

  signinform:FormGroup
  ngOnInit()
  {

    this.signinform=new FormGroup(
      {
        firstname:new FormControl(null,Validators.required),
        lastname:new FormControl(null,Validators.required),
        email:new FormControl(null,[Validators.required,Validators.email]),
        password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)])
    
      }
    )

  }

  get firstname()
  {
    return this.signinform.get('firstname');

  }
  get lastname()
  {
    return this.signinform.get('lastname');

  }

  get emailControl()
  
  {
    return this.signinform.get('email');

  }

  get passwordcontrol()
  {
    return this.signinform.get('password');
  }




  

  onsubmit()
  {
    const url='http://localhost:4000/userdetails';
    this.http.post(url,this.signinform.value).subscribe(val=>
      {
        console.log(val);
      })

  }

}
