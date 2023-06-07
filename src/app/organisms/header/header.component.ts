import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuList: Array<any>;

  constructor() {
    this.menuList = [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'T-Shirt',
        url: '/t-shirt',
      },
      {
        name: 'Pants',
        url: '/pants',
      },
    ];
  }
}
