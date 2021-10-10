import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
items=[];
error:any;
message:any;
selectedToEdit:any;
itemUpdating=false;


  constructor(private ms:MenuService ,public auth:AuthService) { }

  ngOnInit(): void {
    this.ms.getfood().subscribe(data =>{
      this.items = data;
     });
  }
  onEdit(item){
    this.selectedToEdit={...item}
    console.log(this.selectedToEdit);
  }
  onFormSubmit(){
    this.itemUpdating=true;
    this.ms.updatefood(this.selectedToEdit).subscribe(res=>{
      if(!res.error){
        
        this.itemUpdating=false;
        this.message="updated successfully"
        this.items.splice(this.items.findIndex(ele=>ele._id===res.response._id),1,res.response)
      }
      else{
        this.error="not updated"
      }
    },err=>{
      this.error="server error"
    
     
    })
  }
  deleted(item){
    this.ms.deletefood(item._id).subscribe(res=>{
       if(!res.error){
      console.log(res);
  this.items.splice(this.items.indexOf(item),1)
  this.message="delets successfully"
}
else{
  this.error="not deleted"
}
    },err=>{
      this.error="server error"
    })
  }
}
