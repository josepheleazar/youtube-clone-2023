import React from 'react';
import styles from './styles.module.scss';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineFeedback, MdOutlineFlag } from 'react-icons/md';

export default function SidebarSettingSection() {
  return(
    <section>
      <div className={styles['sidebar__button-group__container-border-left--extended']}>
        <div className={styles['sidebar__button-group']}>
          <button className={styles['sidebar__button-with-icon']}>
            <IoSettingsOutline size={20} /> Settings
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <MdOutlineFlag size={20} /> Report history
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <AiOutlineQuestionCircle size={20} /> Help
          </button>
          <button className={styles['sidebar__button-with-icon']}>
            <MdOutlineFeedback size={20} /> Send feedback
          </button>
        </div>
      </div>
    </section>
  );
}