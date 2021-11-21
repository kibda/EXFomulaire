import { Injectable } from '@angular/core';
import { Employe } from '../model/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {
  constructor() { }
tab:Employe[]=[];

public getEmployes(){
  return this.tab;
} 

public existeMatricule(mat: number) {
  console.log(this.tab.find(v=>v.matricule===mat));
 if(this.tab.find(v=>v.matricule===mat)==undefined){
   
   return true;
 } 
 else return false;
}


public addNewEmploye(e :Employe){
  if(this.existeMatricule(e.matricule)){
  let p=Object.assign({},e);
  this.tab.push(p);
  return true;
}
else return false;
}



}
