import { Component ,OnInit} from '@angular/core';
import {NexgenservicesService} from '../../Services/nexgenservices.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  constructor(private nexserve:NexgenservicesService,private activatedRoute:ActivatedRoute){}

  laparray:any[]=[];
  productobj;
  productid;

ngOnInit()
{
  this.nexserve.getalllapis().subscribe((val)=>
  {
    this.laparray=val;

  });






}

}
