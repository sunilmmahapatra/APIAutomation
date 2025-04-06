import { request } from '@playwright/test';

export async function httpPut(url: string, body: any) {
    const apiContext = await request.newContext();
    const response = await apiContext.put(url, { data: body });
    return response;
}
export async function httpPutWithHeaders(url: string, body: any, headers: { [key: string]: string }) {
    const apiContext = await request.newContext({ extraHTTPHeaders: headers });
    const response = await apiContext.put(url, { data: body });
    return response;
}