import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userObj: any = {
    username: '',
    password:''

  }
  constructor(private router: Router){

  }

  onLogin(){
    if (this.userObj.username == "admin" && this.userObj.password == 123){
      this.router.navigateByUrl("dashboard")
    }else{
      Swal.fire('','user name or password are incorrect','error' )
    }
  }
}
