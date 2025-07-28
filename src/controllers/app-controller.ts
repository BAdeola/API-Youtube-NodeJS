import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisode } from '../services/list-espisodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-services';

export const getListVideos = async (req: IncomingMessage, res: ServerResponse) => { 
  const content = await serviceListEpisode(); // Call the service to get the list of episodes

  res.writeHead(200, { 'Content-Type': 'application/json' }); //every response should have a header and content
  res.end(JSON.stringify(content)); 
};

export const getFilteredVideos = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceFilterEpisodes("Anti-hero")// Get the query string from the URL

  res.writeHead(200, { 'Content-Type': 'application/json' }); //menas that i'm returning a json
  res.end(JSON.stringify(content)); // Return the filtered list of videos as JSON
};