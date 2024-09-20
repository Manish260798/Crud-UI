import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { IEmployee } from '../../interfaces/employee';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

employee:any={};
employeeId!:number;
isEdit = false;
http = inject(HttpService)
route = inject(Router)
router = inject(ActivatedRoute)

formbuilder=inject(FormBuilder);
employeeform = this.formbuilder.group(
  {
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    age:['',[Validators.required]],
    salary:['',[Validators.required]],
    phone:['',[Validators.required]],
  }
)
OnSubmit(){
  // console.log(this.employeeform.value);

  const emp :IEmployee = {
    name: this.employeeform.value.name!,
    email : this.employeeform.value.email!,
    age : this.employeeform.value.age!,
    salary :this.employeeform.value.salary!,
    phone : this.employeeform.value.phone!,
    
  };
  if(this.isEdit)
    {
      console.log(this.employeeId);
      this.http.updateEmp(this.employeeId,emp).subscribe(res => {
        console.log("Updated");
        this.route.navigateByUrl("/")
      })
    }
    else{
  
    this.http.createEmployee(emp).subscribe(res => {
      console.log("created");
      this.route.navigateByUrl("/")
    })
    }
  
}

ngOnInit(){
this.employeeId = this.router.snapshot.params['id'];
if(this.employeeId)
{
  this.isEdit = true;
}
this.http.getEmployeeById(this.employeeId).subscribe(res =>{
  
  this.employeeform.patchValue(res);
  // this.employeeform.controls.email.disable();



  
})
}



}
