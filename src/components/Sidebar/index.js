import React from 'react';
import styles from './styles.module.scss';

import SidebarMainSection from './SidebarMainSection';
import SidebarSubscriptionSection from './SidebarSubscriptionSection';
import SidebarExploreSection  from './SidebarExploreSection';
import SidebarMoreFromYTSection from './SidebarMoreFromYTSection';
import SidebarSettingSection from './SidebarSettingSection';
import SidebarFooterSection from './SidebarFooterSection';

export default function Index() {
  return(
    <div className={styles['container__container--margin-top']}>
      <div className={styles['sidebar__container']}>
        <SidebarMainSection />
        <SidebarSubscriptionSection />
        <SidebarExploreSection />
        <SidebarMoreFromYTSection />
        <SidebarSettingSection />
        <SidebarFooterSection />
      </div>
    </div>
  );
}