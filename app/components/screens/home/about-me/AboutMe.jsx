import Image from 'next/image';
import React from 'react';
import { APP_URL } from './../../../../constants';
import styles from './AboutMe.module.scss';
import DescriptionButton from './description-button/DescriptionButton';
import EmailButton from './email-button/EmailButton';

function AboutMe({ me }) {
  return (
    <div className={styles.me}>
      <div className={styles['image-wrapper']}>
        <Image
          src={`${APP_URL}${me.avatar}`}
          height={190}
          width={190}
          className={styles.image}
          alt={me.siteName}
          quality={100}
        />
      </div>
      <div className={styles.heading}>
        <span>4ront</span>
        <Image
          alt=''
          src={`${APP_URL}/icons/verified.svg`}
          height={16}
          width={16}
        />
      </div>
      <EmailButton />
      <DescriptionButton description={me.description} />
    </div>
  );
}

export default AboutMe;
