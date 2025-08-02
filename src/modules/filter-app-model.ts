import { Video } from "./video-transfer-model";

export interface FilterVideoModule {
    statusCode: number;
    body: Video[];
}