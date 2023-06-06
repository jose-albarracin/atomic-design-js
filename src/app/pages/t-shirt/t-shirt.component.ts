import { Component } from '@angular/core';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.css'],
})
export class TShirtComponent {
  items: Array<any>;

  constructor() {
    this.items = [
      {
        name: 'Camisa 1',
        image: 'camisa1.jpg',
        price: 100000,
      },
      {
        name: 'Camisa 2',
        image: 'camisa2.jpg',
        price: 95000,
      },
      {
        name: 'Camisa 3',
        image: 'camisa3.jpg',
        price: 132000,
      },
    ];
  }
}
