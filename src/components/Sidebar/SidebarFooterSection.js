import React from 'react';
import styles from './styles.module.scss';

export default function SidebarFooterSection() {
  return(
    <section className={styles['sidebar-footer__container']}>
      
      {/* First Section */}
      <div>
        {/* First row */}
        <div className={styles['sidebar-footer__links-container']}>
          <button> About </button>
          <button> Press </button>
          <button> Copyright </button>
        </div>
        {/* Second row */}
        <div className={styles['sidebar-footer__links-container']}>
          <button> Contact us </button>
          <button> Creators </button>
        </div>
        {/* Third row */}
        <div className={styles['sidebar-footer__links-container']}>
          <button> Advertise </button>
          <button> Developers </button>
        </div>
      </div>
      
      {/* Second Section */}
      <div>
        {/* First row */}
        <div className={styles['sidebar-footer__links-container']}>
          <button> Terms </button>
          <button> Privacy </button>
          <button> Policy & Safety </button>
        </div>
        {/* Second row */}
        <div className={styles['sidebar-footer__links-container']}>
          <button> How YouTube works </button>
        </div>
        {/* Third row */}
        <div className={styles['sidebar-footer__links-container']}>
          <button> Test new features </button>
        </div>
      </div>

      {/* Third Section */ }
      <div className={styles['sidebar-footer__copyright-container']}>
        <p className={styles['sidebar-footer__copyright']}> © 2023 Google LLC </p>
      </div>
    </section>
  );
}