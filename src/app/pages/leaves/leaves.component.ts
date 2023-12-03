import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ileaves, leaves } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent {


  leavesArray: Ileaves[] = [];
  leavesObj: leaves = new leaves;
  employeeArray: any[] = [];
  constructor(private empSrv: EmployeeService, private http: HttpClient) {
  }

  ngOnInit(): void {
    debugger
    this.loadAllendance();
    this.getEmployee();
  }
  loadAllendance() {
    debugger
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves").subscribe((res: any) => {
      this.leavesArray = res.data;
    })
  }

  getEmployee() {
    debugger
    this.empSrv.getAllEmployee().subscribe((result: any) => {
      this.employeeArray = result.data
    })
  }
  onDelete(id: Number) {
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/DeleteLeaveById?leaveid=" + id).subscribe((res: any) => {
      debugger;
      if (res.result) {
        this.loadAllendance();
        Swal.fire( '',res.message,'success' )
      } else {
        Swal.fire('', res.message,'error' )
      }
    })
  }
  onSave() {
    debugger
    this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddLeave", this.leavesObj).subscribe((res: any) => {
      if (res.result) {
        this.loadAllendance();
        this.leavesObj = new leaves();
        Swal.fire( '',res.message,'success' )
      } else {
        Swal.fire( '',res.message,'error' )
      }
    })

  }
}
