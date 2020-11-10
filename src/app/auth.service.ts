import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor
  constructor(private http: HttpClinentModule) { }

  getUserDetails(username, password){
    //post these details to API server return user info if correct
    return this.http.post{'api/auth.php',{
      username,
      password
    }).subscribe(data =>{
      console.log(data, "is what we got from the server")
    })
  }
}
