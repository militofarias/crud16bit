import {Camisetas} from './camisetas';

describe('Camisetas', () => {
  it('should create an instance', () => {
    expect(new Camisetas()).toBeTruthy();
  });

  it('deve aceitar valores no constructor', () => {
    let camiseta = new Camisetas({
      nome: '16-bit',
      tamP: 1,
      tamM: 1,
      tamG: 1,
      tamGG: 1
    });
    expect (camiseta.nome).toEqual('16-bit');
    expect (camiseta.tamP).toEqual(1);
    expect (camiseta.tamM).toEqual(1);
    expect (camiseta.tamG).toEqual(1);
    expect (camiseta.tamGG).toEqual(1);
  });
});
