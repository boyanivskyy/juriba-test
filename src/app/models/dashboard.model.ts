export interface ApiResponse {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: DashboardItem[];
}

export interface BaseDashboardItem {
    kind: string;
    etag: string;
    snippet: Snippet;
}

export interface DashboardItem extends BaseDashboardItem {
    id: {
        kind: string;
        videoId: string;
    };
}
export interface DashboardEntity extends BaseDashboardItem {
    id: string;
}

export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
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
