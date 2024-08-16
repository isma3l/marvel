import React from 'react';
import { Comic } from '@/domain';
import { ComicItem } from './ComicItem';
import * as styles from './comicList.module.scss';

type ComicListProps = {
  comics: Comic[];
};

const ComicList = ({ comics }: ComicListProps) => {
  const sortedComics = comics
    .map((comic) => ({ ...comic, modified: new Date(comic.modified).getFullYear().toString() }))
    .sort((prev, next) => Number(prev.modified) - Number(next.modified));

  return (
    <section className={styles.comics}>
      <h2 className={styles.comics__title}>COMICS</h2>
      <div className={styles.comics__list} role="list" aria-label="List of comics">
        {sortedComics.map((comic) => (
          <ComicItem key={comic.id} comic={comic} />
        ))}
      </div>
    </section>
  );
};

export const ComicListMemo = React.memo(ComicList);
