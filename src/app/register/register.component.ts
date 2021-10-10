import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
message:any;
counter=1;
error:any;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
onregister(form:NgForm){
  const payload=form.value
 
 // this.auth.getUser().subscribe(res1=>{ //fetch dta
   // console.log('res1',res1);
   // payload['id'] =res1.length+1  //increment id
  
  this.auth.registerUser(form.value).subscribe(res=>{
    this.counter+=1;
    if(!res.error){
      
      this.message="registered"
    }
    else{
      this.error="not registered"
    }
  },err=>{
    console.log(err);
    this.error="server error"
  })
//})
}
}
