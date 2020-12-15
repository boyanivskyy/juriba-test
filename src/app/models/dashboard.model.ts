export interface ApiResponse {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: 50;
    };
    items: DashboardEntity[];
}

export interface DashboardEntity {
    kind: string;
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };
    snippet: Snippet;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumdnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
}

export interface Thumbnails {
    default: ThumbnailOptions;
    medium: ThumbnailOptions;
    high: ThumbnailOptions;
}

export interface ThumbnailOptions {
    url: string;
    width: number;
    height: number;
}
