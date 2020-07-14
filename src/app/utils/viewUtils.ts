import { LoadingController, ToastController, PopoverController, AlertController, ModalController } from '@ionic/angular';
import { AgilitUtils } from './agilitUtils';
import { RestOrder } from '../rest/restorder';
import { Injectable } from '@angular/core';
import { ChecklistComponent } from '../checklist/checklist.component';

@Injectable()
export class ViewUtils {
  public progressBar: any;
    
  constructor(private loadingController: LoadingController, private toastController: ToastController, private agilitUtils : AgilitUtils, private restOrder : RestOrder, public popoverController: PopoverController, public modalController: ModalController, public alertController: AlertController){

  }

  public async showProgressBar(AMessage : string = "Aguarde..."){
    this.progressBar = await this.loadingController.create({
      message: AMessage,
      duration: 0
    });
    
    this.progressBar.present();    
  }

  public hideProgressBar(){
    this.progressBar.dismiss();
  }

  async showToast(message : string, duration : number = 2000, success : boolean = true) {
    let options : any = {};

    if (success){
      if (message == undefined){
        message = 'Sucesso';
      }      

      options = {
        message: message,
        duration : duration,
        color : 'secondary',
        icon: 'information-circle-outline'
      }
    } else {      
      if (message == undefined){
        message = 'Erro desconhecido';
      }

      options = {
        message: message,
        duration : duration,
        color : 'primary',
        icon: 'information-circle-outline'
      }
    }    

    let toast = await this.toastController.create(options);
    
    toast.present();
  }

  public async openComponent(componentToShow, dataToPass = undefined){
    const popover = await this.popoverController.create({
      component: componentToShow,
      cssClass: 'my-custom-class',
      componentProps: {
        'data' : dataToPass
      },
      translucent: true
    });

    popover.present();
    return await popover;
  }

  public removeAccents(word: string) {
    let newWord = word.toLowerCase();

    newWord = newWord.replace(new RegExp(/\s/g),       '');
    newWord = newWord.replace(new RegExp(/[àáâãäå]/g), 'a');
    newWord = newWord.replace(new RegExp(/æ/g),        'ae');
    newWord = newWord.replace(new RegExp(/ç/g),        'c');
    newWord = newWord.replace(new RegExp(/[èéêë]/g),   'e');
    newWord = newWord.replace(new RegExp(/[ìíîï]/g),   'i');
    newWord = newWord.replace(new RegExp(/ñ/g),        'n');
    newWord = newWord.replace(new RegExp(/[òóôõö]/g),  'o');
    newWord = newWord.replace(new RegExp(/œ/g),        'oe');
    newWord = newWord.replace(new RegExp(/[ùúûü]/g),   'u');
    newWord = newWord.replace(new RegExp(/[ýÿ]/g),     'y');
    newWord = newWord.replace(new RegExp(/\W/g),       '');

    return newWord;
  }

  public filterArray(array : Array<any>, propertyName : string, filterTerm : string) : Array<any>{
    let arrayFiltred : any = [];

    filterTerm = this.removeAccents(filterTerm.trim());

    array.forEach(element => {
      let text   = this.removeAccents(element[propertyName].trim());
      
      if (text.indexOf(filterTerm) >= 0){
        arrayFiltred.push(element);
      }
    });
    
    return arrayFiltred;
  }

  public formatDateToString(date : string) : string {
    if (date == undefined || date == null || date == ""){
      return "";
    }  
    
    let array = date.split('-');

    return array[2] + '/' + array[1] + '/' + array[0];
  }

  public formatTimeToString(time : string) : string {
    debugger;
    if (time == undefined || time == null || time == ""){
      return "";
    }  
    
    let array = time.split('-');

    return array[2].trim() + '/' + array[1].trim() + '/' + array[0].trim();
  }
}