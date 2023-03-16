/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import {
  HomeViewBox,
  HeaderBox,
  LogoBox,
  TimeSelect,
  TimeButton,
  SliderBox,
} from './styled';
import Card from '../card/card';
import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid } from '@mui/material';

interface HomeViewProps {
  userTopDataAllTerm: any;
  userTopDataMediumTerm: any;
  userTopDataShortTerm: any;
}

const HomeView = ({
  userTopDataAllTerm,
  userTopDataMediumTerm,
  userTopDataShortTerm,
}: HomeViewProps) => {
  const [term, setTerm] = useState<string>('all_time');
  const [currentData, setCurrentData] = useState();

  useEffect(() => {
    setCurrentData(userTopDataAllTerm);
  }, [userTopDataAllTerm]);

  useEffect(() => {
    if (term === 'all_time') {
      setCurrentData(userTopDataAllTerm);
    } else if (term === '6_months') {
      setCurrentData(userTopDataMediumTerm);
    } else {
      setCurrentData(userTopDataShortTerm);
    }
  }, [term]);

  return (
    <HomeViewBox>
      <HeaderBox>
        <LogoBox>
          <img
            src='/playlyze-low-resolution-logo-color-on-transparent-background.png'
            alt='logo'
            style={{ height: '100%', width: '100%' }}
          />
        </LogoBox>
      </HeaderBox>
      <TimeSelect>
        <TimeButton
          onClick={() => {
            setTerm('all_time');
          }}
          sx={{
            backgroundColor: term === 'all_time' ? '#7D82B8' : '#FBFBFB',
            color: term === 'all_time' ? '#FBFBFB' : '#7D82B8',
          }}
        >
          all time
        </TimeButton>
        <TimeButton
          onClick={() => {
            setTerm('6_months');
          }}
          sx={{
            backgroundColor: term === '6_months' ? '#7D82B8' : '#FBFBFB',
            color: term === '6_months' ? '#FBFBFB' : '#7D82B8',
          }}
        >
          6 months
        </TimeButton>
        <TimeButton
          onClick={() => {
            setTerm('4_months');
          }}
          sx={{
            backgroundColor: term === '4_months' ? '#7D82B8' : '#FBFBFB',
            color: term === '4_months' ? '#FBFBFB' : '#7D82B8',
          }}
        >
          4 weeks
        </TimeButton>
      </TimeSelect>
      <SliderBox>
        <Grid container>
          {
            //@ts-ignore
            currentData?.items.map((data: any) => {
              return (
                <Grid xs={6} sm={4} md={3} lg={3} xl={2} key={data.id}>
                  <Card
                    name={data.name}
                    image={data.images[0].url}
                    popularity={data.popularity}
                    genre={data.genres}
                  />
                </Grid>
              );
            })
          }
        </Grid>
      </SliderBox>
    </HomeViewBox>
  );
};

export default HomeView;
