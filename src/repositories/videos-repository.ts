import fs from 'fs';
import path from 'path';
import { Video } from '../modules/video-model';


const pathData = path.join(__dirname, '../repositories/videos.json');

export const repositoryVideos = async (): Promise<Video[]> => {
    const data = fs.readFileSync(pathData, 'utf-8');
    const jsonFile = JSON.parse(data);

    return jsonFile;
};