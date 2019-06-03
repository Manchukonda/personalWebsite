import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educationDetails = [
    {
      collegeName : "Mississippi State University",
      degree: "Master of Science",
      percentage: "GPA: 3.85/4.0",
      yearofCompletion: "Fall 2020",
      address: "Starkville, Mississippi. 39759 USA",
      department: "Computer Science and Engineering",
      logo: "../../assets/education/msstate.png"
    },
    {
      collegeName : "Birla Institute of Technology and Science(BITS)",
      degree: "PostGraduate on Internet of Things(IOT)",
      percentage: "75% Aggregated",
      yearofCompletion: "Fall 2018",
      address: "Work Integrated Online Course",
      department: "Internet of Things",
      logo: "../../assets/education/bits_modified.png"
    },
    {
      collegeName : "Vardhaman College of Engineering",
      degree: "Bachelor of technology",
      percentage: "81% Aggregated",
      yearofCompletion: "Fall 2017",
      address: "Hyderabad, Telangana. 501218 India",
      department: "Computer Science and Engineering",
      logo: "../../assets/education/vardhaman-modified.png"
    },
    {
      collegeName : "Narayana Junior College",
      degree: "Intermediate(11th & 12th Grade)",
      percentage: "96.2% Aggregated",
      yearofCompletion: "Fall 2013",
      address: "Hyderabad, Telangana. India",
      department: "Maths,Physics & Chemistry(MPC)",
      logo: "../../assets/education/narayana.png"
    },
    {
      collegeName : "Narayana Olympiad School",
      degree: "Secondary School Certificate(10th Grade)",
      percentage: "86.6% ",
      yearofCompletion: "Fall 2011",
      address: "Hyderabad, Telangana. India",
      department: "School",
      logo: "../../assets/education/narayana-school.png"
    }
  ];
  constructor() { }

  getEducationDetails(){
    return this.educationDetails;
  }
}
