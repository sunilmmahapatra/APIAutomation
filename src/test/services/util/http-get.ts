import { request } from '@playwright/test';

export async function httpGet(url: string) {
    const apiContext = await request.newContext();
    const response = await apiContext.get(url);
    return response;
}
export async function httpGetWithHeaders(url: string, headers: { [key: string]: string }) {
    const apiContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await apiContext.get(url);
    return response;
}   
export async function httpGetWithBearers(url: string, token: string) {
    const apiContext = await request.newContext({ extraHTTPHeaders: { 'Authorization': `Bearer ${token}` } });
    const response = await apiContext.get(url);
    return response;
}
export async function httpGetWithQueryParams(url: string, queryParams: { [key: string]: string }) {
    const apiContext = await request.newContext();
    const response = await apiContext.get(url, { params: queryParams });
    return response;
}
export async function httpGetWithQueryParamsAndHeaders(url: string, queryParams: { [key: string]: string }, headers: { [key: string]: string }) {
    const apiContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await apiContext.get(url, { params: queryParams });
    return response;
}
export async function httpGetWithQueryParamsAndBearer(url: string, queryParams: { [key: string]: string }, token: string) {
    const apiContext = await request.newContext({ extraHTTPHeaders: { 'Authorization': `Bearer ${token}` } });
    const response = await apiContext.get(url, { params: queryParams });
    return response;
}