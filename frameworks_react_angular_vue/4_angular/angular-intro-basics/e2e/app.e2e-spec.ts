import { AngularFrameworkIntroPage } from './app.po';

describe('angular-framework-intro App', () => {
  let page: AngularFrameworkIntroPage;

  beforeEach(() => {
    page = new AngularFrameworkIntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
