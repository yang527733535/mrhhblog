
import React, { useState } from 'react';
import styles from './index.less';
import { WeiboOutlined, WechatOutlined, GithubOutlined } from '@ant-design/icons';
import wechatimg from '../../../static/wechat.jpg'
import { Row, Col, Button, Tooltip, Modal } from 'antd';
import 'antd/dist/antd.css';
const Index = () => {
  const [] = useState(false);
  const [wechatModal, setwechatModal] = useState(false);
  return <div
    className={styles.mainContent}
  >

    <Modal
      footer={null}
      visible={wechatModal}
      onCancel={() => {
        setwechatModal(false)
      }}
      bodyStyle={{
        width: 500,
        // height: 800
      }}
    >
      <img
        style={{ width: '100%', }}
        src={wechatimg}></img>
    </Modal>
    <div className={styles.myCenter}>
      <Row
        className={styles.Row}
        gutter={[16, 16]}>
        <Col xs={24} md={24} lg={8} xl={6}>
          <div className={styles.leftContent}>
            <div className={styles.Userinfo}>
              <div className={styles.Userinfo_up}>
                <div className={styles.Userinfo_avatar}>
                  <img src='https://img.xiaoyou66.com/images/2020/02/20/tTSY.jpg'></img>
                </div>
              </div>
              <div className={styles.Userinfo_down}>
                <div className={styles.Userinfo_down_name}>
                  小灰灰1024
                </div>
                <div className={styles.Userinfo_down_desc} >
                  <div className={styles.myNum}>213</div>
                  <div>笔记数量</div>
                </div>
              </div>
              <div className={styles.Userinfobuttom}>
                <div className={styles.Userinfobuttom_item}>
                  <a target="_blank" href="https://weibo.com/5733094140/profile?rightmod=1&wvr=6&mod=personinfo">
                    <WeiboOutlined />
                  </a>

                </div>
                <div className={styles.Userinfobuttom_item}>
                  <Tooltip title={
                    <span>我的微信</span>
                  } >
                    <a
                      onClick={() => {
                        setwechatModal(true)
                      }}
                    >
                      <WechatOutlined />
                    </a>
                  </Tooltip>

                </div>
                <div className={styles.Userinfobuttom_item}>
                  <a target="_blank" href='https://space.bilibili.com/17343588'>
                    <img
                      style={{ width: 24, height: 24 }}
                      src='https://xiaoyou66.com/static/images/bilibili.png'
                    ></img>
                  </a>

                </div>

                <div className={styles.Userinfobuttom_item}>
                  <a target="_blank" href='https://github.com/yang527733535'>
                    <GithubOutlined />
                  </a>

                </div>

              </div>
            </div>


          </div>
        </Col>
        <Col xs={24} md={24} lg={8} xl={12}>
          <div className={styles.middleContent}>123</div>
        </Col>
        <Col xs={24} md={24} lg={8} xl={6}>
          <div className={styles.rigthContent}>123</div>
        </Col>
      </Row>
    </div>
  </div>
};
export default Index;