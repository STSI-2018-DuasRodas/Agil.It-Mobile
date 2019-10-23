import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private menuCtrl : MenuController) { }

  ngOnInit() {
    
  }

  private email : string = "jose@senai.com.br";
  private senha : string = "jose123";

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }
  
  public login() : void {
    this.router.navigateByUrl('/home')
  }
}
