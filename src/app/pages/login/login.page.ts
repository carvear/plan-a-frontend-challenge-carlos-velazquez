import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(9)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(public loginService: LoginService) {}

  ngOnInit() {}

  /* Call the login service to verify and perform user login */
  login() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.loginService.login({ email, password });
    this.loginForm.reset();
  }
}
