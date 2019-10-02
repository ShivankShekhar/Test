import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AccountantDashboardComponent } from './accountant-dashboard/accountant-dashboard.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { DealComponent } from './deal/deal.component';
import { DealerActComponent } from './dealer-act/dealer-act.component';

const routes: Routes = [
  {
    path:'', 
    component: LoginComponent
  },
  {
    path:'User',
    component: UserDashboardComponent
  },
  {
    path:'Accountant',
    component: AccountantDashboardComponent
  },
  {
    path:'Dealer',
    component: DealerDashboardComponent
  },
  {
    path:'DealerAction',
    component: DealerActComponent
  },
  {
    path:'deal',
    component: DealComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
