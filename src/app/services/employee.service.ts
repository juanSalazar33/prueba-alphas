import { Injectable } from '@angular/core';
import { Employe } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }
  async getAllEmploye() {
    let url = 'http://localhost:4200/assets/employe.json'
    let response = await fetch(url)
    let data: Employe[]  = await response.json() 
    return data
  }
}
