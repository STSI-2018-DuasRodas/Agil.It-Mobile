import { StringHelper } from './String';

export class DateHelper {

  public static formatDate(inputDate) {
    var date = this.getDate(inputDate);    

    var day = StringHelper.JustifyLeft(date.getDate(), 2, 0);
    var month = StringHelper.JustifyLeft(date.getMonth() + 1, 2, 0);
    var year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  public static formatDateTime(inputDate) {
    var date = this.getDate(inputDate);

    var day = StringHelper.JustifyLeft(date.getDate(), 2, 0);
    var month = StringHelper.JustifyLeft(date.getMonth() + 1, 2, 0);
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();

    return `${day}/${month}/${year} às ${hour}h${minutes}`;
  }

  public static getDate(date, utc = false) : Date{
    if (typeof date == "object") return date;
    
    if (utc){
      return new Date(date + ' UTC');
    }

    return new Date(date);
    
  }

  public static getTimezoneDiff(){
    let hours = '';
    let minutes = '';

    ([hours, minutes] = String(new Date().getTimezoneOffset() / 60).split('.'));
    return '-' + StringHelper.JustifyLeft(hours||0, 2, 0) + ':' + StringHelper.JustifyLeft(minutes||0, 2, 0);
  }

  public static serverFormatDate(date : Date | string){
    return DateHelper.getDate(date, true).toISOString().replace(/[TZ]/g, ' ');
  }
}