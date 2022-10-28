import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }
  login(uname:string,pword:string){
    if(uname==='ravi'&& pword==='1234'){
      return 200;
    }
    else{
      return 403;
    }
  }
  logout(){
   this.router.navigate(['login'])
  }

  getposts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
