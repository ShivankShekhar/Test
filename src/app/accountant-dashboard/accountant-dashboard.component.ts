import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  user: string;
  Contract: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {user : '1', Contract : 'Hy'},
  {user : '2', Contract : 'He'},
  {user : '3', Contract : 'Li'},
  {user : '4', Contract : 'Be'},
  {user : '5', Contract : 'Bo'}, 
];

@Component({
  selector: 'app-accountant-dashboard',
  templateUrl: './accountant-dashboard.component.html',
  styleUrls: ['./accountant-dashboard.component.scss']
})
export class AccountantDashboardComponent implements OnInit {

  ngOnInit(){}

  displayedColumns: string[] = ['user', 'Contract' ];
  dataSource = ELEMENT_DATA;
}
