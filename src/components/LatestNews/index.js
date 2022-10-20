import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { theme } from "../../utils";

const news = [
  {
    id: 1,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    author: "CNN Indonesia",
    image: require(`../../assets/images/img1.png`)
  },
  {
    id: 2,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    author: "CNN Indonesia",
    image: require(`../../assets/images/img2.png`)
  },
  {
    id: 3,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    author: "CNN Indonesia",
    image: require(`../../assets/images/img3.png`)
  },
  {
    id: 4,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    author: "CNN Indonesia",
    image: require(`../../assets/images/img4.png`)
  },
  {
    id: 5,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    author: "CNN Indonesia",
    image: require(`../../assets/images/img5.png`)
  },
  {
    id: 6,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    author: "CNN Indonesia",
    image: require(`../../assets/images/img6.png`)
  },
  {
    id: 7,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    author: "CNN Indonesia",
    image: require(`../../assets/images/img7.png`)
  },
  {
    id: 8,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    author: "CNN Indonesia",
    image: require(`../../assets/images/img8.png`)
  }
]

const LatestNews = () => {
  console.log('news', news)
  return (
    <Box sx={{ height: '100vh', margin: 2 }}>
      <Typography variant='h5' fontWeight='bold' align='left' sx={{ margin: 2 }}>
        Latest News
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          news.map((data) => (
            <Card sx={{ width: 270, margin: 2 }} key={data.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={data.image}
                  src={data.image}
                  alt="green iguana"
                />
                <CardContent align="justify" sx={{ padding: 0, pt: 2, bgcolor: theme.palette.primary.light }} >
                  <Typography gutterBottom variant="body2" component="div" fontWeight='bold' color={theme.palette.primary.dark} >
                    {data.title}
                  </Typography>
                  <Box sx={{ width: 160, padding: 0, margin: 0, justifyContent: 'space-between', display: 'flex', mt: 2 }}>
                    <Typography variant="caption" color={theme.palette.secondary.light} fontSize={12}>
                      {data.time}
                    </Typography>
                    <Typography variant="caption" color={theme.palette.secondary.light} fontSize={12}>
                      {data.author}
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
