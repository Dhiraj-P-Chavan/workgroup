import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IAdvance, IAttendance, IDashbard, Ileaves, dashboard } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboardArray: IDashbard[] = [];
  attendanceArray: IAttendance[]=[];
  advanceArray: IAdvance[]=[];
  leavesArray: Ileaves[]=[];
  salaryArray: any[] = [];
  dashboardObj: dashboard = new dashboard;
  employeeArray: any[] = [];
  constructor(private empSrv: EmployeeService, private http: HttpClient) {
  }

  ngOnInit(): void {
    debugger
    this.loadDashboard();
    this.getEmployee();
    this.loadAllSalary();
    this.loadAllleave();
    this.loadAlladvance();
    this.loadAllattendance();
  }
  loadDashboard() {
    debugger
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/getAdminDashboard").subscribe((res: any) => {
      this.dashboardArray = res.data;
    })
  }

  getEmployee() {
    this.empSrv.getAllEmployee().subscribe((result: any) => {
      debugger
      this.employeeArray = result.data
    })
  }

  loadAllSalary(){
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllSalary").subscribe((res: any) => {
      debugger;
      this.salaryArray = res.data;
    })
  }
  loadAllleave(){
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves").subscribe((res: any) => {
      debugger
      this.leavesArray = res.data;
    })
  }
  loadAlladvance(){
    debugger
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvance").subscribe((res: any) => {
      this.advanceArray = res.data;
    })
  }
  loadAllattendance(){
    debugger
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance").subscribe((res: any) => {
      this.attendanceArray = res.data;
    })
  }

}
