import { Component } from '@angular/core';
import { NexgenservicesService } from 'src/app/Services/nexgenservices.service';

@Component({
  selector: 'app-smart-tv',
  templateUrl: './smart-tv.component.html',
  styleUrls: ['./smart-tv.component.css']
})
export class SmartTvComponent {

  constructor(private nexserve:NexgenservicesService){}
  alltv:any[]=[];
  ngOnInit()
  {
    this.nexserve.getallTv().subscribe((val)=>
    {
      this.alltv=val;
      console.log(val);

    })
  }

}
