import React from 'react';
import styles from './styles.module.scss';

import { BsTrophy } from 'react-icons/bs';
import { GiClapperboard } from 'react-icons/gi';
import { IoMusicalNoteOutline, IoNewspaperOutline } from 'react-icons/io5';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import { TbHanger2 } from 'react-icons/tb';
import { SiYoutubegaming } from 'react-icons/si';

export default function SidebarExploreSection() {
  return(
    <section className={styles['sidebar-section-with-title__container']}>
      <h1> Explore </h1>
      <div className={styles['sidebar__button-group__container-border-left--extended']}>
        <div className={styles['sidebar__button-group']}>
          <button className={styles['sidebar__button-with-icon']}>
            <MdOutlineLocalFireDepartment size={20} /> Trending 
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <IoMusicalNoteOutline size={20} /> Music
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <GiClapperboard size={20} /> Movies 
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <SiYoutubegaming size={20} /> Gaming 
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <IoNewspaperOutline size={20} /> News
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <BsTrophy size={20} /> Sports
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <TbHanger2 size={20} /> Fashion & Beauty
          </button>
        </div>
      </div>
    </section>
  );
}