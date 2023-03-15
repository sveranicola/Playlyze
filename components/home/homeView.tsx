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
        >
          all time
        </TimeButton>
        <TimeButton
          onClick={() => {
            setTerm('6_months');
          }}
        >
          6 months
        </TimeButton>
        <TimeButton
          onClick={() => {
            setTerm('4_months');
          }}
        >
          4 weeks
        </TimeButton>
      </TimeSelect>
      <SliderBox>
        {/* <Carousel
          centerMode={true}
          centerSlidePercentage={28}
          emulateTouch={true}
          showArrows={true}
          showStatus={false}
          useKeyboardArrows={true}
          showIndicators={false}
        >
        {
         currentData?.items.map((data: any) => {
          return (
            <Card key={data.id} name={data.name} image={data.images[0].url} popularity={data.popularity} genre={data.genres}/>
          )
         })
        }
        </Carousel> */}

        <Grid container>
          {
            //@ts-ignore
            currentData?.items.map((data: any) => {
              return (
                <Grid xs={3} key={data.id}>
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
