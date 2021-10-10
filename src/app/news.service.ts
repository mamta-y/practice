import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getnews(skey){
return this.http.get<any>(`https://newsapi.org/v2/everything?q=${skey}&from=2021-09-06&sortBy=publishedAt&apiKey=160c26a6ba244dde86130cfbadf4c58c`)
  }
}
