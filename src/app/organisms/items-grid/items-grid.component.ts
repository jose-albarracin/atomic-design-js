import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.css'],
})
export class ItemsGridComponent {
  @Input() listItems: Array<any> = [];

  constructor() {}
}
