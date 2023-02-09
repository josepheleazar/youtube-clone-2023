import React from "react";
import styles from './styles.module.scss';

import dateDifference from '../../utils/dateDifference';
import translateViews from "../../utils/translateViews";

export default function CardHorizontal(props) {
  const { imageLogo, imageBanner, imageLogoAlt, imageBannerAlt, title, channelName, views, dateUploaded } = props;

  return(
    <div className={styles['card-horizontal__container']}>
      {/* Image Banner */}
      <img alt={imageBannerAlt} src={imageBanner} className={styles['card-horizontal__banner']} />
      {/* Card's Lower Part */}
      <div className={styles['card-horizontal__second-section']}>
        {/* Image Logo */}
        <img alt={imageLogoAlt} src={imageLogo} className={styles['card-horizontal__logo']} />
        {/* Collection of Text */}
        <div className={styles['card-horizontal__text-section']}>
          {/* Title */}
          <h2 className={styles['card-horizontal__title']}> {title} </h2>
          {/* Channel Name */}
          <h4 className={styles['card-horizontal__subtitle']}> {channelName} </h4>
          {/* Views • Date */}
          <div className={styles['card-horizontal__date-views-section']}> 
            <h4> {translateViews(views)} views </h4>
            <h4>  &nbsp;•&nbsp;</h4>
            <h4> {dateDifference(dateUploaded)} </h4>
          </div>
        </div>
      </div>
    </div>
  );
}