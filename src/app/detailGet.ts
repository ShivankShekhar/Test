import { Component, OnInit, Injectable } from '@angular/core';
import { contractInfo } from "./contractInfo";

@Injectable({
  providedIn: "root"
})

export class detailGet {

  private contract: contractInfo = { 
        Email :"", 
        createdOn :"", 
        status :"", 
        lUpdate :"", 
    };

  setContract(data) {
        this.contract.Email = data.email, 
        this.contract.createdOn = data.createdOn, 
        this.contract.status = data.status, 
        this.contract.lUpdate = data.lUpdate
  }

  
  getDetail(): contractInfo { 
    return this.contract;
  }


}


