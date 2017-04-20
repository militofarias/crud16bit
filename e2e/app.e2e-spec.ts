import { Form16bitAppPage } from './app.po';

describe('form16bit-app App', () => {
  let page: Form16bitAppPage;

  beforeEach(() => {
    page = new Form16bitAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
