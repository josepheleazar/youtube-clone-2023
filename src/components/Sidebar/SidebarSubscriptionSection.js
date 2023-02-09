import React from 'react';
import styles from './styles.module.scss';

import { BsTrophy } from 'react-icons/bs';
import { GiClapperboard } from 'react-icons/gi';
import { IoMusicalNoteOutline } from 'react-icons/io5';
import { SiYoutubegaming } from 'react-icons/si';

export default function SidebarSubscriptionSection() {
  return(
    <section className={styles['sidebar-section-with-title__container']}>
      <h1> Subscriptions </h1>
      <div className={styles['sidebar__button-group__container-border-left--extended']}>
        <div className={styles['sidebar__button-group']}>
          <button className={styles['sidebar__button-with-icon']}>
            <IoMusicalNoteOutline size={20} /> Music
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <BsTrophy size={20} /> Sports
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <SiYoutubegaming size={20} /> Gaming
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <GiClapperboard size={20} /> Movies
          </button>
        </div>
      </div>
    </section>
  );
}