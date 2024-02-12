import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){}

  form:string='select';

  selectform()
  {
    if(this.form !='select')
    {
      this.router.navigate([this.form])

    }
   

  }

}
