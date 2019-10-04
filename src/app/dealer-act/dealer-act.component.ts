import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import {userCall} from "../login/userCall";
import {detailGet} from "../detailGet";

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
    with : "User"
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
  selector: 'app-dealer-act',
  templateUrl: './dealer-act.component.html',
  styleUrls: ['./dealer-act.component.scss']
})
export class DealerActComponent implements OnInit {


  constructor(private _route: ActivatedRoute,private _httpClient: HttpClient, private _router: Router,private _contract:detailGet,private _user:userCall ) { }

 data;
 type;

  ngOnInit() {
    this.data=this._contract.getDetail();
    this.type=this._user.getType();
  }

isDealer(){ 
  return this.type=="Dealer";
}
  displayedColumns: string[] = ['detail' ];
  dataSource = CONTRACT_STATUS;

  contractInfo=CONTRACT_INFO;

}
