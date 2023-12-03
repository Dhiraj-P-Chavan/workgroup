import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAttendance, attendance } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendanceArray: IAttendance[] = [];
  attendanceObj: attendance = new attendance();
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
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance").subscribe((res: any) => {
      this.attendanceArray = res.data;
    })
  }

  getEmployee() {
    debugger
    this.empSrv.getAllEmployee().subscribe((result: any) => {
      this.employeeArray = result.data
    })
  }
  onDelete(id: Number) {
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/DeleteAttendanceById?attendanceid="+ id).subscribe((res: any)=>{
      debugger;
      if(res.result) {
        this.loadAllendance();
        Swal.fire( '',res.message,'success' )
      }else{
        Swal.fire('', res.message,'error' )
      }
    })
  }
  onSave() {
    debugger
    this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddAttendance", this.attendanceObj).subscribe((res: any) => {
      if (res.result) {
        this.loadAllendance();
        this.attendanceObj = new attendance();
        Swal.fire( '',res.message,'success' )
      } else {
        Swal.fire( '',res.message,'error' )
      }
    })

  }
}
