import { Component, OnInit } from '@angular/core';
import {  NgForm} from '@angular/forms';
import { Owner } from 'src/app/model/owner';
import { Property } from 'src/app/model/property';
import { PropertyServiceService } from 'src/app/services/property-service.service';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  property=new Property();
 // property!:Property;
  owner!:Owner;
  oid:any;
  userFile:any ;
  public imagePath: any;
  imgURL: any;
  message: any;
  constructor(private _service: PropertyServiceService){}



  ngOnInit(): void {
  } 
  //addProperty(propertyData:any)
  addProperty()
  {
//this.owner = JSON.parse(localStorage.getItem("session_id")!);
   // console.log(propertyData);
    //this.oid = this.owner.oid;
   this._service.addPropertyfromRemote(this.property).subscribe(

    data =>console.log("response received"),
    error =>console.log("exception occured")
   )
  }
  onSelectFile(event:any) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
     
      
    }
    

}
  
