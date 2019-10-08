import { Component, OnInit,ViewChild } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {userCall} from "../login/userCall";

export interface Status {
  date  : string;
  statusWith: string; 
  with:string,
  statusTo:String,
  To:String
}

export interface ContractInfo {
  userEmail  : string;
  Products : {name : String;count:String; Price:string}[]; 
  createdOn:String,
  currentState:String,
  Accountant : String
}

const CONTRACT_STATUS: Status[] = [
  {
    date : "01 - 10 - 2019 16:24:20",
    statusWith :  "Pending With" ,
    with : "User",
    statusTo:"",
    To : ""
  },
  {
    date : "01 - 10 - 2019 13:24:20",
    statusWith :  "Pending With" ,
    with : "Dealer",
    statusTo:"On Hold",
    To : "User"
  },
  {
    date : "01 - 10 - 2019 10:24:20",
    statusWith :  "Initiated By" ,
    with : "User",
    statusTo:"Pending with",
    To : "Dealer"
  }
  // {detail : ' name : fsdgfd, sad:Asds'}, 

];

const CONTRACT_INFO:ContractInfo[]=[
{
  userEmail : "sdf " ,
  Products : [{name : "Tractor",count:'2', Price:"120"},
              {name : "Engine",count:'1', Price:"80"} ],
  createdOn:"01 - 10 - 2019",
  currentState:" InProcess",
  Accountant:"abc"
}
];

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
 
export class UserDashboardComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private _router: Router, private _user:userCall){}
  ngOnInit(){}

  displayedColumns: string[] = ['detail' ];
  dataSource = CONTRACT_STATUS;

  contractInfo=CONTRACT_INFO;

  // _loginexec( ) {
  //   var data = {
  //     Email: this.email,
  //     Password: this.password,
  //     Type:this.value
  //   }; 
  //   this._user.setUser(this.email,this.value);
  //   this._router.navigateByUrl('/'+data.Type);
    
  //   this._httpClient.post('http://127.0.0.1:3001/login1', data).subscribe((x) => {
  //     console.log(x);
  //     if (x == "True") { 
  //       this._user.setUser(data.Email,data.Type);  
  //       this._router.navigateByUrl('/'+data.Type);
  //     }
  //   });
  // }
}
