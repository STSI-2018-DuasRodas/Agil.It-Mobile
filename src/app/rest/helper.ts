import { HttpProvider } from '../http/http';

export class ProviderHelper {

  public static async makeRequest(http: HttpProvider, tipo:string, body?:any) {
    try {
      let response : any = await http.send(tipo, body).toPromise();

      this.validateResponse(response);
      this.updateToken(response);
      
      return JSON.parse(response._body).data;
    } catch (error) {
      return {
        success: false,
        error: error
      };
    }
  }

  public static setToken(token) {
    window.localStorage.setItem("token", token);
  }

  public static updateToken(response) {
    let token : string = ""

    response.headers._headers.forEach((value,key) => {
      if (key === "token") {
        token = value[0]
      }
    })

    if (token === ""){
      throw new Error('Token não identificado');
    }

    return this.setToken(token);
  }

  private static validateResponse(response : any){
    if (response.status != 200){
      throw new Error('Erro');
    }

    let body = JSON.parse(response._body);

    if (body.success == false){
      throw new Error(body.error);
    }

    if (body.data.success == false){
      throw new Error(body.data.error);
    }
    
  }

  public static get(http: HttpProvider) {
    return this.makeRequest(http, 'get')
  }
  
  public static delete(http: HttpProvider) {
    return this.makeRequest(http, 'delete')
  }
  
  public static post(http: HttpProvider, object:any) {
    return this.makeRequest(http, 'post', object)
  }
  
  public static put(http: HttpProvider, object:any) {
    return this.makeRequest(http, 'put', object)
  }
  
  public static patch(http: HttpProvider, object:any) {
    return this.makeRequest(http, 'patch', object)
  }
}