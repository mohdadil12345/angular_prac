import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

 
  api = 'https://food-backend-2-86ck.onrender.com/products'



  constructor(private http : HttpClient) { }



  getData () : Observable<any>{
     return  this.http.get<any>(this.api)
  }

  addData(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/add`, data);
  }

  deleteData(data: any): Observable<any> {
    return this.http.delete<any>(`${this.api}/delete`, data);
  }


}


