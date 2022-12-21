import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'


export class Admin{
  constructor(
    public email:string,
    public password:string
   
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private _http: HttpClient) { }
}
