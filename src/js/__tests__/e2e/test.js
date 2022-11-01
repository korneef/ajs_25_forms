import puppeteer from 'puppeteer';

jest.setTimeout(90000);

describe('e2e start test', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
  });

  test('button test', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.button-toggle__button');
    button.click();
    await page.waitForSelector('.button-toggle__popower-form');
  });

  afterAll(async () => {
    await browser.close();
  });
});
