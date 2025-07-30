import * as http from 'http';
import { getListVideos, getFilteredVideos } from './controllers/app-controller';
import { Routes } from './routes/routes';

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
        //query String
        const baseUrl = req.url?.split('?')[0] || '';

        // list videos
        if (req.method === 'GET' && baseUrl === Routes.LIST) {
            await getListVideos(req, res);
        }

        // filter videos
        if (req.method === 'GET' && baseUrl === Routes.FILTER) {
            await getFilteredVideos(req, res);
        }
    }
);

const port = process.env.PORT; //doc .env

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});