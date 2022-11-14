import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Key: string = 'session'
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
    eneble ? localStorage.setItem(this.Key,'sessionOn') : localStorage.setItem(this.Key,'sessionOf')
  }
  getSession() {
   return (localStorage.getItem(this.Key) === 'sessionOn') ? true : false
  }
}
