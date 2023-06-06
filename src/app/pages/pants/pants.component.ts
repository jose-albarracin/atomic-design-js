import { Component } from '@angular/core';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css'],
})
export class PantsComponent {
  items: Array<any>;

  constructor() {
    this.items = [
      {
        name: 'Pantalon 1',
        image: 'pantalon1.jpg',
        price: 98000,
      },
      {
        name: 'Pantalon 2',
        image: 'pantalon2.jpg',
        price: 65000,
      },
      {
        name: 'Pantalon 3',
        image: 'pantalon3.jpg',
        price: 73000,
      },
    ];
  }
}
