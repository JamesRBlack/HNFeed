import { AppPage } from './app.po';
import {browser, by, element, logging, protractor} from 'protractor';

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

  it('should search for results', async () => {
    const EC = protractor.ExpectedConditions;
    await page.navigateTo();

    const searchBox = element(by.id('searchBox'));
    browser.wait(EC.presenceOf(searchBox));
    searchBox.sendKeys('James Test');

    const searchButton = element(by.id('searchButton'));
    browser.wait(EC.elementToBeClickable(searchButton), 5000);
    searchButton.click();

    element.all(by.className('product-list-item')).get(0);
    expect(element.all(by.className('product-list-item'))).toBeGreaterThan(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
