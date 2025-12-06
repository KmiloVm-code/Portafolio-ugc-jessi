export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  url: string;
}

export interface ImageItem {
  id: number;
  image: Image;
}

export interface ImagesSection {
  __component: "layout.images-section";
  id: number;
  title: string;
  description: string;
  instagram_url: string;
  images: ImageItem[];
}
