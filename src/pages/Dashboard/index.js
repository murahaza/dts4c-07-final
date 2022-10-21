import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, HotTopicsNews, LatestNews, Navbar } from '../../components';


const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
        <HotTopicsNews navigate={navigate} />
        <LatestNews navigate={navigate} />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
