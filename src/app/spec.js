// spec.js
/*describe('CRUD 16-bit app', function() {
  it('Deve ter um titulo', function() {
    browser.get('http://localhost:4200/');

    expect(browser.getTitle()).toEqual('Form16bitApp');
  });
});*/

describe('Teste de Insercão de dados', function(){
    it('Deve adicionar dados a linha da tabela de estampas', function(){
        browser.get('http://localhost:4200/');
        element(by.id('form-nome')).sendKeys('Teste1');
        element(by.id('form-tamP')).sendKeys(1);
        element(by.id('form-tamM')).sendKeys(2);
        element(by.id('form-tamG')).sendKeys(3);
        element(by.id('form-tamGG')).sendKeys(4);

        element(by.id('btnSend')).click();

        expect(element(by.id('tabNome')).getText()).toEqual('Teste1');
        expect(element(by.id('tabTamP')).getText()).toEqual('1');
        expect(element(by.id('tabTamM')).getText()).toEqual('2');
        expect(element(by.id('tabTamG')).getText()).toEqual('3');
        expect(element(by.id('tabTamGG')).getText()).toEqual('4');

    });
});