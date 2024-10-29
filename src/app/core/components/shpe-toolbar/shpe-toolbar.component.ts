import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shpe-toolbar',
  templateUrl: './shpe-toolbar.component.html',
  styleUrls: ['./shpe-toolbar.component.scss'],
})
export class ShpeToolbarComponent {
  constructor(private router: Router) {}

  navigateToCompanyPage(): void {
    this.router.navigate(['/']);
  }

  navigateToShpeGPTPage(): void {
    this.router.navigate(['/']);
  }

  sendEmail(): void {
    window.open(`mailto:${'ismailmustaali'}@${'gmail'}.${'com'}`, '_blank');
  }
}
