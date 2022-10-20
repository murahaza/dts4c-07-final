import { Box, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { banner } from '../../assets';
import { theme } from '../../utils';

const HotTopicsNews = () => {
  return (
    <Box sx={{ height: 'auto', margin: 2 }}>
      <Typography variant='h5' fontWeight='bold' align='left' sx={{ margin: 2 }}>
        Hot Topics News
      </Typography>
      <Box sx={{ display: 'flex', margin: 2 }} >

        <Card sx={{ dispaly: 'flex', maxWidth: 1000 }}>
          <Box square={true} sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardActionArea sx={{ width: '100%', height: '100%' }}>
              <CardMedia
                component='img'
                image={banner}
                alt='banner picture'
                width={'100%'}
                height={'100%'}
              />
              <div style={{ zIndex: 100, position: 'absolute', left: 0, bottom: 0, width: 350, padding: 10 }}>
                <Typography fontSize={30} align='left' color={theme.palette.primary.light}>
                  Massa tortor nibh nulla <br /> condimentum imperdiet <br />scelerisque...
                </Typography>
                <Box sx={{ width: 160, padding: 0, margin: 0, justifyContent: 'space-between', display: 'flex', mt: 2 }}>
                  <Typography variant="caption" color={theme.palette.primary.main} fontSize={12}>
                    2 Haour Ago
                  </Typography>
                  <Typography variant="caption" color={theme.palette.primary.main} fontSize={12}>
                    CNN Indonesia
                  </Typography>
                </Box>
              </div>
            </CardActionArea>
          </Box>
        </Card>

        {/* 
        <div style={{ maxWidth: '100vh', position: 'relative' }}>
          <img src={banner} alt="gambar" srcset={banner} style={{ maxwidth: '50%', height: 'auto', padding: 0, margin: 0, position: 'absolute', top: 0, left: 0 }} />
          <div style={{ zIndex: 100, position: 'absolute', color: 'white', left: 10, top: 200, bgcolor: 'red', width: 350, }}>
            <Typography fontSize={30} align='left'>Massa tortor nibh nulla <br /> condimentum imperdiet <br />scelerisque...</Typography>
            <Box sx={{ width: 160, padding: 0, margin: 0, justifyContent: 'space-between', display: 'flex', mt: 2 }}>
              <Typography variant="caption" color={theme.palette.primary.main} fontSize={12}>
                2 Haour Ago
              </Typography>
              <Typography variant="caption" color={theme.palette.primary.main} fontSize={12}>
                CNN Indonesia
              </Typography>
            </Box>
          </div>
        </div> */}


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
