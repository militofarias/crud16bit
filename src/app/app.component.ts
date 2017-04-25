
import { Component, OnInit } from '@angular/core';

import { CamDataService } from './cam-data.service';
import { Camisetas } from './camisetas';
import { ESTAMPAS } from 'app/mock-estampas';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CamDataService]
})
export class AppComponent {
  title = 'Camisetas 16-bit';
  novaCamiseta: Camisetas = new Camisetas();
  enviado: boolean = false;
  estampas = ESTAMPAS;
  

  constructor(private camDataService: CamDataService) {
  }
  

  onEnvio() { 
    this.enviado = true; 
  }

  addCamiseta(nome, tamP, tamM, tamG, tamGG) {
    this.novaCamiseta = new Camisetas({nome, tamP, tamM, tamG, tamGG});
    let flag: boolean = false;
    let num;
      for (let index = 0; index < this.camDataService.camsList.length; index++) {
        if (this.novaCamiseta.nome == this.camDataService.camsList[index].nome){
          flag = true;
          num = index;
        } 
      }
      if(flag){
        this.updateCamiseta(this.camDataService.camsList[num].id, {nome, tamP, tamM, tamG, tamGG});
      } else {
        this.camDataService.addCamiseta(this.novaCamiseta);
      }
  }

  deleteCamiseta(camiseta){
    this.camDataService.deleteCamiseta(camiseta.id);
  }

  getTodasCamisetas(){
    return this.camDataService.getTodasCamisetas();
  }

  updateCamiseta(id, {nome, tamP, tamM, tamG, tamGG}){
    this.camDataService.updateCamiseta(id, {nome, tamP, tamM, tamG, tamGG});
  }


}
