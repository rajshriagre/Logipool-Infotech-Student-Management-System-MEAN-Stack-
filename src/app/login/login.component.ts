import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { LocalService } from './local.service';


import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  userRole:any="";
  userId:any="";

  userDetails:any=[]
  loginForm:FormGroup;


   constructor(private router: Router, private http: HttpClient,
    private authService:AuthService,public fb: FormBuilder)
   {

    this. loginForm = this.fb.group({
      "email": ['', Validators.required],
      "password": ['', Validators.required]
  
     });
     
   }

   

   ngOnInit(): void{
    // console.log(localStorage.getItem('token'))
    
    // //get batchtrainermodule api call
    // this.http.get("http://localhost:3000/student/getStudent/"+localStorage.getItem('token')).subscribe((data:any)=>{

    // console.log("Tushar")
    // console.log(data.result)
    //  console.log(data.result[0].courseName)
    //  localStorage.setItem('courseName',data.result[0].courseName);
    //  localStorage.setItem('batchName',data.result[0].batchName);
    //  localStorage.setItem('firstName',data.result[0].firstName);
    //  localStorage.setItem('lastName',data.result[0].lastName);
    //  localStorage.setItem('emailId',data.result[0].emailId);
    //  console.log(data.result[0].firstName);
    //  console.log(data.result[0].lastName)

    // //  console.log(data[0]);
    // //  console.log(data[0].result);

    // //  this.userDetails=data.batches;
    //  });

    //  this.http.get("http://localhost:3000/student/getBatchmates/"+localStorage.getItem('courseName')+"/"+localStorage.getItem('batchName')).subscribe((data:any)=>{

    //  console.log(data)
    // //  this.userDetails=data.batches;
    //  });
    }
 



  //  public getName()
  //  {

  //   localStorage.setItem('token','xhja787');
  //   localStorage.getItem('token');
  //   console.log( localStorage.getItem('token'))
  //  }
 OnSubmit()
 {  

  console.log(this.loginForm.value);

  let bodydata ={
    emailId:this.loginForm.value.email,
    password:this.loginForm.value.password
  };


  this.http.post("http://localhost:3000/user/login", bodydata).subscribe(  (resultData: any) => {
    console.log(resultData);
    console.log(resultData.message);
    console.log(resultData.status);
    console.log(resultData.user);
    this.userRole=resultData.user[0].Role;
    this.userId=resultData.user[0]._id;

    console.log(this.userId);

    localStorage.setItem('token',this.userId);
    localStorage.getItem('token')
    console.log("successfull")
    console.log(localStorage.getItem('token'))
  

    this.http.get("http://localhost:3000/student/getStudent/"+localStorage.getItem('token')).subscribe((data:any)=>{

    console.log("Tushar")
    console.log(data.result)
     console.log(data.result[0].courseName)
     localStorage.setItem('courseName',data.result[0].courseName);
     localStorage.setItem('batchName',data.result[0].batchName);
     localStorage.setItem('firstName',data.result[0].firstName);
     localStorage.setItem('lastName',data.result[0].lastName);
     localStorage.setItem('emailId',data.result[0].emailId);

     console.log("--------------------------");
     
     console.log(data.result[0].firstName);
     console.log(data.result[0].lastName);
     console.log("--------------------------");

     console.log(localStorage.getItem('firstName'));
     console.log(localStorage.getItem('lastName'));

     console.log("--------------------------");


     
   
  
     this.userDetails=data.batches;
     });


     if (this.userRole=="Trainer") 
    {
      this.authService.isLoggedIn = true;
      this.router.navigateByUrl('/trainerhome');

     } 

   else if(this.userRole=="Student")
     {

      this.router.navigateByUrl('/studenthome');
     }
    
    else if(this.userRole=="Admin")
     {

      this.router.navigateByUrl('/home');
     }
     else
      {
       alert("Incorrect Email or Password");
       console.log("Errror login");
     }
  });


 

  //  this.http.get("http://localhost:3000/student/getBatchmates/"+localStorage.getItem('courseName')+"/"+localStorage.getItem('batchName')).subscribe((data:any)=>{

  //  console.log(data)
  // //  this.userDetails=data.batches;
  //  });

  

 }


}

