import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeadingComment } from '@angular/compiler';
import { AdvanceComponent } from './pages/advance/advance.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { LeavesComponent } from './pages/leaves/leaves.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
         path: 'dashboard',
         component: DashboardComponent
      },
      {
         path: 'employee',
         component: EmployeeComponent
      },
      {
         path: 'attendance',
         component: AttendanceComponent
      },
      {
         path: 'advance',
         component: AdvanceComponent
      },
      {
         path: 'leaves',
         component: LeavesComponent
      },
      {
         path: 'salary',
         component: SalaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
