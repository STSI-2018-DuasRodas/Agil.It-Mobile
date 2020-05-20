import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { timeout, map } from 'rxjs/operators';

@Injectable()
export class HttpProvider {
  public url : string = '';
  public token : string;
  public isOnlineBuild : boolean = false;

  private TIMEOUT = 15000;

  constructor(private http: Http){
    this.url   = null;
    this.token = null;
  }
  
  public getBaseUrl() : string{
    if (this.isOnlineBuild){      
      return 'http://0.tcp.ngrok.io:18528/api/v1/';
    } else {
      return 'http://localhost:4000/api/v1/';
    }    
  }

  private prepareHeaders(contentType : boolean){
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    if (contentType){
      headers.append('Content-Type', 'application/json');
    }

    if (this.token == ''){
      this.token = null;
    }
    
    headers.append('token', window.localStorage.getItem("token"));    

    return headers;
  }

  public get(){
    let headers = this.prepareHeaders(false);
    return this.http.get(
      this.url, 
      {headers: headers}
    ).pipe(
      timeout(this.TIMEOUT)
    )
  }

  public post(object : any){
    let body : string = '';

    let headers = this.prepareHeaders(true);

    if (object != null && object != undefined){
      body = JSON.stringify(object);
    }

    return this.http.post(this.url, body, {headers: headers}).pipe(timeout(this.TIMEOUT));
  }

  public put(object : any){
    let body : string = '';

    let headers = this.prepareHeaders(true);

    if (object != null && object != undefined){
      body = JSON.stringify(object);
    }

    return this.http.put(this.url, body, {headers: headers}).pipe(timeout(this.TIMEOUT));
  }

  public patch(object : any){
    let body : string = '';

    let headers = this.prepareHeaders(true);

    if (object != null && object != undefined){
      body = JSON.stringify(object);
    }

    return this.http.patch(this.url, body, {headers: headers}).pipe(timeout(this.TIMEOUT));
  }

  public delete(){
    let headers = this.prepareHeaders(false);
    return this.http.delete(
      this.url, 
      {headers: headers}
    ).pipe(
      timeout(this.TIMEOUT)
    )
  }
  
  public send(tipo:string, object?:any) {
    if (tipo === 'get') {
      return this.get()
    } else if(tipo === 'delete') {
      return this.delete()
    } else if(tipo === 'post') {
      return this.post(object)
    } else if(tipo === 'put') {
      return this.put(object)
    } else if(tipo === 'patch') {
      return this.patch(object)
    }

    throw new Error('Invalid http method!')
  }
}