import React from 'react'
import Header from '../components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import AdminProject from './AdminProject';
import { useSelector } from 'react-redux';
const { TabsPane } = Tabs;

function Admin() {
  const { portfoliodata } = useSelector(state => state.root);
  return (
    <div>
      <Header />
      {portfoliodata && <div className='mt-5 py-5 px-3 '>
        <Tabs defaultActiveKey="1">
          <TabsPane tab="Introduction" key="1">
            <div><AdminIntro /></div>
          </TabsPane>
          <TabsPane tab="About" key="2">
            <div><AdminAbout /></div>
          </TabsPane>
          <TabsPane tab="Projects" key="3">
            <div><AdminProject /></div>
          </TabsPane>
        </Tabs>
      </div>}
    </div>
  )
}

export default Admin;
