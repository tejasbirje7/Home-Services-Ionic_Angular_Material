import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = 'http://127.0.0.1:5000'

  constructor(private httpClient: HttpClient) { }

  get_products(){
    this.httpClient.get(this.baseUrl + '/').subscribe((res)=>{
        console.log(res);
    });
  }

  post_request(){
    this.httpClient.post(this.baseUrl + '/add',{'id':'12','name':'tejas'}).subscribe((res)=>{
      console.log(res);
    });
  }
}
