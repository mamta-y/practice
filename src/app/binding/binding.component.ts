import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  order:any;
  data:Observable<any>;
 title="emplyooes details"
 sum='';
 success=false;
 fnames:'';
 names :'';
lname : '';
  obj={
    name:'mamta',
    age:20,
    place:'mumbai'
  }
  href="https://www.facebook.com"
  path="https://th.bing.com/th/id/OIP.bbmkUPT_1KuodV5GY84uJQHaE0?w=256&h=180&c=7&r=0&o=5&pid=1.7"
  emp=[{
    name:'mamta',
    age:20,
    place:'mumbai'
  },
  {
    name:'neha',
    age:19,
    place:'mumbaidevi'
  },
  {
    name:'sapna',
    age:23,
    place:'delhi'
  },
  {
    name:'komal',
    age:16,
    place:'kerala'
  }

]

user={
  name:'komal',
  id:1,
    age:16,
    place:'kerala'
}
correct=false;
wrong=false;
back='';
add(){
  if(this.sum=='100'){
    this.correct=true;
this.back='Green'
  }else{
    this.wrong=true;
    this.back='red'
  }
}
  constructor() { }

  ngOnInit(): void {
    new Observable((observer)=>{
  setTimeout(()=>{
    observer.next('in progress')
  },2000);
  setTimeout(()=>{
    observer.next('out for shipping')
  },4000);
     }).subscribe((val)=>{
       this.order=val;
     })
  }}


