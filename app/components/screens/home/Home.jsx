import React from 'react';
import MetaTitle from '../../ui/MetaTitle';
import Circles from './../../ui/circles/Circles';
import AboutMe from './about-me/AboutMe';
import Grid from './grid/Grid';
import styles from './Home.module.scss';
import RecentVideos from './recent-videos/RecentVideos';

const Home = ({ links, me }) => {
  return (
    <section className={styles.sect}>
      <MetaTitle title='4ront Links | Welcome, buddy' />
      <div className={styles.container}>
        <AboutMe me={me} />
        <RecentVideos />
        <Grid links={links} />
      </div>
      <Circles />
    </section>
  );
};

export default Home;
