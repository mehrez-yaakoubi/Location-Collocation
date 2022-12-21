import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/model/owner';
import {  NgForm} from '@angular/forms';
import { OwnerServiceService } from 'src/app/services/owner-service.service';

@Component({
  selector: 'app-owner-register1',
  templateUrl: './owner-register1.component.html',
  styleUrls: ['./owner-register1.component.css']
})
export class OwnerRegister1Component implements OnInit {
 owner=new Owner();
   constructor(private _service:OwnerServiceService) { }

  ngOnInit(): void {
  }
 ownerRegister1()
  {
   this._service.ownerRegisterfromRemote(this.owner).subscribe(
    response=>
    {
      console.log(response)
      alert("Owner Registered successfully");

    });
   
   }
}
