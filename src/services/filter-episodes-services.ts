import { repositoryVideos } from '../repositories/videos-repository';

export const serviceFilterEpisodes = async (videoName: string) => {
    const data = await repositoryVideos(videoName);// Call the repository to get the list of videos

    return data; // Return the filtered list of videos
}
    
    