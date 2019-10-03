import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {userCall} from "./userCall";
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: String = "";
  password: String = "";
  value: String = "Dealer";

  Options=["Dealer","User","Accountant"];
  
  constructor(private _httpClient: HttpClient, private _router: Router, private _user:userCall) { }

  ngOnInit() {
  }


  _login() {

    var data = {
      Email: this.email,
      Password: this.password,
      Type:this.value
    }; 
    this._httpClient.post('http://127.0.0.1:3001/login', data).subscribe((x) => {
      console.log(x);
    });

  }
 
  _loginexec( ) {
    var data = {
      Email: this.email,
      Password: this.password,
      Type:this.value
    }; 
    this._user.setUser(this.email);
    this._router.navigateByUrl('/'+data.Type);
    
    this._httpClient.post('http://127.0.0.1:3001/login1', data).subscribe((x) => {
      console.log(x);
      if (x == "True") {
        console.log('/'+data.Type);
        this._user.setUser(data.Email); 
        // window.open("http://localhost:3001/transact", "_blank");
        this._router.navigateByUrl('/'+data.Type);
      }
    });
  }

}
