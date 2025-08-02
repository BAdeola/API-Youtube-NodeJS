import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisode } from '../services/list-videos-service';
import { serviceFilterEpisodes } from '../services/filter-videos-services';
import { ContentType } from '../utils/content-type';
import { FilterVideoModule } from '../modules/filter-app-model';

const DEFAULT_CONTENT = { 'Content-Type': ContentType.JSON }

export const getListVideos = async (request: IncomingMessage, response: ServerResponse) => {
  const content: FilterVideoModule = await serviceListEpisode(); // Call the service to get the list of episodes

  response.writeHead(content.statusCode, DEFAULT_CONTENT); //every response should have a header and content
  response.write(JSON.stringify(content.body)); 

  response.end(); // End the response
};

export const getFilteredVideos = async (request: IncomingMessage, response: ServerResponse) => {
  // Get the query string from the URL

  const content: FilterVideoModule = await serviceFilterEpisodes(request.url)// Get the query string from the URL

  response.writeHead(content.statusCode, DEFAULT_CONTENT); //menas that i'm returning a json
  response.write(JSON.stringify(content.body)); // Return the filtered list of videos as JSON

  response.end(); // End the response
};