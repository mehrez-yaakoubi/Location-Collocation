import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tenant } from '../model/tenant';
import {HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {

  constructor(private _http: HttpClient) { }

  public tenantRegisterfromRemote(tenant : Tenant):Observable<any>
  {
  return  this._http.post<any>("http://localhost:9000/registerTenant",tenant);
  }

  public tenantLoginfromRemote(tenant : Tenant):Observable<any>
  {
  return  this._http.post<any>("http://localhost:9000/loginTenant",tenant);
  }

  getTenants()
  {
    console.log("test call");
    return this._http.get<Tenant[]>('http://localhost:9000/admin/listTenants');
  }
}
