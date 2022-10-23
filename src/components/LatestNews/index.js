import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { theme } from "../../utils";

const LatestNews = ({ navigate, news }) => {
  console.log('news data in latepost', news)
  return (
    <Box sx={{ height: '100vh', margin: 2 }}>
      <Typography variant='h5' fontWeight='bold' align='left' sx={{ margin: 2 }}>
        Latest News
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          news.data && news.data.map((dataNews, index) => (
            < Card sx={{ width: 270, margin: 2 }} key={index}>
              <CardActionArea onClick={() => navigate('/detailnews')}>
                <CardMedia
                  component="img"
                  height="180"
                  image={dataNews.image_url}
                  src={dataNews.image_url}
                  alt="green iguana"
                />
                <CardContent align="justify" sx={{ padding: 0, pt: 2, bgcolor: theme.palette.primary.light }} >
                  <Typography gutterBottom variant="body2" component="div" fontWeight='bold' color={theme.palette.primary.dark} >
                    {dataNews.title}
                  </Typography>
                  <Box sx={{ width: 160, padding: 0, margin: 0, justifyContent: 'space-between', display: 'flex', mt: 2 }}>
                    <Typography variant="caption" color={theme.palette.secondary.light} fontSize={12}>
                      {dataNews.published_at}
                    </Typography>
                    <Typography variant="caption" color={theme.palette.secondary.light} fontSize={12}>
                      {dataNews.source}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Box >
  );
}

export default LatestNews;
