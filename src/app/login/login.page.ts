import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginRest } from '../rest/loginRest';
import { LoadingController } from '@ionic/angular';
import { ViewUtils } from '../utils/viewUtils';
import { stringify } from 'querystring';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { AgilitUtils } from '../utils/agilitUtils';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public saveCreditional : boolean = true;
  public errorObject : any;

  constructor(private router: Router, private menuCtrl : MenuController, private loginRest : LoginRest, private viewUtils : ViewUtils) { 
    
  }

  ngOnInit() { 
    // var btn = document.getElementById("logon");
    // btn.addEventListener("click", (e:Event) => this.login());
  }

  public username : string = "julio";
  public password : string = "julio123";

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
    
    if (window.localStorage.getItem("username") != undefined){
      this.username = window.localStorage.getItem("username");
    }

    if  (window.localStorage.getItem("password") != undefined){
      this.password = window.localStorage.getItem("password");
    }
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }
  
  async login() {
    if (this.saveCreditional){
      window.localStorage.setItem("username", this.username);
      window.localStorage.setItem("password", this.password);
    } else {
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("password");
    }

    let obj = {
      username: this.username,
      password : this.password
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
    EventEmitterService.get('requestUserInformation').emit(response);
    
    let user = JSON.stringify(response);

    window.localStorage.setItem("user", user);
    this.router.navigateByUrl('/home');
    
  }
}
