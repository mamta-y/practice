import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
register(loginform:NgForm){
  console.log(loginform);
  console.log(loginform.value.fname);
  console.log(loginform.value.lname);
  console.log(loginform.value.email);
 
}}
