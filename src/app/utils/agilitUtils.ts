import { DefaultIO } from '../io/defaultIO';

export class AgilitUtils {
  constructor(){

  }

  public static sincronizeObject(source : any, target : any){
      for (var propertySource in source) {            
          if (target.hasOwnProperty('_' + propertySource)) {
              target[propertySource] = source[propertySource];
          }
      }
  }

  public static verifyProperty(object : any, propertyName : string, propertyValue : any){
      if (!object.hasOwnProperty(propertyName) || object[propertyName] == undefined){
        object[propertyName] = propertyValue;
      }
    }

  public static nonNullString(value : string){
      if (value == undefined || value == null){
          return "";
      }

      return value;
  }

  public static equals(value1 : string, value2 : string, caseSensitive : boolean = true) : boolean{
      if (caseSensitive){            
          return AgilitUtils.nonNullString(value1) == AgilitUtils.nonNullString(value2);
      }

      return AgilitUtils.nonNullString(value1).toUpperCase() == AgilitUtils.nonNullString(value2).toUpperCase();
  }

  public static isNullOrUndefined(param : any) : boolean{
    return param == null || param == undefined;
  }

  public static isArray(param : any) : boolean{
      if (AgilitUtils.isNullOrUndefined(param)){
          return false;
      }

      return Array.isArray(param);
  }

  public static isEmptyArray(param : any) : boolean{
      if (!AgilitUtils.isArray(param)){
          return true;
      }

      return param.length == 0;
  }

  public static copy(obj : any) : any{
      if (AgilitUtils.isNullOrUndefined(obj)){
          return null;
      }

      return JSON.parse(JSON.stringify(obj));
  }

  public static formatValues(priority) {
    return AgilitUtils.getPriorities()[priority];
  }

  public static getPriorities() {
    return {
      default: 'PREVENTIVA',
      list: 'LISTA',
      route: 'ROTA',
      low: "Baixa",
      medium: "Média",
      high: "Alta",
      urgent: "Urgente",
    }
  }
}