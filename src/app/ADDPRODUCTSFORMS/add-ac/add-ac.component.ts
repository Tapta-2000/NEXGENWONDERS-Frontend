import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-ac',
  templateUrl: './add-ac.component.html',
  styleUrls: ['./add-ac.component.css']
})
export class AddAcComponent {

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
      capacity: new FormControl(null, Validators.required),
      star:new FormControl(null, Validators.required),
    


      color: new FormControl('select', Validators.required),
      cc: new FormControl(null, Validators.required),
      om: new FormControl(null, Validators.required),
      idimension: new FormControl(null, Validators.required),
      iweight: new FormControl(null, Validators.required),
      od: new FormControl(null, Validators.required),
      oweight: new FormControl(null, Validators.required),
      pr: new FormControl(null, Validators.required),
      aec: new FormControl(null, Validators.required),
      ac: new FormControl(null, Validators.required),
      AR: new FormControl(null, Validators.required),
      timer: new FormControl(null, Validators.required),
      cl: new FormControl(null, Validators.required),
      slm: new FormControl(null, Validators.required),

      warranty: new FormControl(null, Validators.required),


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
      const url = 'http://localhost:4000/acs';
      this.http.post(url, this.acform.value).subscribe((val) => {
        console.log(val)

      })
      alert('Your Data Successfully Submitted')
    }

  }
}
