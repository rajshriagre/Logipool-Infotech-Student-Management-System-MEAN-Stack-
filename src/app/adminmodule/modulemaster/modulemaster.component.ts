import { HttpClient } from '@angular/common/http';
import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulemaster',
  templateUrl: './modulemaster.component.html',
  styleUrls: ['./modulemaster.component.css']
})
export class ModulemasterComponent implements OnInit{
  courses:any=[];
  courseName:any="";
  moduleName : string ="";
  module:any=[]
  selectedId:string='';

  addModuleForm:FormGroup;
  updateModuleForm:FormGroup;


  constructor(private http:HttpClient, private router: Router)
  {
     //add course form
     this.addModuleForm=new FormGroup({

      'coursename':new FormControl(null),
      'modulename':new FormControl(null)
    });

    //update copurse form
    this.updateModuleForm=new FormGroup({

      'updatedcoursename':new FormControl(null),
      'updatedmodulename':new FormControl(null)
    });

  }

  ngOnInit(): void {

    //for course select box
    this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
      console.log(data.allCourses);
       this.courses=data.allCourses;
    });

    //for rendering in table
    this.http.get("http://localhost:3000/admin/getAllModule").subscribe((data:any)=>{
      console.log("gsadj")
      console.log(data);
      this.module=data.allModules;
      console.log("rajshriii ")
      console.log(this.module)
       
    });

    

  }

  getAllModules()
  {
     //for rendering in table
     this.http.get("http://localhost:3000/admin/getAllModule").subscribe((data:any)=>{
      console.log(data);
      this.module=data.allModules;
      console.log("rajshriii ")
      console.log(this.module)
  });
}


  AddModule()
  {
  console.log(this.addModuleForm.value);
  let bodydata ={
    courseName:this.addModuleForm.value.coursename,
    moduleName :this.addModuleForm.value.modulename 
  };

  console.log(bodydata);
  
  this.http.post("http://localhost:3000/admin/addModule", bodydata).subscribe(  (resultData: any) => {
        console.log(resultData);
        console.log(resultData.message);
        console.log(resultData.status);
        this.getAllModules();
        
      });

      
     
     this.addModuleForm.reset();
  } 



//logic for delete

onDelete(id:any)
{
  console.log(id);
  this.selectedId=id;
}


deleteModule()
{ 
  console.log("Inside deleteModule function");
  console.log(this.selectedId);

  //call delete module api

  //http://localhost:3000/admin/deleteModule/652a64627ac7e678bd65df73

  this.http.delete(`http://localhost:3000/admin/deleteModule/${this.selectedId}`).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      this.getAllModules();
      
    });


  

}


//logic to update module

onUpdateModule(data:any)
{ 
  console.log("inside onUpdate")
  console.log(data);
  
  this.updateModuleForm.controls['updatedcoursename'].setValue(data.courseName);
  this.updateModuleForm.controls['updatedmodulename'].setValue(data.moduleName);
  
  this.selectedId=data._id;

}

updateModule()
{
  console.log("inside Update Module");

  let bodydata :any={
    courseName:this.updateModuleForm.value.updatedcoursename,
    moduleName:this.updateModuleForm.value.updatedmodulename
  };
  console.log(bodydata);
  //update module call api
   this.http.put<any>(`http://localhost:3000/admin/updateModule/${this.selectedId}`,bodydata).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      this.getAllModules();
    })
     
      this.selectedId="";
      
      this.updateModuleForm.reset();
 
      
  
}

}
