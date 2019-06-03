import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationDetails = [];
  reveseDetails = [];
  /*constructor(private education: EducationService) {
    this.educationDetails = education.getEducationDetails();
   }*/
   constructor(db: AngularFireDatabase){
    var educationVal = [];
    db.list('/education').snapshotChanges()
      .subscribe(education => {
        length = education.length;
        var i = 1;
        while(i <= length){
          db.list('/education/'+i).snapshotChanges().subscribe(education =>{
            var lengthSub = education.length;
            var j = 0;
            var jsonObject = {}
            while(j < lengthSub){
              var key = education[j].key
              var value = education[j].payload.val()
              jsonObject[key] = value
              j = j + 1
            }
            educationVal.push(jsonObject)
          })
          i = i + 1
        }
        this.educationDetails = educationVal;

      })
  }

  ngOnInit() {
  }

}
