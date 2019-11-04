import { HttpProvider } from 'src/app/http/http';

export class LoginRest {
  DefaultURL = 'http://localhost:3000';

  LoginURL = '/login';

  constructor(private http : HttpProvider){

  }

  public login(AObj : any) : any{
    this.http.url = this.DefaultURL + this.LoginURL;

    return this.http.post(AObj);
  }

}