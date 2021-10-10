import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl="http://localhost:4500";
  constructor(private http:HttpClient,private route:Router) { }
  
  registerUser(userDetails){
    console.log(userDetails);
   return this.http.post<any>(this.baseurl+'/api/users',userDetails)
  //return this.http.post<any>('http://localhost:3000/verify',userDetails)
  }
  // getUser(){
    
  //   return this.http.get<any>(this.baseurl+'/api/users')
  // }
  getUserDetails() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    if(userDetails){
      return userDetails
    }
  }
  loginUser(credentials){
return this.http.post<any>(this.baseurl+'/api/login',credentials)
  //return this.http.post<any>('http://localhost:3000/login',credentials)
  }
  isLoggedIn() {
    const userDetails = this.getUserDetails();
    return userDetails ? true : false
    //return !!localStorage.getItem('token')
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }

  isAdmin() {
    const userDetails = this.getUserDetails();
    return userDetails && userDetails.role === 'admin' ? true : false;
  }

  isUser() {
    const userDetails = this.getUserDetails();
    return userDetails && userDetails.role === 'user' ? true : false;
  }

  // getToken(){
  //   const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  //   return userDetails.token;
  // }
  }

