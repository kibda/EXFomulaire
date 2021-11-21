import { Component, OnInit } from '@angular/core';
import { Employe } from '../model/employe';
import { EmployeServiceService } from '../services/employe-service.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css']
})
export class ListemployesComponent implements OnInit {
t:Employe[]=[];
  constructor(private emps:EmployeServiceService) { }

  ngOnInit(): void {
    this.t=this.emps.getEmployes();
  }

}
