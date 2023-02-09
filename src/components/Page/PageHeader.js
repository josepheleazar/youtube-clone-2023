import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as YoutubeLogo } from '../../img/logo2.svg';

import { AiOutlinePlaySquare, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsBell, BsBellFill, BsBroadcast, BsSearch } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { HiOutlineMoon, HiOutlineUserCircle } from 'react-icons/hi';
import { HiOutlineCurrencyDollar, HiOutlineLanguage } from 'react-icons/hi2';
import { IoSettingsOutline, IoShieldOutline } from 'react-icons/io5';
import { MdOutlineArrowForwardIos, MdOutlineFeedback, MdOutlineKeyboardAlt, MdOutlineMic } from 'react-icons/md';
import { RiFileUserLine, RiGlobalLine, RiShieldUserLine, RiVideoAddFill, RiVideoAddLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SlSocialYoutube } from 'react-icons/sl';

export default function PageHeader() {
  const [activePopups, setActivePopups] = useState([false, false, false]);

  useEffect(() => {
    console.log(activePopups);
  }, [])
  
  const handleButtonClick = (event, id) => {
    let newArr = [...activePopups];

    if(newArr.some((item, index) => (item === true && index !== Number(id)))){
      newArr = [false, false, false];
    } 

    newArr[Number(id)] = !newArr[Number(id)];
    setActivePopups(newArr);
    console.log(newArr);
  }

  return(
    <nav className={styles['header__container']}>
      <div className={styles['header__brand__group']}> 
        <RxHamburgerMenu className={styles['header__brand__menu']} size={22.5} />
        <YoutubeLogo className={styles['header__brand__logo']} />
        <p className={styles['header__brand__superscript']}> PH </p>
      </div>
      <div className={styles['header__search__group']}>
        <div className={styles['element__empty']}> &nbsp; </div>
        <div className={styles['header__search__bar__group']}>
          <input className={styles['header__search__bar']} placeholder='Search' />
          <button className={styles['header__search__button']}>
            <BsSearch className={styles['primary-button']} size={22.5} />
          </button>
        </div>
        <button className={styles['header__mic__button']}>
          <MdOutlineMic className={`${styles['primary-button']} ${styles['primary-button--oversized']}`} size={25} />
        </button>
      </div>
      <div className={styles['header__popup__button__group']}>
        <div className={styles['element__empty']}> &nbsp; </div>
        <button onClick={(event) => handleButtonClick(event, '0')} className={styles['header__popup-button']}> 
          {
            activePopups[0] ? (
              <RiVideoAddFill size={22.5} /> 
            ) : (
              <RiVideoAddLine size={22.5} /> 
            )
          }
        </button>
        <button onClick={(event) => handleButtonClick(event, '1')} className={styles['header__popup-button']}> 
          {
            activePopups[1] ? (
              <BsBellFill size={22.5} /> 
            ) : (
              <BsBell size={22.5} /> 
            )
          }
        </button>
        <button onClick={(event) => handleButtonClick(event, '2')} className={styles['header__popup-button']}> 
          <HiOutlineUserCircle size={22.5} />
        </button>
      </div>
      {/* Popover Content #1 */}
      <div className={activePopups[0] ? styles['header__popup-content-1__container'] : styles['header__popup-content__container--hidden']}>
        <button className={styles['top-button']}> <AiOutlinePlaySquare size={20} /> Upload Video </button>
        <button className={styles['bottom-button']}> <BsBroadcast size={20} /> Go Live </button>
      </div>
      {/* Popover Content #2 */}
      <div className={activePopups[1] ? styles['header__popup-content-2__container'] : styles['header__popup-content__container--hidden']}>
        <div className={styles['header__popup-content__header']}>
          <h1> Notifications </h1>
          <button>
            <IoSettingsOutline size={20} />
          </button>
        </div>
        <div className={styles['header__popup-content-2__container-no-notifs']}>
          <button className={styles['top-button']}> <BsBell size={100} /> </button>
          <h1> Your notifications live here </h1>
          <h2> Subscribe to your favorite channels to get notified about their latest videos. </h2>
        </div>
      </div>
      {/* Popover Content #3 */}
      <div className={activePopups[2] ? styles['header__popup-content-3__container'] : styles['header__popup-content__container--hidden']}>
        <div className={styles['header__popup-content-3__header__container']}>
          <div className={styles['header__popup-content-3__header__title-with-icon']}>
            <button> <HiOutlineUserCircle size={40} />  </button>
              <div className={styles['header__popup-content-3__header__title-text']}>
                <h1> JOSEPH ELEAZAR ARIAS </h1>
                <h2> josepheleazar@qualitytrade.com </h2>
                <button> Manage your Google Account </button>
              </div>
          </div>
        </div>
        {/* Popover Content #3 - Section 1 */}
        <div className={styles['header__popup-content-3__menu-item-group__container']}>
          <button> <HiOutlineUserCircle size={20} /> Create a channel </button>
          <button> <SlSocialYoutube size={20} /> YouTube Studio </button>
          <button className={styles['button-with-arrow-right']}> <RiFileUserLine size={20} /> <p> Switch account </p> <MdOutlineArrowForwardIos size={15} /> </button>
          <button> <FaSignOutAlt size={20} /> Sign out </button>
        </div>
        {/* Popover Content #3 - Section 2 */}
        <div className={styles['header__popup-content-3__menu-item-group__container']}>
          <button> <HiOutlineCurrencyDollar size={20} /> Purchases and Membership </button>
          <button> <RiShieldUserLine size={20} /> Your data in YouTube </button>
        </div>
        {/* Popover Content #3 - Section 3 */}
        <div className={styles['header__popup-content-3__menu-item-group__container']}>
          <button className={styles['button-with-arrow-right']}> <HiOutlineMoon size={20} /> <p> Appearance: Device theme </p> <MdOutlineArrowForwardIos size={15} /> </button>
          <button className={styles['button-with-arrow-right']}> <HiOutlineLanguage size={20} /> <p> Language: English </p> <MdOutlineArrowForwardIos size={15} /> </button>
          <button className={styles['button-with-arrow-right']}> <IoShieldOutline size={20} /> <p> Restricted Mode: Off </p> <MdOutlineArrowForwardIos size={15} /> </button>
          <button className={styles['button-with-arrow-right']}> <RiGlobalLine size={20} /> <p> Location: Philippines </p> <MdOutlineArrowForwardIos size={15} /> </button>
          <button> <MdOutlineKeyboardAlt size={20} /> Keyboard shortcuts </button>
        </div>
        {/* Popover Content #3 - Section 4*/}
        <div className={styles['header__popup-content-3__menu-item-group__container']}>
          <button> <IoSettingsOutline size={20} /> Settings </button>
        </div>
        {/* Popover Content #3 - Section 4*/}
        <div className={styles['header__popup-content-3__menu-item-group__container--border-none']}>
          <button> <AiOutlineQuestionCircle size={20} /> Help </button>
          <button> <MdOutlineFeedback size={20} /> Send feedback </button>
        </div>
      </div>
    </nav>
  );
}