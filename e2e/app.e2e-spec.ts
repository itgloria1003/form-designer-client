import { FormDesignerClientPage } from './app.po';

describe('form-designer-client App', function() {
  let page: FormDesignerClientPage;

  beforeEach(() => {
    page = new FormDesignerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
