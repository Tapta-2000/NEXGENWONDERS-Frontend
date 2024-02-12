import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-fridge',
  templateUrl: './add-fridge.component.html',
  styleUrls: ['./add-fridge.component.css']
})
export class AddFridgeComponent {

  constructor(private http: HttpClient) { }


  acform: FormGroup;
  ngOnInit() {
    this.acform = new FormGroup({
      title: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      image1: new FormControl(null, Validators.required),
      image2: new FormControl(null, Validators.required),
      image3: new FormControl(null, Validators.required),

      rating: new FormControl(null, Validators.required),
      mrp: new FormControl(null, Validators.required),
      discount: new FormControl(null, Validators.required),
      finalprice: new FormControl(null, Validators.required),
      available: new FormControl(null, Validators.required),
      peoplerated: new FormControl(null, Validators.required),
      package: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),

      modelname: new FormControl(null, Validators.required),
      warranty: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
    
      
      capacity: new FormControl(null, Validators.required),
      star:new FormControl(null, Validators.required),
      mc: new FormControl(null, Validators.required),
      is: new FormControl(null, Validators.required),
    


      color: new FormControl('select', Validators.required),
     
      nod: new FormControl(null, Validators.required),
      h: new FormControl(null, Validators.required),
      width: new FormControl(null, Validators.required),
      d: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
     
      ciw: new FormControl(null, Validators.required),
      nciw: new FormControl(null, Validators.required),
      

      text: new FormControl(null, Validators.required),

    })

  }

  valid: boolean = false;

  onsubmit() {
    console.log(this.acform)
    if (this.acform.invalid) {
      this.valid = true;
      alert('Hello Badal ,Please Fill all the details .All details are mandatory')
    }
    else {
      const url = 'http://localhost:4000/fridge';
      this.http.post(url, this.acform.value).subscribe((val) => {
        console.log(val)

      })
      alert('Your Data Successfully Submitted')
    }

  }

}
