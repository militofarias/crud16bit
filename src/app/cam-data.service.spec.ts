import { TestBed, inject } from '@angular/core/testing';

import { CamDataService } from './cam-data.service';
import { Camisetas } from './camisetas';

describe('CamDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamDataService]
    });
  });

  it('should ...', inject([CamDataService], (service: CamDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getTodasCamisetas()', () => {

    it('deve retornar um array vazio por default', inject([CamDataService], (service: CamDataService) => {
      expect(service.getTodasCamisetas()).toEqual([]);
    }));

    it('Deve retornar todas cams', inject([CamDataService], (service: CamDataService) => {
      let cam1 = new Camisetas({nome: 'Ola1', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      let cam2 = new Camisetas({nome: 'Ola2', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      service.addCamiseta(cam1);
      service.addCamiseta(cam2);
      expect(service.getTodasCamisetas()).toEqual([cam1, cam2]);
    }));
  });

  describe('#save(cam)', () => {

    it('deve adicionar um id incrementado', inject([CamDataService], (service: CamDataService) => {
      expect(service.getTodasCamisetas()).toEqual([]);
    }));

    it('Deve retornar todas cams', inject([CamDataService], (service: CamDataService) => {
      let cam1 = new Camisetas({nome: 'Ola1', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      let cam2 = new Camisetas({nome: 'Ola2', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      service.addCamiseta(cam1);
      service.addCamiseta(cam2);
      expect(service.getCamPorId(1)).toEqual(cam1);
      expect(service.getCamPorId(2)).toEqual(cam2);
    }));
  });

  describe('#deleteCamiseta(id)', () => {
    it('deve remover camiseta com id correspondente', inject([CamDataService], (service: CamDataService) => {
      let cam1 = new Camisetas({nome: 'Ola1', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      let cam2 = new Camisetas({nome: 'Ola2', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      service.addCamiseta(cam1);
      service.addCamiseta(cam2);
      expect(service.getTodasCamisetas()).toEqual([cam1, cam2]);
      service.deleteCamiseta(1);
      expect(service.getTodasCamisetas()).toEqual([cam2]);
      service.deleteCamiseta(2);
      expect(service.getTodasCamisetas()).toEqual([]);
    }));

    it('não deve remover nada se não houver camiseta com a ID correspondente', inject([CamDataService], (service: CamDataService) => {
      let cam1 = new Camisetas({nome: 'Ola1', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      let cam2 = new Camisetas({nome: 'Ola2', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      service.addCamiseta(cam1);
      service.addCamiseta(cam2);
      expect(service.getTodasCamisetas()).toEqual([cam1, cam2]);
      service.deleteCamiseta(3);
      expect(service.getTodasCamisetas()).toEqual([cam1, cam2]);
    }));
  });

  describe('#updateCamiseta(id, valores)', () => {

    it('deve retornar camiseta com id correspondente e dados atualizados', inject([CamDataService], (service: CamDataService) => {
      let cam = new Camisetas({nome: 'Ola1', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      service.addCamiseta(cam);
      let updatedCam = service.updateCamiseta(1, {nome: 'Ola2', tamM: 2});
      expect(updatedCam.nome).toEqual('Ola2');
      expect(updatedCam.tamM).toEqual(2);
    }));
    
     it('deve retornar null se camiseta nao for encontrada', inject([CamDataService], (service: CamDataService) => {
      let cam = new Camisetas({nome: 'Ola1', tamP: 1, tamM: 2, tamG: 3, tamGG: 4});
      service.addCamiseta(cam);
      let updatedCam = service.updateCamiseta(2, {nome: 'Ola2', tamM: 2});
      expect(updatedCam).toEqual(null);
      
    }));

  });


});
