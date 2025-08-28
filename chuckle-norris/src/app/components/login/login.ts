import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  isRightPanelActive: boolean = false;

    toggleRightPanel(): void {
    this.isRightPanelActive = !this.isRightPanelActive;
  }
}
