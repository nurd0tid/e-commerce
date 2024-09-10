export interface Media {
  id: string;
  type: "video" | "photo";
  url: string;
  duration?: string;
}

export interface Review {
  name: string;
  photo: string;
  created_at: string;
  rating: number;
  comment: string;
  media: Media[];
}
