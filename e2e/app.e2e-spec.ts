import { AquarioAppPage } from './app.po';

describe('aquario-app App', () => {
  let page: AquarioAppPage;

  beforeEach(() => {
    page = new AquarioAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
