import { LoadingController, ToastController } from '@ionic/angular';

export class ViewUtils {
  public progressBar: any;
    
  constructor(private loadingController: LoadingController, private toastController: ToastController){

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

  async showToast(message : string, duration : number = 2000) {
    let options = {
        message: message,
        duration : duration,
        color : 'primary',
        icon: 'information-circle-outline'
    }

    let toast = await this.toastController.create(options);
    
    toast.present();
  }  
}