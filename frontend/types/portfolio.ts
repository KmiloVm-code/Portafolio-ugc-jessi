export interface Video {
  id: number;
  video_id: string;
  title: string;
  category: string;
  views: number;
}

export interface Portfolio {
  __component: "layout.portfolio-section";
  id: number;
  title: string;
  description: string;
  tiktok_url: string;
  tiktok_videos: Video[];
}
