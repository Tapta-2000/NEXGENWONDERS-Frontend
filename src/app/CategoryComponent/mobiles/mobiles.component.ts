import { Component } from '@angular/core';
import { NexgenservicesService } from '../../Services/nexgenservices.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  constructor(private nexserv: NexgenservicesService){}
  mobarray:any[]=[];


  ngOnInit()
  {
    this.nexserv.getallmobs().subscribe((val)=>
    {
      this.mobarray=val;
      
    })


  }

}
