import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEmployeeService } from '../service-employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employee:Employee=new Employee();
  constructor(private employeeService:ServiceEmployeeService,private router:Router) { }

  saveEmployee(){
    this.employeeService.createEmployeesList(this.employee).subscribe(data=>{
       
      console.log(data);
       
      this.gotoEmployeeList();
    })
  }
  gotoEmployeeList()
  {
    this.router.navigate([``])
  }
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.employee)
    this.saveEmployee();
    
  }
}
