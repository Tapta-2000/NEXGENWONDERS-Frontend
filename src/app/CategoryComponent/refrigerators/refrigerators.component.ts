import { Component } from '@angular/core';
import { NexgenservicesService } from 'src/app/Services/nexgenservices.service';

@Component({
  selector: 'app-refrigerators',
  templateUrl: './refrigerators.component.html',
  styleUrls: ['./refrigerators.component.css']
})
export class RefrigeratorsComponent {


  constructor(private nexserve:NexgenservicesService){}
  allfridges:any[]

  ngOnInit()
  {
    this.nexserve.getallfridge().subscribe((val)=>
    {
      this.allfridges=val;

    })
  }
}
