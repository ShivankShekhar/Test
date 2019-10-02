import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AccountantDashboardComponent } from './accountant-dashboard/accountant-dashboard.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';

import { SharedModule } from './SharedModule/shared.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatGridListModule } from '@angular/material';
import { DealComponent } from './deal/deal.component';
import { DealerActComponent } from './dealer-act/dealer-act.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    AccountantDashboardComponent,
    DealerDashboardComponent,
    DealComponent,
    DealerActComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule ,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
