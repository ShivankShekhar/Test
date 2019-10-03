import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import {userCall} from "../login/userCall";
import {detailGet} from "../detailGet";

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


  constructor(private _route: ActivatedRoute,private _httpClient: HttpClient, private _router: Router,private _contract:detailGet ) { }

 data;
  ngOnInit() {
    this.data=this._contract.getDetail();
    console.log(this.data);
  }

  displayedColumns: string[] = [  'Contract' ];
  dataSource = ELEMENT_DATA;


}
