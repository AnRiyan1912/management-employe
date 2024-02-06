import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Collapse, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isDropdownOpen: boolean = false;

  constructor(private router: Router) {}

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateToListEmploye() {
    this.router.navigate(['/listemploye']);
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    initTE({ Collapse, Ripple });
  }
}
