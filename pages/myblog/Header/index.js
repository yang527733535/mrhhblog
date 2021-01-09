import React, { useState, useEffect } from 'react';
import styles from './index.less';
const Index = () => {
  const [] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header')
    let staringPoint

    header.addEventListener('mousemove', (e) => {
      //1进入就是中间
      let percentage = (e.clientX - staringPoint) / window.outerWidth + 0.5
      header.style.setProperty('--percentage', percentage)

    })

    header.addEventListener('mouseenter', (e) => {
      header.classList.add('moving')
      staringPoint = e.clientX
    })
    header.addEventListener('mouseout', (e) => {
      header.style.setProperty('--percentage', 0.5)
      header.classList.remove('moving')
    })


  }, [

  ])
  return <header
    className={styles.header}
  >
    <div className={styles.view}>
      <img
        className={styles.morning}
        src="https://assets.codepen.io/2002878/bilibili-winter-view-1.jpg" alt="" />
      <img
        className={styles.afternoon}
        src="https://assets.codepen.io/2002878/bilibili-winter-view-2.jpg" alt="" />
      <video
        className={styles.evening}
        autoPlay loop muted
      >
        <source src="https://assets.codepen.io/2002878/bilibili-winter-view-3.webm" type="video/webm" />
      </video>
      <img src="https://assets.codepen.io/2002878/bilibili-winter-view-3-snow.png" alt="" />

    </div>
    <div className={styles.tree}>
      <img
        className={styles.morning}
        src="https://assets.codepen.io/2002878/bilibili-winter-tree-1.png" alt="" />
      <img
        className={styles.afternoon}
        src="https://assets.codepen.io/2002878/bilibili-winter-tree-2.png" alt="" />
      <img
        className={styles.evening}
        src="https://assets.codepen.io/2002878/bilibili-winter-tree-3.png" alt="" />
    </div>
  </header>
};
export default Index;