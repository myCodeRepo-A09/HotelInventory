import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent implements OnInit {
  resForm=new FormsModule;
  constructor() { }

  ngOnInit(): void {
  }
  addForm(data:any){
    console.log(data)
  }
}
