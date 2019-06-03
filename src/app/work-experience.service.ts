import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  /*workExperienceDetails = [
    {
      name: "OpenText Technologies Pvt. Ltd",
      dates:"Feb 2017 – June 2017",
      address: "Hyderabad, India",
      Role: "Software Developer Intern",
      Team : "BPM",
      Description: " Worked as automation intern for web application with selenium technology in Opentext BPM unit.  Developed automation scripts for complete application.",
      logo: "../../assets/work/opentext_logo.png"
    },
    {
      name: "OpenText Technologies Pvt. Ltd",
      dates:"July 2017 – July 2018",
      address: "Hyderabad, India",
      Role: "Software Developer",
      Team : "OpenText Media Management",
      Description: " Worked as developer for web application with java script technology in Opentext Custom UI platform. Developed date-time custom widget using JQuery.",
      logo: "../../assets/work/opentext_logo.png"
    },
    {
      name: "Potentia Analytics",
      dates:"May 2019 – July 2019",
      address: "Carbondale, Illinios",
      Role: "Software Developer Intern",
      Team : "Bernoulli",
      Description: " Data Analysis and Applications on Machine Learning",
      logo: "../../assets/work/PA.png"
    }

  ]*/
  workExperienceDetails = []
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
        //WorkExperienceComponent.workExperienceDetails = workExperienceVal;
      })
  }

   getWorkExperienceDetails(){
          return this.workExperienceDetails;
    }
}
