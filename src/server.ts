import * as http from 'http';
import { getListVideos } from './controllers/app-controller';

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        if (req.method === 'GET') {
            await getListVideos(req, res);
        }
    }
);

const port = process.env.PORT; //doc .env

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});