import { FilterVideoModule } from "../modules/filter-app-model";
import { repositoryVideos } from "../repositories/videos-repository";   
import { StatusCode } from "../utils/status-code";

export const serviceListEpisode = async (): Promise<FilterVideoModule> => {
    // Define the response format
    let responseFormat: FilterVideoModule = {
        statusCode: 200,
        body: []
    }
    // Searching for videos in the repository
    // This function should return a list of videos from the repository
    const data = await repositoryVideos(); // call the repository to get the list of videos
    
    // Verify if the data is empty
    if (data === null || data === undefined) {
        responseFormat.statusCode = StatusCode.NO_CONTENT; // Set status code to 204 if no videos found
        responseFormat.body = []; // Return an empty body
        return responseFormat; // Return the response format
    } else {
        responseFormat.statusCode = StatusCode.OK; // Set status code to 200 if videos are found
    }

    // Map the data to the expected format
    responseFormat.body = data.map(video => ({
        title: video.title,
        videoId: video.videoId,
        views: video.views // Include views if available
    }));

    return responseFormat;
}
