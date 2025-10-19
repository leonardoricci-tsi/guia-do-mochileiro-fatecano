import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styles: [`
    .navbar-brand-title { line-height: 1.1; }
    .nav-link { color: #fff; opacity: .95; }
    .nav-link:hover { opacity: 1; }
    .nav-link.active { font-weight: 600; text-decoration: underline; text-underline-offset: 4px; }
    .brand-badge {
      width: 36px; height: 36px;
      display: grid; place-items: center;
    }
  `]
})
export class Navbar {}
