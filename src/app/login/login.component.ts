import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target 
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    console.log(username, password)
  
    this.Auth.getUserDetails(username, password){

    }
  }
}
