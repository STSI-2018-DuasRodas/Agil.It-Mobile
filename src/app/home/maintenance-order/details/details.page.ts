import { Component, OnInit } from '@angular/core';
import { OrdemProvider } from '../../../../providers/ordem-manutencao';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { Toasts } from '../../../../providers/toast';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public id : any;
  public detalhesOrdem : any;
  
  constructor(public activeRoute : ActivatedRoute, private router: Router, private ordemProvider : OrdemProvider, public toast : Toasts) {
    this.id = this.activeRoute.snapshot.paramMap.get('ordem');
    this.getOrdemManutencao()
   }

  ngOnInit() {
  }

  public adicionarOperacao(){
    
  }

  public getOrdemManutencao(){
    this.ordemProvider.getOrdemManutencao(this.id).subscribe(
      (data : any) => {
        this.detalhesOrdem = JSON.parse(data._body);

        console.log(this.detalhesOrdem)
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

  public tratarData(data){
    let objData = new Date(data)
    return objData.getDay() + '/' + objData.getMonth() + '/' + objData.getFullYear() + ' - ' + objData.getHours() + ':' + objData.getMinutes();
  }

  public abrirTelaProblema(operation){
    this.router.navigateByUrl('/problems/' + operation)
  }

  public assinatura(idOrdem : any){

    this.ordemProvider.postAssinatura(idOrdem, window.localStorage.getItem("userId")).subscribe(
      (data : any) => {
        this.toast.toastLoginShow('Assinatura realizada com sucesso!!', 2000);
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

  public OrdemAcao(){
    console.log("Topperson")
  }
  
}
