import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees!: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    //console.log("ngOnInit");
    //alert("ngOnInit");
    this.getEmployees();
  }
  private getEmployees() {
    //alert("getEmployees " + this.employees); 
    this.employeeService.getEmployeesList().subscribe((data) => {
      // alert("getEmployees2" + this.employees.length);
      this.employees = data;
    });
  }
}
