import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class homeComponent implements OnInit {

    search = new FormControl('', [Validators.required, Validators.email])
  constructor(private router: Router, private auth: LoginService) {}
  back(): void {
    this.auth.setSession(false)
    this.router.navigate(['/','login'])
  }
  ngOnInit(): void {}
}
