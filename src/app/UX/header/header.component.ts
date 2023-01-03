import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    MatToolbarModule, MatIconModule, MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
