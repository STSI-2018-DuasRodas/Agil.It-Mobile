import { HttpProvider } from 'src/app/http/http';
import { Injectable } from '@angular/core';
import { ProviderHelper } from './helper';

@Injectable({
  providedIn: 'root'
})

export class LoginRest {
  private DefaultURL = 'http://localhost:4000/api/v1';
  private http: HttpProvider;

  constructor(http: HttpProvider){
    this.http = http;
  }
  
  public async login(object:any) {
    
    this.http.url = `${this.DefaultURL}/login`;
    return ProviderHelper.post(this.http, object)
  }

}