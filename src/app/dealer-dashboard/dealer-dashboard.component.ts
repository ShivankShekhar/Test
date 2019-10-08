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

export interface InventoryElement {
  Item: string;
  Quantity: string;
}

const Inventory_DATA: InventoryElement[] = [
  { Item: 'Tractor', Quantity: '2' },
  { Item: 'Engine', Quantity: '3' },
  { Item: 'Tyre', Quantity: '5' },
];

@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dealer-dashboard.component.html',
  styleUrls: ['./dealer-dashboard.component.scss']
})

export class DealerDashboardComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private _router: Router, private _user: userCall, private _contract: detailGet) { }


  displayedColumns: string[] = ['email', 'createdOn', 'status', 'lUpdate', 'Action'];
  columns: string[] = ['Item', 'Quantity'];

  dataSource:ContractInfo[]=[];
  Inventory:InventoryElement[]=[];

  ngOnInit() {
    this.onLogin();
    this.getInventory();
  }

  getInventory(){
    this._httpClient.get('http://127.0.0.1:3001/inventory').subscribe((res) => {

      this.Inventory = Inventory_DATA; 
      this.Inventory = res.data;
    });
  }

  onLogin() {
    var data = {
      Email: this._user.getUser(),
      Type: this._user.getType()
    };

    this.dataSource=PENDING_CONTRACT;

    this._httpClient.post('http://127.0.0.1:3001/dealerList', data).subscribe((res) => {

      this.dataSource = PENDING_CONTRACT;

      this.dataSource = res.data;
    });
  }


  deal() {
    this._router.navigateByUrl('/deal');
  }

  call(data) {
    console.log("asd" + data.user);
    this._contract.setContract(data);
    this._router.navigateByUrl('/DealerAction');
  }

}
