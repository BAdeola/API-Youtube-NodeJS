import { IncomingMessage } from 'http';
import { repositoryVideos } from '../repositories/videos-repository';
import { StatusCode } from '../utils/status-code';
import { FilterVideoModule } from '../modules/filter-app-model';

export const serviceFilterEpisodes = async (name: string | undefined):Promise<FilterVideoModule> => {
    try {
        // Searching for videos in the repository
        const querystring = name?.split('?v=')[1] || '';
        const video = await repositoryVideos(querystring); 
        
        // Define the response format
        let responseFormat: FilterVideoModule = {
            statusCode: 200,
            body: []
        }

        // Verify if the data is empty
        responseFormat.statusCode = video.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

        // Map the video to the expected format
        responseFormat.body = video.map(video => ({
            title: video.title,
            videoId: video.videoId,
            views: video.views
        }));

        return responseFormat;
    } catch (error) {
        return {
            statusCode: StatusCode.INTERNAL_SERVER_ERROR,
            body: []
        };
    }
}

