import React from 'react';
import styles from './styles.module.scss';

import { AiOutlineClockCircle, AiOutlineYoutube } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { BsCollectionPlay } from 'react-icons/bs';
import { MdHomeFilled, MdOutlineVideoLibrary } from 'react-icons/md';
import { RiHistoryLine } from 'react-icons/ri';

export default function SidebarMainSection() {
  return(
    <section>
      {/* First 3 menu item */}
      <div className={styles['sidebar__button-group__container']}>
        <div className={styles['sidebar__button-group']}>
          <button className={styles['sidebar__button-with-icon--active']}>
            <MdHomeFilled size={20} /> Home
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <AiOutlineYoutube size={20} /> Shorts
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <BsCollectionPlay size={20} /> Subscriptions
          </button>
        </div>
      </div>
      {/* Last 4 menu item */}
      <div className={styles['sidebar__button-group__container-border-left--extended']}>
        <div className={styles['sidebar__button-group']}>
          <button className={styles['sidebar__button-with-icon']}>
            <MdOutlineVideoLibrary size={20} /> Library
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <RiHistoryLine size={20} /> History
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <AiOutlineClockCircle size={20} /> Watch later
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <BiLike size={20} /> Liked videos 
          </button>
        </div>
      </div>
    </section>
  );
}