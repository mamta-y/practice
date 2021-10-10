import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
error:any;
message:any;

  constructor(private ms:MenuService) { }

  ngOnInit(): void {
  }
register(adding){
  this.ms.addfood(adding.value).subscribe(res=>{
    if(!res.error){
      this.message="items added"
    }else{
      this.error="item not added"
    }
  },err =>{
    this.error="server error"
  })
}
}
