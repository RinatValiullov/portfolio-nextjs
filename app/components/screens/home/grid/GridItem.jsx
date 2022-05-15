import React from 'react';
import AnimateBlock from './../../../ui/animate-block/AnimateBlock';
import styles from './Grid.module.scss';

const GridItem = ({ item }) => {
  return (
    <a
      href={item.link}
      rel={'noreferrer'}
      target="_blank"
      className={styles.item}
    >
      <div
        className={styles.gradient}
        style={{ backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 51%,  ${item.gradient.to} 100%)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.icon.path} alt="" width={item.icon.width} />
      </div>
      <div className={styles.title}>{item.title}</div>
      {item.isImportant && <AnimateBlock />}
    </a>
  );
};

export default GridItem;
