import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-principal',
  templateUrl: './btn-principal.component.html',
  styleUrls: ['./btn-principal.component.css'],
})
export class BtnPrincipalComponent {
  @Input() text: string = '';
}
