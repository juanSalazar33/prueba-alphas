import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRoutingModule } from './home.routing';
import { homeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
//Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
//filter
import { Filter } from 'src/app/pipes/filter.pipe';
@NgModule({
  declarations: [
    homeComponent,
    Filter
  ],
  imports: [
    CommonModule,
    homeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HomeModule { }
