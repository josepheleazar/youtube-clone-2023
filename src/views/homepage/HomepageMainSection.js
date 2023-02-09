import React from 'react';
import styles from './HomepageMainSection.module.scss';

import { CardHorizontal } from '../../components/Card';

export default function HomepageMainSection(props) {
  const { feed } = props;

  return(
    <div className={feed.length <= 4 ? styles['main-container__one-row'] : styles['main-container__two-rows']}>
      {
        feed.map((item, index) => (
          <CardHorizontal 
            key={index}
            imageLogo={item.imageLogo}
            imageBanner={item.imageBanner}
            title={item.title}
            channelName={item.channelName}
            views={item.views}
            dateUploaded ={item.dateUploaded}
          />
        ))
      }
    </div>
  );
}