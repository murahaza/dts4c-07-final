import { Box, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { banner } from '../../assets';
import { theme } from '../../utils';

const HotTopicsNews = ({ navigate, news }) => {
  return (
    <Box sx={{ height: 'auto', margin: 2 }}>
      <Typography variant='h5' fontWeight='bold' align='left' sx={{ margin: 2 }}>
        Hot Topics News
      </Typography>

      <Box sx={{ display: 'flex', margin: 2 }} >

        <Card sx={{ dispaly: 'flex', maxWidth: 1000 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardActionArea sx={{ width: '100%', height: '100%' }} onClick={() => navigate('/detailnews')}>
              <CardMedia
                component='img'
                // image={news.data[0].image_url}
                image={banner}
                alt='banner picture'
                width={'100%'}
                height={'100%'}
              />
              <div style={{ zIndex: 100, position: 'absolute', left: 0, bottom: 0, width: 350, padding: 10 }}>
                <Typography fontSize={30} align='left' color={theme.palette.primary.light}>
                  {/* {news.data[0].title} */}
                  title
                </Typography>
                <Box sx={{ width: 160, padding: 0, margin: 0, justifyContent: 'space-between', display: 'flex', mt: 2 }}>
                  <Typography variant="caption" color={theme.palette.primary.main} fontSize={12}>
                    2 Haour Ago
                    {/* {news.data[0].published_at} */}
                  </Typography>
                  <Typography variant="caption" color={theme.palette.primary.main} fontSize={12}>
                    {/* {news.data[0].source} */}
                    author
                  </Typography>
                </Box>
              </div>
            </CardActionArea>
          </Box>
        </Card>

        <Box sx={{ width: 270, ml: 2, mt: 1, display: { xs: 'none', md: 'flex' } }} align='left' >
          <Typography variant="caption" color={theme.palette.primary.dark} fontSize={18}>
            Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more
          </Typography>
        </Box>
      </Box>
    </Box >
  );
}

export default HotTopicsNews;
