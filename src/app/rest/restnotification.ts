import { HttpProvider } from '../http/http';
import { AgilitStorageTypes, AgilitStorageUtils } from '../utils/AgilitStorageUtils';
import { AgilitUtils } from '../utils/agilitUtils';
import { ProviderHelper } from './helper';

export class RestNotification {
  private restAction = 'notifications';
  private restUsers  = 'users'        ;

  constructor(private http : HttpProvider){   
    this.http = http;     
  } 

  public getUserNotification(){
    let userInfo : any = AgilitStorageUtils.getDataJSON(AgilitStorageTypes.USERDATA)

    if (AgilitUtils.isNullOrUndefined(userInfo) || userInfo.id == ''){
      return;
    }

    this.http.url = this.http.getBaseUrl() + this.restUsers + '/' + userInfo.id + '/' + this.restAction;
    return ProviderHelper.get(this.http);
  }
}