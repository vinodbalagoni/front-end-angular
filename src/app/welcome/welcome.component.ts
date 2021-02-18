import { Employee } from './../employee';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceEmployeeService } from '../service-employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  emailId:string='';

 employee:Employee=new Employee();
  constructor(private serviceEmployee:ServiceEmployeeService,private route : ActivatedRoute,
    private router :Router,private login:LoginComponent,private interactionService:InteractionService) {
       

     }
 
   
  ngOnInit(): void {

    this.interactionService.teacherMessage$.subscribe(message =>{
      this.serviceEmployee.getEmployeeByemailId(this.emailId).
      subscribe( data=>{
        this.employee=data; 
        console.log(this.employee)
      })
    })
    
        
        
     

}
 


   
}

