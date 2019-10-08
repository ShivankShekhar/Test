import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { userCall } from "../login/userCall";
import { detailGet } from "../detailGet";

export interface ContractInfo {
  email: string;
  createdOn: string;
  status: string;
  lUpdate: string;
}

const PENDING_CONTRACT: ContractInfo[] = [
  { email: '1', createdOn: '10-03-2019', status: 'Active', lUpdate: '10-03-2019' },
  { email: '2', createdOn: '10-03-2019', status: 'Active', lUpdate: '10-03-2019' },
  { email: '3', createdOn: '10-03-2019', status: 'Active', lUpdate: '10-03-2019' },
  { email: '4', createdOn: '10-03-2019', status: 'Active', lUpdate: '10-03-2019' },
  { email: '5', createdOn: '10-03-2019', status: 'Active', lUpdate: '10-03-2019' },
];

@Component({
  selector: 'app-accountant-dashboard',
  templateUrl: './accountant-dashboard.component.html',
  styleUrls: ['./accountant-dashboard.component.scss']
})
export class AccountantDashboardComponent implements OnInit { 

  dataSource:ContractInfo[]=[];

  constructor(private _httpClient: HttpClient, private _router: Router, private _user: userCall, private _contract: detailGet) {}

  ngOnInit() {
    this.onLogin();
  }

  onLogin() {
    var data = {
      Email: this._user.getUser(), 
      Type: this._user.getType()
    }; 

    this._httpClient.post('http://127.0.0.1:3001/accountantList', data).subscribe((res) => {
  
    this.dataSource=PENDING_CONTRACT;

        this.dataSource=res.data;
    });

  }


  displayedColumns: string[] = ['email', 'createdOn', 'status', 'lUpdate', 'Action'];

  call(deal: any) {
    var data = {
      Email: deal.email, 
      status: deal.status,
    }; 

    this._httpClient.post('http://127.0.0.1:3001/getDetail', data).subscribe((res) => {
   
    this._contract.setContract(res.data);
    this._router.navigateByUrl('/DealerAction');
  });
  }




}
