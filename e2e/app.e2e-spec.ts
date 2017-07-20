import { Ng4HeroesCompilationPage } from './app.po';

describe('ng4-heroes-compilation App', () => {
  let page: Ng4HeroesCompilationPage;

  beforeEach(() => {
    page = new Ng4HeroesCompilationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
