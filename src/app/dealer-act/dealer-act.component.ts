import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {userCall} from "../login/userCall";

export interface PeriodicElement {
  Contract: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Contract : '1'},
  {Contract : '2'},
  {Contract : '3'}, 
];

@Component({
  selector: 'app-dealer-act',
  templateUrl: './dealer-act.component.html',
  styleUrls: ['./dealer-act.component.scss']
})
export class DealerActComponent implements OnInit {


  constructor(private _httpClient: HttpClient, private _router: Router  ) { }

  ngOnInit() {
  }

  displayedColumns: string[] = [  'Contract' ];
  dataSource = ELEMENT_DATA;


}
