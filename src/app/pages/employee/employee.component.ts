import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
   
  employeeArray: any[]= [];
  employeeObj: any;
  constructor(private empSrv: EmployeeService){
this.resetObj();
  }
  resetObj(){
    this.employeeObj ={
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

  ngOnInit(): void{
    debugger
    this.loadAllEmpliyee();
  }
  loadAllEmpliyee(){
    debugger
    this.empSrv.getAllEmployee().subscribe((res: any)=>{
      debugger;
   this.employeeArray = res.data;
    })
  }
  onSave(){
    debugger;
    this.empSrv.createEmployee(this.employeeObj).subscribe((res: any)=>{
      debugger;
      if(res.result){
        this.loadAllEmpliyee();
        Swal.fire( '',res.message,'success' )
        this.resetObj();
      }else{
        Swal.fire('', res.message,'error' )
      }
    })
  }
  onUpdate(){
    debugger;
    this.empSrv.updateEmployee(this.employeeObj).subscribe((res: any)=>{
      debugger;
      if(res.result) {
        this.loadAllEmpliyee();
        Swal.fire( '',res.message,'success' )
        this.resetObj();
      }else{
        Swal.fire('', res.message,'error' )
      }
    })
    
  }
  onEdit(id: number){
    debugger
    this.empSrv.getEmpById(id).subscribe((res: any)=>{
      this.employeeObj = res.data;
    })
  }
  onDelete(empId: number){
    this.empSrv.deleteEmpById(empId).subscribe((res: any)=>{
      debugger;
      if(res.result) {
        this.loadAllEmpliyee();
        Swal.fire( '',res.message,'success' )
      }else{
        Swal.fire('', res.message,'error' )
      }
    })
  }

}
