import { Component, OnInit } from '@angular/core';
import { Tenant } from 'src/app/model/tenant';
import { TenantServiceService } from 'src/app/services/tenant-service.service';

@Component({
  selector: 'app-tenant-register',
  templateUrl: './tenant-register.component.html',
  styleUrls: ['./tenant-register.component.css']
})
export class TenantRegisterComponent implements OnInit {
  tenant=new Tenant();
  constructor(private _service: TenantServiceService) { }

  ngOnInit(): void {
  }
  tenantRegister()
  {
   this._service.tenantRegisterfromRemote(this.tenant).subscribe(

    response=>
    {
      console.log(response)
      alert("Tenant Registered successfully");

    });
   
   }
}