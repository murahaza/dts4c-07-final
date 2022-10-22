import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, HotTopicsNews, LatestNews, Navbar } from '../../components';

const Dashboard = () => {

  const navigate = useNavigate()
  const APINEWS = `https://api.thenewsapi.com/v1/news/top?api_token=kBCM5I16qNd0tibV4V4iDx4EhJeKnqs7pMcn8lBo&locale=us&limit=1`

  const [news, setNews] = useState([]);

  const getNews = async () => {
    await axios.get(APINEWS)
      .then((response) => {
        setNews(response.data)
      })
      .catch((error) => {
        if (error.response) {
          /* the request was made and the server responded
          with a status code that falls out of the range of 2xx */
          // console.log(error.response.data)
          console.log('error', error.response.data)
        }
      })
  }
  console.log('news', news)
  // console.log('news', news.data[0].image_url)

  useEffect(() => {
    getNews()
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
        <HotTopicsNews navigate={navigate} news={news} />
        <LatestNews navigate={navigate} newsTop={news} />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
