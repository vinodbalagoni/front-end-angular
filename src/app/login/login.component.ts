import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEmployeeService } from '../service-employee.service';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee:Employee = new Employee();

  emailId:string='';
  password:string='';
   

  constructor(private employeeService:ServiceEmployeeService,
    private router:Router,private route : ActivatedRoute,
    private interactionService:InteractionService) { }

  ngOnInit(): void {
   
  }
  
  onSubmit()
  {
    this.emailId=this.employee.emailId;
    this.password=this.employee.password;
    this.interactionService.sendMessage(this.emailId);
    this.employeeService.getEmployeeByemailId(this.emailId).subscribe(data=>
      {
         this.employee=data;
          
         if (this.employee.emailId==this.emailId &&this.employee.password==this.password) {

          this.employee.emailId='';
          this.employee.password='';
          console.log("Login Succsessful");
          this.router.navigate([`welcome`])
             
         }
          console.log(this.emailId)
         

      },error=>console.log(error));
      
    
  }
   

  
  

}
