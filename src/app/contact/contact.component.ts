import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  database ;
  constructor(db: AngularFireDatabase) {
    this.database = db;
   }
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  contact = {}

  getRandomNumber() {
    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return random;
  }

  submit(){
    if(this.firstName && this.lastName && this.phone && this.email){
    this.contact["firstname"] = this.firstName;
    this.contact["lastname"] = this.lastName;
    this.contact["phone"] = this.phone;
    this.contact["email"] = this.email;
    this.contact["Description"] = this.description;
    console.log(this.contact);

    this.database.object('/contact/'+ this.getRandomNumber()).update(this.contact);
    alert("Thanks for details! Will contact you soon");
      }
    else
    {
      alert("Please Enter the required feilds");
    }
  }

  ngOnInit() {
    
  }

}
