import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'higino';
  public nameUpper: string = 'HIGINO';
  public fullName:  string = 'gOnCalVes HiGINO';

  public customDate: Date = new Date();

}
