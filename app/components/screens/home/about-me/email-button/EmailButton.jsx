import Image from 'next/image';
import React from 'react';
import { APP_URL } from './../../../../../constants';
import styles from './EmailButton.module.scss';

const EmailButton = () => {
  return (
    <div className={styles.button}>
      <a
        href="mailto:info@mail.ru"
        target="_blank"
        rel="noreferrer"
        title="info@mail.ru"
      >
        <span>
          <Image
            src={`${APP_URL}/icons/email.svg`}
            alt=""
            height={18}
            width={18}
          />
        </span>
        <span>Email</span>
      </a>
    </div>
  );
};

export default EmailButton;
