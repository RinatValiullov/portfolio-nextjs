import Head from 'next/head';
import React from 'react';

const MetaTitle = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
    </Head>
  );
};

export default MetaTitle;
