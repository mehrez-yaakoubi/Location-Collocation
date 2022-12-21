import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../model/owner';
import {HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  constructor( private _http: HttpClient) {

   }
// calling method from java end points
  public ownerRegisterfromRemote(owner : Owner):Observable<any>
  {
  return  this._http.post<any>("http://localhost:9000/registerOwner",owner);
  }

  public ownerLoginfromRemote(owner : Owner):Observable<any>
  {
  return  this._http.post<any>("http://localhost:9000/loginOwner",owner);
  }

  getOwners()
  {
  
    return this._http.get<Owner[]>('http://localhost:9000/admin/listOwners');
  }

 
}
