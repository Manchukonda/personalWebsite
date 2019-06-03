import { CertificationsService } from './../certifications.service';
import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certificateDetails = [];
  /*constructor(private certificates:CertificationsService) {
    this.certificateDetails = certificates.getCertificationDetails();
   }*/

   constructor(db: AngularFireDatabase){
    var certificateDetailsVal = [];
    db.list('/certifications').snapshotChanges()
      .subscribe(certifications => {
        length = certifications.length;
        var i = 1;
        while(i <= length){
          db.list('/certifications/'+i).snapshotChanges().subscribe(certifications =>{
            var length = certifications.length;
            var j = 0;
            var jsonObject = {}
            while(j < length){
              var key = certifications[j].key
              var value = certifications[j].payload.val()
              jsonObject[key] = value
              j = j + 1
            }
            certificateDetailsVal.push(jsonObject)
          })
          i = i + 1
        }
        console.log(certificateDetailsVal)
        this.certificateDetails = certificateDetailsVal;

      })
  }

  ngOnInit() {
  }

}
