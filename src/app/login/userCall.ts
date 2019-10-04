import { Component, OnInit, Injectable } from '@angular/core';
import { user } from "./userDetail";

@Injectable({
  providedIn: "root"
})

export class userCall {
  private user: user = { Email: "",Type:"" };

  setUser(email, type) {
    this.user.Email = email;
    this.user.Type = type;
  }

  
  getUser(): String { 
    return this.user.Email;
  }
  
  getType(): String { 
    return this.user.Type;
  }


}