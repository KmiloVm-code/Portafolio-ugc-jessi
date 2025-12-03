export interface Item {
  id: number;
  text: string;
}

export interface Media {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
  mime: string;
}

export interface VideoAbout {
  id: number;
  poster: Media;
  video: Media;
}

export interface About {
  id: number;
  title: string;
  items: Item[];
  video_about: VideoAbout;
}
