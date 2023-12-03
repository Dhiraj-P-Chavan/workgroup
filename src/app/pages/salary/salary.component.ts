import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  salaryObj: any;
  salaryArray: any[] = [];
  employeeArray: any[] = [];
  totalAdvAmount: number = 0;
  totalLeaves: number = 0;
  constructor(private empSrv: EmployeeService, private http: HttpClient) {
    this.resetObj();

  }
  resetObj(){
    this.salaryObj ={
      "empId": 0,
      "empName": " ",
      "empContactNo": " ",
      "empAltContactNo": " ",
      "empEmail": " ",
      "addressLine1": " ",
      "addressLine2": " ",
      "pincode": " ",
      "city": " ",
      "state": " ",
      "bankName": " ",
      "iFSC": " ",
      "accountNo": " ",
      "bankBranch": " ",
      "salary": 0
    }
  }
  ngOnInit(): void {
    this.getAllSalary();
    this.loadAllEmp();

  }
  loadAllEmp() {
    this.empSrv.getAllEmployee().subscribe((res: any) => {
      this.employeeArray = res.data;
    })
  }
  getAllSalary() {
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllSalary").subscribe((res: any) => {
      debugger;
      this.salaryArray = res.data;
    })
  }
  getEmpData() {
    debugger;
    this.GetAllAdvance();
    this.GetAllLeaves();
  }

  GetAllAdvance() {
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvance").subscribe((res: any) => {
      debugger;
      const data = res.data.filter((m: any) => m.employeeId == this.salaryObj.employeeId);
      data.forEach((element: any) => {
        this.totalAdvAmount = this.totalAdvAmount + element.advanceAmount;
      });
      this.salaryObj.totalAdvance = this.totalAdvAmount;
    })
  }
  GetAllLeaves() {
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves").subscribe((res: any) => {
      debugger;
      const data = res.data.filter((m: any) => m.employeeId == this.salaryObj.employeeId);
      data.forEach((element: any) => {
        this.totalLeaves = this.totalLeaves + element.noOfFullDayLeaves;
      });
      this.salaryObj.presentDays = 30 - this.totalLeaves;
    })
  }

  calculeteSalary(){
    debugger;
    const empData = this.employeeArray.find(m=>m.empId == this.salaryObj.employeeId);
    const perDaySalary = empData.salary /30;
    this.salaryObj.salaryAmount = ((this.salaryObj.presentDays * perDaySalary) - this.salaryObj.totalAdvance).toFixed();
  }

  saveSalary(){
    this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddSalary", this.salaryObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        this.getAllSalary();
        Swal.fire( '',res.message,'success' )
        this.resetObj();
      }else{
        Swal.fire( '',res.message,'error' )
      }
    })
  }
  onDelete(id: Number) {
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/DeleteSalaryById?salaryid="+ id).subscribe((res: any)=>{
      debugger;
      if(res.result) {
        this.getAllSalary();
        Swal.fire( '',res.message,'success' )
      }else{
        Swal.fire( '',res.message,'error' )
      }
    })
  }

}
