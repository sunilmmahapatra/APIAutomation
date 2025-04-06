import { request } from '@playwright/test';

export async function httpPost(url: string, body: any) {
    const apiContext = await request.newContext();
    const response = await apiContext.post(url, { data: body });
    return response;
}
export async function httpPostWithHeaders(url: string, body: any, headers: { [key: string]: string }) {
    const apiContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await apiContext.post(url, { data: body });
    return response;
}
export async function httpPostWithBearer(url: string, body: any, token: string) {
    const apiContext = await request.newContext({ extraHTTPHeaders: { 'Authorization': `Bearer ${token}` } });
    const response = await apiContext.post(url, { data: body });
    return response;
}
export async function httpPostWithQueryParams(url: string, body: any, queryParams: { [key: string]: string }) {
    const apiContext = await request.newContext();
    const response = await apiContext.post(url, { data: body, params: queryParams });
    return response;
}
export async function httpPostWithQueryParamsAndHeaders(url: string, body: any, queryParams: { [key: string]: string }, headers: { [key: string]: string }) {   
    const apiContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await apiContext.post(url, { data: body, params: queryParams });
    return response;
}
export async function httpPostWithQueryParamsAndBearer(url: string, body: any, queryParams: { [key: string]: string }, token: string) {     
    const apiContext = await request.newContext({ extraHTTPHeaders: { 'Authorization': `Bearer ${token}` } });
    const response = await apiContext.post(url, { data: body, params: queryParams });
    return response;
}
