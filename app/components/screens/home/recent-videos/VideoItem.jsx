import React from 'react';
import styles from './RecentVideos.module.scss';

const VideoItem = ({ item }) => {
  return (
    <a
      href={`https://youtu.be/${item.videoId}`}
      target="_blank"
      rel="noreferrer"
      className={styles.item}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.thumbnail} alt={item.title} width={80} />
      <span>{item.title}</span>
    </a>
  );
};

export { VideoItem };
