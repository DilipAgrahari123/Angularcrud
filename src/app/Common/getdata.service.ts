import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {
url="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  Getdata()
  {
    return this.http.get(this.url)
  }
}
