import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { Router } from '@angular/router';
import {userCall} from "../login/userCall";
import {detailGet} from "../detailGet";

export interface ContractInfo {
  email: string;
  createdOn: string; 
  status: string; 
  lUpdate: string; 
}

const PENDING_CONTRACT: ContractInfo[] = [
  {email : '1', createdOn : '10-03-2019',status:'Active', lUpdate:'10-03-2019'},
  {email : '2', createdOn : '10-03-2019',status:'Active', lUpdate:'10-03-2019'},
  {email : '3', createdOn : '10-03-2019',status:'Active', lUpdate:'10-03-2019'},
  {email : '4', createdOn : '10-03-2019',status:'Active', lUpdate:'10-03-2019'},
  {email : '5', createdOn : '10-03-2019',status:'Active', lUpdate:'10-03-2019'}, 
];

@Component({
  selector: 'app-accountant-dashboard',
  templateUrl: './accountant-dashboard.component.html',
  styleUrls: ['./accountant-dashboard.component.scss']
})
export class AccountantDashboardComponent implements OnInit {

constructor( private _router: Router, private _user:userCall,private _contract:detailGet) { }

  ngOnInit(){}

  displayedColumns: string[] = ['email', 'createdOn' ,'status', 'lUpdate', 'Action' ];
  dataSource = PENDING_CONTRACT;

  call(data){

    console.log("asd"+data.user);
    this._contract.setContract(data);
    this._router.navigateByUrl('/DealerAction' );
  }
}
