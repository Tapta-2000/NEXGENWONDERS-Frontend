import { Component } from '@angular/core';
import { NexgenservicesService } from '../Services/nexgenservices.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private category :NexgenservicesService){}
  catarr:any[]=[];
  ngOnInit()
  {
    this.catarr=this.category.categoryarr;

  }

}
