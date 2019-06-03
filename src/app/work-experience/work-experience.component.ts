import { AngularFireDatabase } from 'angularfire2/database';
import { WorkExperienceService } from './../work-experience.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { timeout } from 'q';


@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

   workExperienceDetails = [];
   /*constructor(private wk:WorkExperienceService) {
    this.workExperienceDetails = wk.getWorkExperienceDetails();
   }*/

  constructor(db: AngularFireDatabase){
    var workExperienceVal = [];
    db.list('/workExperience').snapshotChanges()
      .subscribe(workExperience => {
        length = workExperience.length;
        var i = 1;
        while(i <= length){
          var workExperience_dummy = []
          db.list('/workExperience/'+i).snapshotChanges().subscribe(workExperience =>{
            var length = workExperience.length;
            var j = 0;
            var jsonObject = {}
            while(j < length){
              var key = workExperience[j].key
              var value = workExperience[j].payload.val()
              jsonObject[key] = value
              j = j + 1
            }
            workExperienceVal.push(jsonObject)
          })
          i = i + 1
        }
        console.log(workExperienceVal)
        this.workExperienceDetails = workExperienceVal;

      })
  }

  ngOnInit() {
  
  }

}
