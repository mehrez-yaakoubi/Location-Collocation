import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/model/owner';
import { OwnerServiceService } from 'src/app/services/owner-service.service';
@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent implements OnInit {
  owner:any;
  constructor(private _service: OwnerServiceService) { }


  ngOnInit(): void {
  }
  
 ownerLogin()
 {
  this._service.ownerLoginfromRemote(this.owner).subscribe(

    data =>console.log("response received"),
    error =>console.log("exception occured")
   )
 }

}
