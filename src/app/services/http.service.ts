import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/employee';
import { Observable } from 'rxjs';
import { EmployeeListComponent } from '../component/employee-list/employee-list.component';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

private apiBaseUrl ="https://localhost:7252";
http= inject(HttpClient)
  constructor() { }

  getAllEmplyee(){
    return this.http.get<IEmployee[]>(this.apiBaseUrl+"/api/Employee")
  }
  getEmployeeById(id:number){
    return this.http.get<IEmployee>(this.apiBaseUrl+"/api/Employee/"+id)
  }

  createEmployee(employee:IEmployee)
  {
    return this.http.post(this.apiBaseUrl+"/api/Employee",employee)
  }


  updateEmp(id:number, emp:IEmployee)
  {
    return this.http.put<IEmployee>(this.apiBaseUrl+"/api/Employee/"+id,emp)

  }

  deleteEmpById(id:number)
  {
    return this.http.delete<IEmployee>(this.apiBaseUrl+"/api/Employee/"+id)
  }

}
