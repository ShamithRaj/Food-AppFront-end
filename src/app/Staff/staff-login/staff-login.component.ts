import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Admin/class/admin';
import { StaffService } from 'src/app/Services/Staff/staff.service';
import { Staff } from '../class/staff';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor(private staff:StaffService,private route:Router) { }
  result:any
  registeredRole:any
  admin = new Admin()
  requiredRoleStaff='Staff'
  loginsatffID:any
  ngOnInit(): void {
    localStorage.setItem('requiredRoleStaff',this.requiredRoleStaff)
  }

  loginStaff(form:NgForm){
    this.staff.getstaff(this.admin).subscribe((res)=>{
      this.result=res
      console.log(this.result);
      
      this.registeredRole=this.result.role
      this.loginsatffID=this.result.id
      localStorage.setItem('loginstaffID',this.loginsatffID)
      localStorage.setItem('registeredRole',this.registeredRole)
      window.alert("Logged in as Staff")
      },error=>{  
      alert("Invalid Details")
      })
      this.route.navigate(['home'])
    
  }

}
