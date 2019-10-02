import { Component, OnInit, Injectable } from '@angular/core';
import { user } from "./userDetail";

@Injectable({
  providedIn: "root"
})

export class userCall {
  private user: user = { Email: "" };

  setUser(email) {
    this.user.Email = email;
  }

  getUser(): String {
    return this.user.Email;
  }


}