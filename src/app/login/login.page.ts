import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginRest } from '../rest/loginRest';
import { LoadingController } from '@ionic/angular';
import { ViewUtils } from '../utils/viewUtils';
import { stringify } from 'querystring';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { AgilitUtils } from '../utils/agilitUtils';
import { AgilitStorageTypes, AgilitStorageUtils } from '../utils/AgilitStorageUtils';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public saveCreditional : boolean = true;
  public errorObject     : any;

  public username        : string = "";
  public password        : string = "";

  constructor(private router: Router, private menuCtrl : MenuController, private loginRest : LoginRest, private viewUtils : ViewUtils) {} 

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
    
    // ? Buscar do STORAGE USERNAME e PASSWORD
    this.username = AgilitStorageUtils.getData(AgilitStorageTypes.USERNAME) || '';
    this.password = AgilitStorageUtils.getData(AgilitStorageTypes.PASSWORD) || '';
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }
  
  async login() {
    // ? Validar se os campos de USERNAME e PASSWORD estão preenchidos
    if (this.username == '' || this.password == ''){
      await this.viewUtils.showToast("Necessário inserir Usuário e Senha.");
      return;
    }

    // ? Salvar USERNAME e PASSWORD no storage
    if (this.saveCreditional){
      AgilitStorageUtils.setData(AgilitStorageTypes.USERNAME, this.username);
      AgilitStorageUtils.setData(AgilitStorageTypes.PASSWORD, this.password);      
    } else {
      AgilitStorageUtils.clearSpecificData(AgilitStorageTypes.USERNAME);
      AgilitStorageUtils.clearSpecificData(AgilitStorageTypes.PASSWORD);
    }

    let obj = {
      username: this.username,
      password: this.password
      }
      
    await this.viewUtils.showProgressBar();

    this.loginRest.login(obj).then(
      (response) => {      
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }
                
        this.loginRestSucess(response);      
    }).catch(
      (error) => {
        this.viewUtils.hideProgressBar();
        this.viewUtils.showToast(error.error.message, 2000, false);
    });
  }

  public loginRestSucess(response) : void{
    AgilitStorageUtils.setData(AgilitStorageTypes.USERDATA, response);    
    this.router.navigateByUrl('/home');
    
  }
}
