import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginRest } from '../rest/loginRest';
import { LoadingController } from '@ionic/angular';
import { ViewUtils } from '../utils/viewUtils';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private menuCtrl : MenuController, private loginRest : LoginRest, private viewUtils : ViewUtils) { }

  ngOnInit() {
    
  }

  public username : string = "julio";
  public password : string = "julio123";

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }
  
  async login() {
    let obj = {
      username: this.username,
      password : this.password
      }
      
    // await this.viewUtils.showProgressBar();

    // let response = await this.loginRest.login(obj);
    // this.loginRestSucess(response);
    this.router.navigateByUrl('/home'); // Tirar essa linha
    // this.viewUtils.hideProgressBar();
  }

  public loginRestSucess(response) : void{
    let user = JSON.stringify(response);

    if (!response.success){
      this.viewUtils.showToast(response.error.message);

      return;
    }

    window.localStorage.setItem("user", user);
    this.router.navigateByUrl('/home');
    
  }
}
