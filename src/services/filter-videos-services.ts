import { IncomingMessage } from 'http';
import { repositoryVideos } from '../repositories/videos-repository';
import { StatusCode } from '../utils/status-code';
import { FilterVideoModule } from '../modules/filter-app-model';

export const serviceFilterEpisodes = async (request: IncomingMessage): Promise<FilterVideoModule> => {
    try {
        // Searching for videos in the repository
        const url = new URL(request.url || '', `http://${request.headers.host}`);
        const nome = url.searchParams.get('nome');
        const videos = await repositoryVideos(nome || undefined);
        
        // Define the response format
        let responseFormat: FilterVideoModule = {
            statusCode: 200,
            body: []
        }

        // Verify if the data is empty
        if (!videos || videos.length === 0) {
            responseFormat.statusCode = StatusCode.NO_CONTENT; // Set status code to 204 if no videos found
            responseFormat.body = []; 
            return responseFormat;
        } else {
            responseFormat.statusCode = StatusCode.OK; // Set status code to 200 if videos are found
        }

        // Map the videos to the expected format
        responseFormat.body = videos.map(video => ({
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

