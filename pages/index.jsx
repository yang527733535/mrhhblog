import React from 'react';
import styles from './index.less';
import { useEffect } from 'react'
import { history } from 'umi'
import { Button } from 'antd'
export default () => {
  useEffect(() => {
    history.push("/myblog")
  }, [])
  return (
    <div>
      <Button>WERSEF</Button>
    </div>
  );
}
