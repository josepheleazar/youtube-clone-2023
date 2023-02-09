import React from "react";
import styles from './styles.module.scss';

import translateViews from "../../utils/translateViews";

export default function CardVertical(props) {
  const { imageBanner, imageBannerAlt, title, views } = props;
  
  return(
    <div className={styles['card-vertical__container']}>
      <img alt={imageBannerAlt} src={imageBanner}/>
      <h1> {title} </h1>
      <h4> {translateViews(views)} views </h4>
    </div>
  );
}