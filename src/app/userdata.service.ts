import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  getUserData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }

  createUser(userData: any) {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    }
    return this.http.post(url, userData, httpOptions);

  }

  deleteUser(userData: any) {
    const url = `https://jsonplaceholder.typicode.com/users/${userData.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };
    return this.http.delete(url, httpOptions);
  }

  editUser(userData: any) {
    const url = `https://jsonplaceholder.typicode.com/users/${userData.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    return this.http.put(url, userData, httpOptions);
  }

  
}
