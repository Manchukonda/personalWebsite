import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  htmlMain = "<main>";
  htmlMainEnd = "</main>";
  role = "SOFTWARE DEVELOPER";
  usNumber = "+1 662-497-0062";
  indiaNumber = "+91 9550246678";

  personalMail="manchukonda.harish548@gmail.com";
  universityMail="hm1089@msstate.edu";
  professionalMail="harish@potentiaco.com";

  aboutMe =  "I'm Currently working as Software Development Intern with Potentia Analytics. I am very much intreseted in Data Science and Analytics with Machine Learning techniques and \
  providing benificial results as predicitons. A part from that I have same interest in building website and applications which makes me feel better as computer science graduate. \
  I have a habbit of making things practical when I learn something. As part of those habbit I have made the applications you can visit in the projects tab.\
  I'm very much interested in learning new things and moving to new technologies and entusiastic for innovation. ";

  intrestedAreas = "Machine Learning Applicaitons, Web development, Android Development, Internet of Things, Virtual Reality & Augmented Reality";

  ngOnInit() {
  }

}
