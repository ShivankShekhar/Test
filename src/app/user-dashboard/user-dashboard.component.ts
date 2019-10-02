import { Component, OnInit,ViewChild } from '@angular/core';
 
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
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})




export class UserDashboardComponent implements OnInit {

  ngOnInit(){}

  displayedColumns: string[] = ['user', 'Contract' ];
  dataSource = ELEMENT_DATA;

}
