import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserApiService } from '../../services/user-api-service';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  isRightPanelActive: boolean = false;
  newUser = {
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  };
  userLogin = {
    userName: '',
    password: ''
  };
  constructor(
    private userApiService: UserApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  toggleRightPanel(): void {
    this.isRightPanelActive = !this.isRightPanelActive;
  }

  login() {
   this.authService.setLoggedIn(true);  
    this.router.navigateByUrl('/home');
    // this.userApiService.getUserInfo(this.userLogin.).then((response) => {
    // this.authService.setLoggedIn(true);  
    // this.router.navigateByUrl('/home');
    //  this.userLogin = {
    //   userName: '',
    //   password: ''
    // };
    //}) 
    
    
  }

  createAccount() {
   
    
    this.userApiService.addUser(this.newUser).then((response) => {
      console.log('User created successfully:', response);
      this.authService.setLoggedIn(true);
      this.router.navigateByUrl('/home');
      this.newUser = {
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
      };
      this.isRightPanelActive = false;
    }).catch((error) => {
      console.error('Error creating user:', error);
    });
  }
}