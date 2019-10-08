import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private _router: Router ) { }

Material=["Trator","Engine","Body"];
quantity=0;

  ngOnInit() {
  }

  // _loginexec( ) {
  //   var data = {
  //     Email: this.email,
  //     Password: this.password,
  //     Type:this.value
  //   }; 
  //   this._user.setUser(this.email,this.value);
  //   this._router.navigateByUrl('/'+data.Type);
    
  //   this._httpClient.post('http://127.0.0.1:3001/login1', data).subscribe((x) => {
  //     console.log(x);
  //     if (x == "True") { 
  //       this._user.setUser(data.Email,data.Type);  
  //       this._router.navigateByUrl('/'+data.Type);
  //     }
  //   });
  // }

}
