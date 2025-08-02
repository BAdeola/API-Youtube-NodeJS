import * as http from 'http';
import { getListVideos, getFilteredVideos } from './controllers/app-controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

//query String
export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split('?')[0] || '';

    // list videos
    if (request.method === HttpMethods.GET && baseUrl === Routes.LIST) 
        await getListVideos(request, response);

    // filter videos 
    if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER) 
        await getFilteredVideos(request, response);
} 