import React, { useEffect, useState } from 'react';
import styles from './Homepage.module.scss';
import { chunk } from 'lodash';

import HomepageHeader from './HomepageHeader';
import HomepageMainSection from './HomepageMainSection';
import HomepageShortSection  from './HomepageShortSection';

import { mainFeed, shortFeed } from '../../configs/feed';

export default function Index() {
  const [mainFeedChunks, setMainFeedChunks] = useState([]);
  const [shortFeedChunks, setShortFeedChunks] = useState([]);
  
  useEffect(() => {
    if(mainFeed.length > 8){
      setMainFeedChunks(chunk(mainFeed, 8));
    } else {
      setMainFeedChunks([mainFeed]);
    }

    if(shortFeed.length > 9) {
      setShortFeedChunks(chunk(shortFeed, 9));
    } else {
      setShortFeedChunks([shortFeed]);
    }
  }, []);

  return(
    <div className={styles['container__header-margin-top']}>
      <div className={styles['homepage__container']}>
        <HomepageHeader />
        <div className={styles['homepage__feed-container']}>
          {
            mainFeedChunks.map((item, index) => (
              <div key={'HomeSection' + index}>
                <HomepageMainSection feed={item} key={'MainSection ' + index}/>
                <HomepageShortSection feed={shortFeedChunks[index] ?? []} key={'ShortSection ' + index}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}