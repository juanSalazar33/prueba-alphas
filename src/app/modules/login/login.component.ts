import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private router: Router, private auth: LoginService) {}
  loginFK() {
    if (this.loginForm.status === "VALID") {
      this.auth.tryLogin(this.loginForm.get('user')?.value || '', this.loginForm.get('password')?.value || '').then(() => {
        if (this.auth.getSession()) {
          this.router.navigate(['/', 'home'])
        }
        else {
          alert("Usuario o contraseña invalida")
        }
      })
    }
  }
  ngOnInit(): void {}
}
