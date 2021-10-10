import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
urll='http://localhost:4500';
  constructor(private http:HttpClient) { }
  getfood(){
    //return this.http.get<any>('http://localhost:3000/items')
    return this.http.get<any>(this.urll+'/api/items')
  }
  addfood(addItem){
    //return this.http.post<any>('http://localhost:3000/items',addItem)
    return this.http.post<any>(this.urll+'/api/items/',addItem)
  }
  deletefood(id){
   // return this.http.delete<any>(`http://localhost:3000/items/${id}`)
    return this.http.delete<any>(this.urll+`/api/items/${id}`)
  }
  updatefood(item){
   // return this.http.put<any>(`http://localhost:3000/items/${item.id}`,item)
    return this.http.put<any>(this.urll+`/api/items/${item._id}`,item)
  }
}
