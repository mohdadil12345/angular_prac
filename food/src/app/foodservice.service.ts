import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

 
  api = 'https://ride-share-backend-pw1v.onrender.com/menu/food'



  constructor(private http : HttpClient) { }



  getData () : Observable<any>{
     return  this.http.get<any>(this.api)
  }




}


