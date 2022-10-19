import React from 'react';
import { Footer, HotTopicsNews, LatestNews, Navbar } from '../../components';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <HotTopicsNews />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default Dashboard;
