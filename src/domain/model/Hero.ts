import { Thumbnail } from "./Thumbnail";

export interface Hero {
    id: number;
    name: string;
    thumbnail: Thumbnail;
    isFavorite?: boolean;
}