import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdemProvider } from '../../../../providers/ordem-manutencao';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.page.html',
  styleUrls: ['./problems.page.scss'],
})
export class ProblemsPage implements OnInit {

  public idProblema : any;
  public detalhesOperacao : any;
  public vBoolListVisible : boolean = false;
  constructor(public activeRoute : ActivatedRoute, private ordemProvider : OrdemProvider) {
    this.idProblema = this.activeRoute.snapshot.paramMap.get('problema');
    this.getOperacaoProblema();
    this.getItensOperacao();
  }

  ngOnInit() {
  }

  public getOperacaoProblema(){
    this.ordemProvider.getOperacaoProblema(this.idProblema).subscribe(
      (data : any) => {
        this.detalhesOperacao = JSON.parse(data._body);

        console.log(this.detalhesOperacao)
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

  public toggleSection(i){
    this.detalhesOperacao.components[i].open = !this.detalhesOperacao.components[i].open;
  }

  public toggleItem(i, j){
    this.detalhesOperacao.components[i].children[j].open = !this.detalhesOperacao.components[i].children[j].open;
  }

  public getItensOperacao(){
    this.ordemProvider.getOperacaoProblema(this.idProblema).subscribe(
      (data : any) => {
        this.detalhesOperacao = JSON.parse(data._body);

        console.log(this.detalhesOperacao)
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

}
