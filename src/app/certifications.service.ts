import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {
  certificates = [
    {
      name:"BITS PILANI PG on IOT",
      year:"2018",
      standard:"Post Graduate",
      imagePath: "../../assets/certificates/bitsIOT.JPG"
    },
    {
      name:"Oracle Java SE6 Programmer",
      year:"2016",
      standard:"Oracle Certified Java Professional",
      imagePath: "../../assets/certificates/java.JPG"
    },
    {
      name:"Microsoft Technology Assosiate",
      year:"2016",
      standard:"Software Developement Fundamentals",
      imagePath: "../../assets/certificates/mta.JPG"
    }
  ];

  constructor() { }

  getCertificationDetails(){
    return this.certificates;
  }
}
