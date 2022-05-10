import axios from 'axios';
import React from 'react';
import Home from '../app/components/screens/home/Home';
import { API_URL } from '../app/constants';

export default function HomePage(props) {
  return (
    <React.StrictMode>
      <Home {...props} />
    </React.StrictMode>
  );
}

export const getStaticProps = async () => {
  const links = await axios.get(`${API_URL}/links`).then(({ data }) => data);
  const me = await axios.get(`${API_URL}/me`).then(({ data }) => data);

  return {
    props: {
      links,
      me
    },
    revalidate: 60
  };
};
