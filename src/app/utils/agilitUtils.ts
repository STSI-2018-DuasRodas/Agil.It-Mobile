export enum AgilitOrderStatus {
  CREATED = 'created',
  ASSUMED = 'assumed',
  STARTED = 'started',
  PAUSED = 'paused',
  STOPPED = 'stopped',
  CANCELED = 'canceled',
  SIGNATURE_PENDING = 'signature-pending',
  SIGNATURED = 'signatured',
  FINISHED = 'finished',
  DELEGATE = 'delegate',
  INVITE  = 'invite'
}

export enum SignatureRole {
  MAINTAINER = 'maintainer',
  LEADER = 'leader',
  ADMINISTRATOR = 'administrator'
}

export enum SignatureStatus {
  NEW = 'new',
  SIGNED = 'signed',
  DENIED = 'denied'
}

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

  public static formatNumber(value: number, places: number = 2, symbol: string = ''): string {
    if (!value) {
      value = 0;
    }

    let number = value.toFixed(places).replace(',', 'p').replace('.', ',').replace('p', '.');
    return symbol + number;
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
      default           : 'Preventiva',
      list              : 'Lista',
      route             : 'Rota',
      low               : "Baixa",
      medium            : "Média",
      high              : "Alta",
      urgent            : "Urgente",
      created           : "Aberta",
      assumed           : "Assumida",
      started           : "Iniciada",
      paused            : "Pausada",
      stopped           : 'Parada',
      canceled          : 'Cancelada',
      'signature-pending' : 'Assinatura pendente',      
      signatured        : 'Assinatura',
      finished          : 'Finalizada',
      maintainer        : 'Técnico',
      administrator     : 'Administrador',
      maintainer_leader : 'Líder de manutenção',
      sector_leader     : 'Líder de setor',
      integration       : 'Integração'
    }
  }

  public static convertMinuteToHour(minute) {
    if (AgilitUtils.isNullOrUndefined(minute) || (typeof minute != 'number') || Number.isNaN(minute)){
      return '';
    }

    let hours = (minute / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
        
    const formatedHours = rhours.toString().padStart(2, '0');
    const formatedMinutes = rminutes.toString().padStart(2, '0');

    return formatedHours + ":" + formatedMinutes;
  }

  public static convertHourToMinutes(hour){
    let [hours,minutes] = hour.split(":");
    
    return Number(minutes) + Number(hours) * 60;
  }

  public static getMaintenerByLoggedUser(maintenenceWorkers){
    const userData : any = JSON.parse(window.localStorage.getItem("user"));

    if (AgilitUtils.isNullOrUndefined(userData) || AgilitUtils.isNullOrUndefined(userData)){
      return;
    }

    for (const maintener of maintenenceWorkers){
      if (!AgilitUtils.equals(maintener.user.id, userData.id)){
        continue;
      }

      return maintener;
    }
  }
  private static validateParameterValue(value){
    if (AgilitUtils.isNullOrUndefined(value)){
      return false;
    }

    if (value == ''){
      return false;
    }

    if (value instanceof Object && !(value instanceof Array) && (!value.from || !value.to)){
      return false;
    }
    
    return true;
  }

  public static createRestParamsFilters(filter){
    let parameters = '';
    const entries = Object.entries(filter);
    for (const [key, value] of entries){
      if (!AgilitUtils.validateParameterValue(value)) {
        continue;
      }

      if (!parameters){
        parameters = '?';  
      } else {
        parameters += '&';
      }

      parameters += key + '=' + this.getParameterValue(value);
    }

    return parameters;
  }

  private static getParameterValue(value){
    if (value instanceof Array) return 'in(' + value.join(",") + ')';
    
    if (value instanceof Object && value.from && value.to) return 'between(' + value.from + ',' + value.to + ')';

    return value;
  }
}