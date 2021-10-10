import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-newz',
  templateUrl: './newz.component.html',
  styleUrls: ['./newz.component.css']
})
export class NewzComponent implements OnInit {
skey:any;
articles=[];
error:any;
search:any;
  constructor(private ns:NewsService) { }

  ngOnInit(): void {
  }
getdata(){
  this.ns.getnews(this.skey).subscribe(res=>{
if(!res.error){
  console.log(res);
  this.articles=res.articles;
  console.log(this.articles)
}
else{
  this.error="some prblm occured"
}
  },err=>{
    this.error="server error"
  }
  )
}
}
