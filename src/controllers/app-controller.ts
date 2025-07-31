import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisode } from '../services/list-espisodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';

export const getListVideos = async (request: IncomingMessage, response: ServerResponse) => { 
  const content = await serviceListEpisode(); // Call the service to get the list of episodes

  response.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON }); //every response should have a header and content
  response.end(JSON.stringify(content)); 
};

export const getFilteredVideos = async (request: IncomingMessage, response: ServerResponse) => {
  // Get the query string from the URL

  const content = await serviceFilterEpisodes(request)// Get the query string from the URL

  response.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON }); //menas that i'm returning a json
  response.end(JSON.stringify(content)); // Return the filtered list of videos as JSON
};