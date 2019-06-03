import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectDetails = [
    {
      name:"Code Runner",
      dates: "March 2014",
      paltform: "Windows Desktop Application",
      languages: "C#",
      Databases: "",
      Description: "The complete code is show as an image for some time and the code scrambles and moves around the screen. User has select the code as shown in previous image",
      imagePath : "../../assets/projects/codeRunner.jpg"

    },
    {
      name:"Smart Bill",
      dates: "December 2014 - Feb 2015",
      paltform: "Windows Phone Application",
      languages: "C#",
      Databases: "",
      Description: "Made a self billing app by taking the data of the store and make the payment online. It majorly reduces the queue near the billing counter and frustration.",
      imagePath : "../../assets/projects/smartBill.JPG"
    },
    {
      name:"My Diary (Mini Project)",
      dates: "June 2016 - Feb 2017",
      paltform: "Android Application",
      languages: "Java, Html, Css, Js",
      Databases: "SQL-lite",
      Description: "Made a online diary where you can post your photos with tags and write data and finally create a complete document out of the day and upload to the drive",
      imagePath: "../../assets/projects/myDairy.JPG"
    },
    {
      name:"Svakutumbaih Saha (Major Project)",
      dates: "March 2017 - June 2017",
      paltform: "Web Applicaiton",
      languages: "Java, Html, Css, JS",
      Databases: "Oracle",
      Description: "A web application which is used to connect your family and form a community among the group. Intension of the application is to generate the relationship among the people of the family based on the data provided by the user",
      imagePath: "../../assets/projects/svakutumbiahSaha.JPG"
    },
    {
      name:"FedEx Vehicle Telemetry and route tracking",
      dates: "Sep 2018 - Dec 2018",
      paltform: "Web Applicaiton",
      languages: "Java, Html5, Css3, JS, SpringBoot framework, Bootstrap, Jquery, UI Design Architecture, UserExperience, Jquery",
      Databases: "SQL",
      Description: "FedEx provided the requirements for the application that should maintain the data about vehicle and route information. Display the route information based on vehicle and number of packets delivered. Created a web application with back end support and showed the information about the vehicles and routes with minimum clicks and with the best possible UI.",
      imagePath: "../../assets/projects/fedex.JPG"
    },
    {
      name:"AI Door",
      dates: "Sep 2018 - Dec 2018",
      paltform: "Tensor Flow Application, Machine Learning",
      languages: "Python",
      Databases: "Google tensors",
      Description: "The AI Door scans the image when ever it detects the motion. If it detects the person belongs to owners family it unlocks the door. If not it will ask the name and purpose of visit of the person and send it to the owner of the home via email and he/she can authorize the unlocking the door. This projects converts door to smart door.",
      imagePath: "../../assets/projects/AiDoor.jpg"
    },
  ];
  constructor() { }

  getProjectDetails(){
    return this.projectDetails;
  }
}
