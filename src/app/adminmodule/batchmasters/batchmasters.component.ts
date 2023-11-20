import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-batchmasters',
  templateUrl: './batchmasters.component.html',
  styleUrls: ['./batchmasters.component.css']
})
export class BatchmastersComponent {
  //dummy data
  //for render in table
  batchDetails:any=[]

  //for render course names in modal box select box as its options
  courseDetails:any=[];


  //creating a form object of add batch form
  addBatchForm:FormGroup;

  //creating a form object of add batch form
  updateBatchForm:FormGroup;


  //to store temparory id
  selectedId:string="";

  cources:any=[];
  module:any=[];
  constructor(public http:HttpClient)
  { 
    //addBatchForm object creation
    this.addBatchForm=new FormGroup({
      'batchname':new FormControl(null,Validators.required),
      'coursename':new FormControl(null,Validators.required),
      'startdate':new FormControl(null,Validators.required),
      'enddate':new FormControl(null,Validators.required)
    
    });

    //updateBatchForm object creation
    this.updateBatchForm=new FormGroup({
      'updatedbatchname':new FormControl(null,Validators.required),
      'updatedcoursename':new FormControl(null,Validators.required),
      'updatedstartdate':new FormControl(null,Validators.required),
      'updatedenddate':new FormControl(null,Validators.required)
    })
  }


  ngOnInit(): void {

    //for course select box
    this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
    console.log("hello") ;
    console.log(data.allCourses);
       this.cources=data.allCourses;
       console.log(this.cources);
    });

    this.http.get("http://localhost:3000/admin/getAllBatch").subscribe((data:any)=>{
      console.log(data.allBatches);
       this.module=data.allBatches       ;
    });
  }

  

  //to render table data
  getAllBatches()
  {   

    //get batch api call

    console.log("Inside getAllBatches");
   
    this.http.get("http://localhost:3000/admin/getAllBatch").subscribe((data:any)=>{
      console.log(data);
      console.log(data.allBatches);
       this.module=data.allBatches
       ;
    });
  }

  addBatch()
  {
    console.log(this.addBatchForm);
    console.log(this.addBatchForm.value);


    let bodydata={
  
      courseName:this.addBatchForm.value.coursename,
      batchName:this.addBatchForm.value.batchname,
      startDate:this.addBatchForm.value.startdate,
      endDate:this.addBatchForm.value.enddate
    }

    console.log(typeof(bodydata.startDate))
    // console.log(bodydata);
    this.http.post("http://localhost:3000/admin/addBatch", bodydata).subscribe(  (resultData: any) => {
      console.log(resultData);
      console.log(resultData.message);
      console.log(resultData.status);
      this.getAllBatches();
        
        
      });
    
  
    //to reset the value of form.
    this.addBatchForm.reset();

  }

  //update code

  onUpdateBatch(data:any)
  { 
    console.log(data);
    
    
    
    this.updateBatchForm.controls['updatedbatchname'].setValue(data.name);
    this.updateBatchForm.controls['updatedcoursename'].setValue(data.course);
    this.updateBatchForm.controls['updatedstartdate'].setValue(data.startDate);
    this.updateBatchForm.controls['updatedenddate'].setValue(data.endDate);
    

    this.selectedId=data._id;
    
  }

  updateBatch()
  {
    console.log("inside update Student");
    console.log(this.updateBatchForm);
    console.log(this.updateBatchForm.value);

    let bodydata={
    
      batchName:this.updateBatchForm.value.updatedbatchname,
      courseName:this.updateBatchForm.value.updatedcoursename,
      startDate:this.updateBatchForm.value.updatedstartdate,
      endDate:this.updateBatchForm.value.updatedenddate

    }
    

    console.log(bodydata);

    //update api call
    this.http.put<any>( `http://localhost:3000/admin/updateBatch/${this.selectedId}`,bodydata).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      this.getAllBatches();
  });

     //to close the opened modal
     document.getElementById("close-btn")?.click();
     
    //to reset the value of form(i.e reset all text fileds of form)
    this.updateBatchForm.reset();

     
  }

  //delete logic

  onDeleteBatch(id:any)
  { 
    this.selectedId=id;
    console.log(this.selectedId);
  }

  deleteBatch()
  { 
    
    console.log("inside deleteBatch()");
    console.log(this.selectedId);
    
    //delete api call
    this.http.delete(`http://localhost:3000/admin/deleteBatch/${this.selectedId}`).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      this.getAllBatches();
    });

 
    this.selectedId="";

  }

}
