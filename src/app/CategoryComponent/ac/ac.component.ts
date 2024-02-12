import { Component } from '@angular/core';
import { NexgenservicesService } from 'src/app/Services/nexgenservices.service';

@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.css']
})
export class ACComponent {
  constructor(private nexserve:NexgenservicesService){}

  acarr:any[]=[];

  ngOnInit()
  {
    this.nexserve.getallac().subscribe((val)=>
    {
      this.acarr=val;
    });

  }

}
