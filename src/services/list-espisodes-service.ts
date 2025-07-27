import { repositoryVideos } from "../repositories/videos-repository";   

export const serviceListEpisode = async () =>{
    const data = await repositoryVideos(); // call the repository to get the list of videos

    return data;
}