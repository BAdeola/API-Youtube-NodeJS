import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisode } from '../services/list-espisodes-service';

export const getListVideos = async (req: IncomingMessage, res: ServerResponse) => { 
  const content = await serviceListEpisode(); // Call the service to get the list of episodes

  res.writeHead(200, { 'Content-Type': 'application/json' }); //every response should have a header and content
  res.end(JSON.stringify(content)); 
};