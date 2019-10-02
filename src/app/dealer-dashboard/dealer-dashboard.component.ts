import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {userCall} from "../login/userCall";

export interface PeriodicElement {
  user: string;
  Contract: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {user : '1', Contract : 'Hy'},
  {user : '2', Contract : 'He'}, 
];
export interface InventoryElement {
  Item: string;
  Quantity: string; 
}

const Inventory_DATA: InventoryElement[] = [
  {Item : 'Tractor', Quantity : '2'},
  {Item : 'Engine', Quantity : '3'},
  {Item : 'Tyre', Quantity : '5'}, 
];

@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dealer-dashboard.component.html',
  styleUrls: ['./dealer-dashboard.component.scss']
})
export class DealerDashboardComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private _router: Router  ) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['user', 'Contract' ];
  dataSource = ELEMENT_DATA;


  
  columns: string[] = ['Item', 'Quantity' ];
  Inventory = Inventory_DATA;


  deal(){
    this._router.navigateByUrl('/deal');
  }
  act(){
    this._router.navigateByUrl('/DealerAction');
  }
}
