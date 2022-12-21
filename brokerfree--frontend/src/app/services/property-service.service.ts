import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
//import {HttpClient}from '@angular/common/http'
let pService = "http://localhost:8080/property/";
@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  
  constructor( private _http: HttpClient){}

  public addPropertyfromRemote(property : Property):Observable<any>
  {
  return  this._http.post<any>("http://localhost:9000/addProperty",property);
  }
  public getAllProperty():Observable<any>
  {
  return  this._http.get("http://localhost:9000/viewProperty");
}

public deleteProperty(pid:number) {
  return this._http.delete("http://localhost:9000/deleteProperty/"+pid);
}

public editProperty(pid: number,property:Property):Observable<any>{
  return this._http.put<any>("http://localhost:9000/updateProperty/"+pid,property);
}

uploadFile(file: File): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();
  formdata.append('file', file);
  const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
      reportProgress: true,
      responseType: 'text'
  });

  return this._http.request(req);
 }
}
