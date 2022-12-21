import { Component, OnInit } from '@angular/core';
import { TenantServiceService } from 'src/app/services/tenant-service.service';
import { Tenant } from 'src/app/model/tenant';
@Component({
  selector: 'app-tenant-login',
  templateUrl: './tenant-login.component.html',
  styleUrls: ['./tenant-login.component.css']
})
export class TenantLoginComponent implements OnInit {
  tenant=new Tenant();
  constructor(private _service: TenantServiceService) { }

  ngOnInit(): void {
  }
  tenantLogin()
 {
  this._service.tenantLoginfromRemote(this.tenant).subscribe(

    data =>console.log("response received"),
    error =>console.log("exception occured")
   )
 }

}
