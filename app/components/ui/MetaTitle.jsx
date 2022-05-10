import Head from 'next/head';
import React from 'react';

const MetaTitle = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MetaTitle;
