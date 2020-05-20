import { HttpProvider } from 'src/app/http/http';
import { Injectable } from '@angular/core';
import { ProviderHelper } from './helper';

@Injectable({
  providedIn: 'root'
})

export class LoginRest {  
  private http: HttpProvider;

  constructor(http: HttpProvider){
    this.http = http;
  }
  
  public async login(object:any) {        
    this.http.url = this.http.getBaseUrl() + 'login';
    return ProviderHelper.post(this.http, object);
  }

}