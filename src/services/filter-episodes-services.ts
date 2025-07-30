import { IncomingMessage } from 'http';
import { repositoryVideos } from '../repositories/videos-repository';

export const serviceFilterEpisodes = async (videoName: IncomingMessage) => {
    const queryString = videoName.url?.split('?v=')[1] || '';
    
    const data = await repositoryVideos(queryString);// Call the repository to get the list of videos

    return data; // Return the filtered list of videos
}
    
    