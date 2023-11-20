import { Component } from '@angular/core';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent {
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
