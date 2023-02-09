import React, { useState } from 'react';
import styles from './Watch.module.scss';

export default function Index() {
  const [activePopups, setActivePopups] = useState([false, false, false]);

  const handleButtonClick = (event) => {
    let newArr = [...activePopups];

    if(newArr.some((item, index) => (item === true && index !== Number(event.target.id)))){
      newArr = [false, false, false];
    } 

    newArr[event.target.id] = !newArr[event.target.id];
    setActivePopups(newArr);
  }

  return(
    <div className={styles['container__header-margin-top']}>
      <div className={styles['watch__container']}>
        <button id={0} onClick={handleButtonClick}> 
          Click me! 1st
        </button>
        <button id={1} onClick={handleButtonClick}> 
          Click me! 2nd
        </button>
        <button id={2} onClick={handleButtonClick}> 
          Click me! 3rd
        </button>

        {/* Popover Content #1 */}
        <div className={activePopups[0] === false ? styles['header__popup-content-1__container'] : styles['header__popup-content__container--hidden']}>
          <h1>
            Popup no. 1
          </h1>
        </div>

        {/* Popover Content #1 */}
        <div className={styles['header__popup-content-2__container']}>
          <h1>
            Popup no. 2
          </h1>
        </div>
        {/* Popover Content #1 */}
        <div className={styles['header__popup-content-3__container']}>
          <h1>
            Popup no. 3
          </h1>
        </div>

        <div>
          <h1> Random div </h1>
        </div>
      </div>
    </div>
  );
}