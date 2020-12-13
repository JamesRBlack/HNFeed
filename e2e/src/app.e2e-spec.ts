import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('HNFeed');
  });

  it('should type text in textbox', async () => {
    await page.navigateTo();
    element(by.id('searchBox')).sendKeys('James Test');
    expect(await page.getSearchText()).toEqual('James Test');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
