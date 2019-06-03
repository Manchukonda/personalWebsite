import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { ExtraCircularService } from '../extra-circular.service';

@Component({
  selector: 'extra-circular-activities',
  templateUrl: './extra-circular-activities.component.html',
  styleUrls: ['./extra-circular-activities.component.css']
})
export class ExtraCircularActivitiesComponent implements OnInit {

  extraCircularDetails = [];
  /*constructor(private extraCircular: ExtraCircularService) {
    this.extraCircularDetails = extraCircular.getExtraCircularDetails();
   }*/

   constructor(db: AngularFireDatabase){
    var extraCircularVal = [];
    db.list('/extraCircular').snapshotChanges()
      .subscribe(extraCircular => {
        length = extraCircular.length;
        var i = 1;
        while(i <= length){
          var projects_dummy = []
          db.list('/extraCircular/'+i).snapshotChanges().subscribe(extraCircular =>{
            var length = extraCircular.length;
            var j = 0;
            var jsonObject = {}
            while(j < length){
              var key = extraCircular[j].key
              var value = extraCircular[j].payload.val()
              jsonObject[key] = value
              j = j + 1
            }
            extraCircularVal.push(jsonObject)
          })
          i = i + 1
        }
        console.log(extraCircularVal)
        this.extraCircularDetails = extraCircularVal;

      })
  }

  ngOnInit() {
  }

}
