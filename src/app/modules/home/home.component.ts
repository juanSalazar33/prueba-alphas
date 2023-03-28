import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employe } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class homeComponent implements OnInit {
  searchValue: string = '';
  breakpoint?: number;
  employes: Employe[] = [];
  constructor(
    private employe: EmployeeService
  ) {}
  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 500 ? 1 : 2;
    this.employe.getAllEmploye().then((data) => {
      this.employes = data.sort(function (a, b) {
        if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) {
          return -1;
        }
        if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    });
  }
  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 500 ? 1 : 2;
  }
}
