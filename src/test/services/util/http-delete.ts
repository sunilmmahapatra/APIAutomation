import { request } from '@playwright/test';

export async function httpDelete(url: string) {
    const apiContext = await request.newContext();
    const response = await apiContext.delete(url);
    return response;
}
export async function httpDeleteWithHeaders(url: string, headers: { [key: string]: string }) {      
    const apiContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await apiContext.delete(url);
    return response;
}
export async function httpDeleteWithBearer(url: string, token: string) {
    const apiContext = await request.newContext({ extraHTTPHeaders: { 'Authorization': `Bearer ${token}` } });
    const response = await apiContext.delete(url);
    return response;
}
export async function httpDeleteWithQueryParams(url: string, queryParams: { [key: string]: string }) {  
    const apiContext = await request.newContext();
    const response = await apiContext.delete(url, { params: queryParams });
    return response;
}
export async function httpDeleteWithQueryParamsAndHeaders(url: string, queryParams: { [key: string]: string }, headers: { [key: string]: string }) {
    const apiContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await apiContext.delete(url, { params: queryParams });
    return response;
}
export async function httpDeleteWithQueryParamsAndBearer(url: string, queryParams: { [key: string]: string }, token: string) {  
    const apiContext = await request.newContext({ extraHTTPHeaders: { 'Authorization': `Bearer ${token}` } });
    const response = await apiContext.delete(url, { params: queryParams });
    return response;
}
export async function httpDeleteWithBody(url: string, body: any) {  
    const apiContext = await request.newContext();
    const response = await apiContext.delete(url, { data: body });
    return response;
}
export async function httpDeleteWithBodyAndHeaders(url: string, body: any, headers: { [key: string]: string }) {        
    const apiContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await apiContext.delete(url, { data: body });
    return response;
}
export async function httpDeleteWithBodyAndBearer(url: string, body: any, token: string) {
    const apiContext = await request.newContext({ extraHTTPHeaders: { 'Authorization': `Bearer ${token}` } });
    const response = await apiContext.delete(url, { data: body });
    return response;
}
export async function httpDeleteWithBodyAndQueryParams(url: string, body: any, queryParams: { [key: string]: string }) {  
    const apiContext = await request.newContext();
    const response = await apiContext.delete(url, { data: body, params: queryParams });
    return response;
}
export async function httpDeleteWithBodyAndQueryParamsAndHeaders(url: string, body: any, queryParams: { [key: string]: string }, headers: { [key: string]: string }) {      
    const apiContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await apiContext.delete(url, { data: body, params: queryParams });
    return response;
}
export async function httpDeleteWithBodyAndQueryParamsAndBearer(url: string, body: any, queryParams: { [key: string]: string }, token: string) {        
    const apiContext = await request.newContext({ extraHTTPHeaders: { 'Authorization': `Bearer ${token}` } });
    const response = await apiContext.delete(url, { data: body, params: queryParams });
    return response;
}