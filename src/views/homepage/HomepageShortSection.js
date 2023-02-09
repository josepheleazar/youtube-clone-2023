import React from 'react';
import styles from './HomepageShortSection.module.scss';

import { CardVertical } from '../../components/Card';
import { AiOutlineYoutube } from 'react-icons/ai';

export default function HomepageShortSection(props) {
  const { feed } = props;

  return(
    feed.length === 0 ? (
      <>
      </>
    ) : (
      <div className={styles['shorts-container']}>
        <div className={styles['shorts__title-container']}>
          <AiOutlineYoutube size={22.5} /> 
          <h1> Shorts </h1>
        </div>
        <div className={styles['shorts__feed-container']}>
          {
            feed.map((item, index) => (
              <CardVertical 
                key={index}
                imageBanner={item.imageBanner}
                title={item.title}
                views={item.views}
              />
            ))
          }
        </div>
      </div>
    )
  );
}