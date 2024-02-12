import { Component } from '@angular/core';
import { NexgenservicesService } from 'src/app/Services/nexgenservices.service';

@Component({
  selector: 'app-headphone',
  templateUrl: './headphone.component.html',
  styleUrls: ['./headphone.component.css']
})
export class HeadphoneComponent {

  constructor(private nexserve:NexgenservicesService){}

  headarr:any[]=[]

  ngOnInit()
  {
    this.nexserve.getallheadphones().subscribe(val=>
      {
        this.headarr=val;
      })
    

  }

}
