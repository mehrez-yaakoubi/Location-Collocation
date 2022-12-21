import { Component, OnInit } from '@angular/core';
import {  NgForm} from '@angular/forms';

import { Owner } from 'src/app/model/owner';
import { OwnerServiceService } from 'src/app/services/owner-service.service';
@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.css']
})
export class OwnerRegisterComponent implements OnInit {
  owner!:Owner;
  constructor(private _service: OwnerServiceService) { }

  ngOnInit(): void {
  }
  ownerRegister()
  {
   this._service.ownerRegisterfromRemote(this.owner).subscribe(

    data =>console.log("response received"),
    error =>console.log("exception occured")
   )

  }

}
