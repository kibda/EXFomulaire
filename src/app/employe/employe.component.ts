import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employe } from '../model/employe';
import { EmployeServiceService } from '../services/employe-service.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
fonction:string[]=[
 "secretaire","enseignant","directeur" 
];
t:Employe[]=[];
e:Employe=new Employe(0,"","","");
exst:boolean=false;
  constructor(private emps:EmployeServiceService) { }


  ngOnInit(): void {
    this.t=this.emps.getEmployes();
  }

  onsubmit(f:NgForm){
   let a= this.emps.addNewEmploye(this.e);
   if(a==false){
    this.exst=true;
   }
   else this.exst=false;
  
  }

  onreset(f:NgForm){
    f.resetForm({
      fct:"secretaire",
      dep:"TI"
    })
  } 

}
