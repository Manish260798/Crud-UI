import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';

export const routes: Routes = [
    {
        path:"",
        component:EmployeeListComponent, 
    },
    {
        path: "employee-list",
        component:EmployeeListComponent
    },
    {
        path: "employee-form",
        component:EmployeeFormComponent
    },
    { 
        path: 'employee/:id', 
         component: EmployeeFormComponent 
    },
];

