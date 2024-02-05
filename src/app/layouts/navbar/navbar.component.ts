import { Component } from '@angular/core';
import { Collapse, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor() {}
  ngOnInit(): void {
    initTE({ Collapse, Ripple });
  }
}
