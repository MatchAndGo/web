const assert = require('assert');
const puppeteer = require('puppeteer');
var fileUrl = require('file-url');

(async () => {
    console.log('Running e2e tests:')
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(fileUrl('index.html'));
    const title = await page.title();
    try {
        assert.equal(title, 'M&G', `The page title is not the expected got: "${title}"`);
    }
    catch (err) {
        console.error(`\n\t[X] ${err.message}`);
        process.exit(1);
    }
    finally {
        console.log(`\n`);
        await browser.close();
    }
})();