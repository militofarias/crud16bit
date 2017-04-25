import { Injectable } from '@angular/core';

import { Camisetas } from './camisetas';
/*import { ESTAMPAS } from "app/mock-estampas";*/

@Injectable()
export class CamDataService {

  ultimoId: number = 0;
  camsList: Camisetas[] = [];

  constructor() { }

  
  /*getEstampas(): Promise<string[]> {
    return Promise.resolve(ESTAMPAS);
  }*/
  
  addCamiseta(cam: Camisetas): CamDataService {
    if (!cam.id) {
      cam.id = ++this.ultimoId;
    }
    this.camsList.push(cam);
    return this;
  }

  deleteCamiseta(id: number): CamDataService{
    this.camsList = this.camsList.filter(cam => cam.id !== id);
    return this;
  }

  updateCamiseta(id: number, valores: Object = {}): Camisetas {
    let cam = this.getCamPorId(id);
    if (!cam){
      return null;
    }
    Object.assign(cam, valores);
    return cam;
  }

  getCamPorId(id: number): Camisetas{
    return this.camsList.filter(cam => cam.id === id).pop();
  }

  getTodasCamisetas(): Camisetas[] {
    return this.camsList;
  }

}

