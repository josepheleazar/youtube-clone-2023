import React from 'react';
import styles from './styles.module.scss';

import { AiOutlineYoutube } from 'react-icons/ai';

export default function SidebarMoreFromYTSection() {
  return(
    <section className={styles['sidebar-section-with-title__container']}>
      <h1> More from YouTube </h1>
      <div className={styles['sidebar__button-group__container-border-left--extended']}>
        <div className={styles['sidebar__button-group']}>
          <button className={styles['sidebar__button-with-icon']}>
            <AiOutlineYoutube size={20} /> YouTube Premium
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <AiOutlineYoutube size={20} /> Creator Studio
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <AiOutlineYoutube size={20} /> YouTube Music
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <AiOutlineYoutube size={20} /> YouTube Kids
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <AiOutlineYoutube size={20} /> YouTube TV
          </button>
        </div>
      </div>
    </section>
  );
}