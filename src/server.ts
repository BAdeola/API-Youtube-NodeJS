import * as http from 'http';
import { getListVideos, getFilteredVideos } from './controllers/app-controller';

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
        if (req.method === 'GET' && req.url === '/list-videos') {
            await getListVideos(req, res);
        }

        if (req.method === 'GET' && req.url === '/filter-videos') {
            await getFilteredVideos(req, res);
        }
    }
);

const port = process.env.PORT; //doc .env

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});