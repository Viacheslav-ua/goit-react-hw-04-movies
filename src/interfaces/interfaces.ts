type genres = {
  id: number;
  name: string;
};

export interface movieTypes {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  genres: genres[];
  backdrop_path?: string;
}

export interface castTypes {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
}

export interface reviewsTypes {
  id: string;
  author: string;
  content: string;
}
