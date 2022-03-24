import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SvgTaskService {
  readonly baseUrl = 'http://localhost:30830/api/Measurement';
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.baseUrl);
  }

  updateData(res:any){
    return this.http.put(this.baseUrl,res);
  }
}
