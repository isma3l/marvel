import { Thumbnail } from './Thumbnail';

export interface Comic {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  modified: string;
}
