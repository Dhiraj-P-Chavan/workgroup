import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAdvance, advance } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit {
  advanceArray: IAdvance[] = [];
  advanceObj: advance = new advance;
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
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvance").subscribe((res: any) => {
      this.advanceArray = res.data;
    })
  }

  getEmployee() {
    debugger
    this.empSrv.getAllEmployee().subscribe((result: any) => {
      this.employeeArray = result.data
    })
  }
  onDelete(id: Number) {
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/DeleteAdvanceById?advanceid=" + id).subscribe((res: any) => {
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
    this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddAdvance", this.advanceObj).subscribe((res: any) => {
      if (res.result) {
        this.loadAllendance();
        this.advanceObj = new advance();
        Swal.fire('', res.message,'success' )
      } else {
        Swal.fire('', res.message,'error' )
      }
    })

  }
}
