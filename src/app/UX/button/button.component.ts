import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
 
})
export class ButtonComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: LoginService,
  ) { }
  back(): void {
    this.auth.setSession(false);
    this.router.navigate(['/', 'login']);
  }
  ngOnInit(): void {
  }

}
