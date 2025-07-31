import * as http from 'http';
import { getListVideos, getFilteredVideos } from './controllers/app-controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
        //query String
        const baseUrl = request.url?.split('?')[0] || '';

        // list videos
        if (request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
            await getListVideos(request, response);
        }

        // filter videos
        if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER) {
            await getFilteredVideos(request, response);
        }
    }
);

const port = process.env.PORT; //doc .env

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});