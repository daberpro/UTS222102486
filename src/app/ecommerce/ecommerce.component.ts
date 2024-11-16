import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {
  @Input() name: string = "";
  @Input() nim : string = "";
}
