import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { httpGet } from '../services/util/http-get';



Given('I send a GET request to {string}', async function (url) {
    const response = await httpGet(url);
    this.response = response;
    console.log(this.response);
});

Then('the response status code should be {int}', function (expectedStatusCode: number) {
    if (!this.response) {
        throw new Error('No response found. Did you send the request?');
    }
    //console.log(this.response.status());
   expect(this.response.ok()).toBeTruthy();
   expect(this.response.status()).toBe(200);
});

Then('the response content type should be {string}', function (expectedContentType: string) {

    if (!this.response) {
        throw new Error('No response found. Did you send the request?');
    }
    const contentType = this.response.headers()['content-type'];
    expect(contentType).toContain(expectedContentType);
}

)

