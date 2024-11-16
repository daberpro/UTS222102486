import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EcommerceComponent,FooterComponent,NavbarComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nim: string = "222102486";
  nama: string = "Ari Susanto";
}
