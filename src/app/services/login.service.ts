import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  session: boolean = false
  constructor() { }
  async tryLogin(user: string, password: string) {
    let url = 'http://localhost:4200/assets/login.json'
    let response = await fetch(url)
     let data = await response.json()     
     if (data.user.email === user && data.user.password === password) {
       this.setSession(true)
    }else  this.setSession(false)
  }
  setSession(eneble: boolean) {
    
    this.session = eneble
  }
  getSession() {

    return this.session
  }
}
