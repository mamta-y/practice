import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error:any;
counter=1;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
login(form:NgForm){
  const payload=form.value
  console.log(payload);
  this.auth.loginUser(form.value).subscribe(res=>{
    this.counter+=1;
    if(!res.error){
      console.log('give response',res);
      
      localStorage.setItem("userDetails",JSON.stringify(res))
    this.router.navigate(['/display'])
 
    }else{
      this.error="not login"
    }
  },err=>{
    this.error="server error"
  })
}
}
