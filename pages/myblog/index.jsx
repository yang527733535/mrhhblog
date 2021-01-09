import React, { useState, useEffect } from 'react';
import styles from './index.less';
import Header from './Header/index.js'
import Blog from './BlogMain/index.js'

const Index = () => {
  const [] = useState(false);

  useEffect(() => {

  })
  return <div
    id='myBody'
    style={{
      backgroundImage: "url(" + require("../../static/bg1.jpg") + ")"
    }}
    className={styles.myBody}
  >
    <Header></Header>
    <Blog></Blog>

  </div>

};
export default Index;