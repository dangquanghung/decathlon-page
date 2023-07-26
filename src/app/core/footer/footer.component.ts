import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  version = VERSION.full;
  year = new Date().getFullYear();
}
