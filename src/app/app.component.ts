import { Component,OnInit } from '@angular/core';
import {userCall} from "./login/userCall";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ignite';
  userName;
  constructor(private _user:userCall){}

  ngOnInit(){
    this.userName= this._user.getUser();
  }
}
