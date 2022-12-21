import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/model/owner';
import { OwnerServiceService } from 'src/app/services/owner-service.service';

@Component({
  selector: 'app-owner-login1',
  templateUrl: './owner-login1.component.html',
  styleUrls: ['./owner-login1.component.css']
})
export class OwnerLogin1Component implements OnInit {
  Owner=new Owner();
 
  constructor(private _service:OwnerServiceService) { }

  ngOnInit(): void {
  }
  ownerLogin()
 {
  this._service.ownerLoginfromRemote(this.Owner).subscribe(
    response=>
    {
      console.log(response)
      alert("Owner Logged In successfully");

    });
   
   }
}
