import { Component, inject, Injector, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

employeeList: IEmployee[] = [];

displayedColumns: string[] = ['id','name', 'email', 'age', 'salary', 'phone','actions'];
constructor(private httpService: HttpService){}
router =inject(Router)



editEmployee(id:number)
{
  console.log(id);
  this.router.navigateByUrl('/employee/'+id);

}
deleteEmployee(id:number)
{
this.httpService.deleteEmpById(id).subscribe(() =>
{
  console.log("Employee Deleted");
  this.loadEmployees();
 
  
}
)
}
loadEmployees() {
  // Call your service to load the employees
  this.httpService.getAllEmplyee().subscribe(data => {
    this.employeeList = data; // Assuming this is your employee data
  });
}


ngOnInit(): void {
  this.httpService.getAllEmplyee().subscribe(response=>{
    this.employeeList= response;
    console.log(this.employeeList);

    // this.httpService.getEmployeeById().
   
  })
}


}
