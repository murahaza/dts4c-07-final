import React from 'react';
import { Footer, HotTopicsNews, LatestNews, Navbar } from '../../components';

const Dashboard = () => {



  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
        <HotTopicsNews />
        <LatestNews />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
