export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
    large?: ImageFormat;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
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
