import { AngularFireDatabase } from 'angularfire2/database';
import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projectDetails = [];
  /*constructor(private projects: ProjectsService) {
    this.projectDetails = projects.getProjectDetails();
   }*/

   constructor(db: AngularFireDatabase){
    var projectsVal = [];
    db.list('/projects').snapshotChanges()
      .subscribe(projects => {
        length = projects.length;
        var i = 1;
        while(i <= length){
          var projects_dummy = []
          db.list('/projects/'+i).snapshotChanges().subscribe(projects =>{
            var length = projects.length;
            var j = 0;
            var jsonObject = {}
            while(j < length){
              var key = projects[j].key
              var value = projects[j].payload.val()
              jsonObject[key] = value
              j = j + 1
            }
            projectsVal.push(jsonObject)
          })
          i = i + 1
        }
        console.log(projectsVal)
        this.projectDetails = projectsVal;

      })
  }

  ngOnInit() {
  }

}
