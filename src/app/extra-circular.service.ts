import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtraCircularService {

  extraCircularDetails = [
    {
      imagePath: "../../assets/extraCircular/5.JPG"
    },
    {
      imagePath: "../../assets/extraCircular/4.JPG"
    },
    {
      imagePath: "../../assets/extraCircular/3.JPG"
    },
    {
      imagePath: "../../assets/extraCircular/2.JPG"
    },
    {
      imagePath: "../../assets/extraCircular/1.JPG"
    }

  ];

  constructor() { }

  getExtraCircularDetails(){
    return this.extraCircularDetails;
  }
}
