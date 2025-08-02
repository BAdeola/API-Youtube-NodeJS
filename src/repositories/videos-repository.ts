import fs from 'fs';
import path from 'path';
import { Video } from '../modules/video-transfer-model';    

const pathData = path.join(__dirname, '../repositories/videos.json');

export const repositoryVideos = async (videoName?: string): Promise<Video[]> => {
    const data = fs.readFileSync(pathData, 'utf-8');
    let jsonFile = JSON.parse(data);

    if(videoName){
        jsonFile = jsonFile.filter((video: Video) => 
            video.title.toLowerCase().includes(videoName.toLowerCase())
        );
    }
    return jsonFile;
};