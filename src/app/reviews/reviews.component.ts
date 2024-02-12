import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  constructor(private http:HttpClient){}

  lapreview:FormGroup;
  laprevarr;
  ngOnInit()
  {
    this.lapreview=new FormGroup({
      name:new FormControl(null,Validators.required),
      rating:new FormControl(null,Validators.required),
      image:new FormControl(null,Validators.required),
      review:new FormControl(null,Validators.required),
      explain:new FormControl(null,Validators.required)
    })

    
  }

  @Input()url:string
  
  reviewlap()
  {
    const url=this.url

    if(this.lapreview.invalid)
    {
      alert('Please all the field.Because all the fields are manadatory')
    }
    else{
      this.http.post(url,this.lapreview.value).subscribe(val=>
        {
          console.log(val);
        })
        alert('Your Review saved successfully.')

    }
  

  }
}
