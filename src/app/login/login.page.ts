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

  public username : string = "julio_thomazelli-ju1@estudante.sc.senai.br";
  public password : string = "123";

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
      this.router.navigateByUrl('/home');
      
    // await this.viewUtils.showProgressBar();

    // this.loginRest.login(obj).subscribe(
        // (data : any) => {
        //   this.loginRestSucess(data);
        //   this.viewUtils.hideProgressBar();
        // },
        // (error : any) =>{
        //   this.viewUtils.hideProgressBar();
        //   this.viewUtils.showToast("Algo de errado aconteceu!");
        // }
      // )
  }

  public loginRestSucess(response) : void{
    let user = JSON.parse(response._body);

    if (!user.success){
      this.viewUtils.showToast(user.data);

      return;
    }

    window.localStorage.setItem("user", JSON.stringify(user.data));
    this.router.navigateByUrl('/home');
  }
}
