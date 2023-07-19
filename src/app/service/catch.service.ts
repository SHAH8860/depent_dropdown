import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatchService {
  url:string="http://localhost:3000/countries"

  constructor(private http:HttpClient) { }

  getcountry(): Observable<any>{
    return this.http.get(this.url)

  }
}
