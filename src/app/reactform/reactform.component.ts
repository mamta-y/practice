import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
logininform:FormGroup
  constructor(private formBuilder:FormBuilder) {
    this.logininform=formBuilder.group({
      fname:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(7),
        ],
      ],
      lname:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(7),
        ],
      ],
      emaill:[
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(7),
        ],
      ],
      address:[
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      pincode:[
        '',
        [
          Validators.required,
         
          Validators.maxLength(6),
        ],
      ],
    })
   }

  ngOnInit(): void {
  }
getData(){
  console.log(this.logininform);
  console.log(this.logininform.value)
}
}
