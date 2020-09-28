import { HttpProvider } from '../http/http';
import { AgilitUtils } from '../utils/agilitUtils';
import { ProviderHelper } from './helper';

export class RestNotification {
  private restAction = 'notifications';
  private restUsers  = 'users'        ;

  constructor(private http : HttpProvider){   
    this.http = http;     
  } 

  public getUserNotification(){
    let userInfo : any = JSON.parse(window.localStorage.getItem("user"));

    if (AgilitUtils.isNullOrUndefined(userInfo) || userInfo.id == ''){
      return;
    }

    this.http.url = this.http.getBaseUrl() + this.restUsers + '/' + userInfo.id + '/' + this.restAction;
    return ProviderHelper.get(this.http);
  }
}