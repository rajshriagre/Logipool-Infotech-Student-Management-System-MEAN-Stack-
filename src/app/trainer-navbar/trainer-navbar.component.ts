import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer-navbar',
  templateUrl: './trainer-navbar.component.html',
  styleUrls: ['./trainer-navbar.component.css']
})
export class TrainerNavbarComponent {
  ProfileFirstName:any=localStorage.getItem('firstName');
  ProfileLastName:any=localStorage.getItem('lastName');
  constructor(){
    // ProfileFirstName:localStorage.getItem('firstName');
    // ProfileLastName:localStorage.getItem('lastName');
    console.log("Rahul")
    console.log(this.ProfileFirstName)
    console.log(this.ProfileLastName)
  }
  // console.log(this.ProfileFirstName)
}
