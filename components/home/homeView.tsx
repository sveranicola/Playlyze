/* eslint-disable @next/next/no-img-element */
import {HomeViewBox, HeaderBox, LogoBox, TimeSelect, TimeButton, SliderBox } from './styled';
import Card from '../card/card';
import { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface HomeViewProps {
  userTopDataMediumTerm: any
}

const HomeView = ({userTopDataMediumTerm} : HomeViewProps) => {
  useEffect(() => {
    if(userTopDataMediumTerm) {
      console.log(userTopDataMediumTerm)
    }
  }, [userTopDataMediumTerm])

  return (
    <HomeViewBox >
      <HeaderBox>
        <LogoBox>
          <img src="/playlyze-low-resolution-logo-color-on-transparent-background.png" alt='logo' style={{ height: '100%', width: '100%'}}/>
        </LogoBox>
      </HeaderBox>
      <TimeSelect>
        <TimeButton>all time</TimeButton>
        <TimeButton>6 months</TimeButton>
        <TimeButton>4 weeks</TimeButton>
      </TimeSelect>
      <SliderBox>
        <Carousel
          centerMode={true}
          centerSlidePercentage={28}
          emulateTouch={true}
          showArrows={true}
          showStatus={false}
          useKeyboardArrows={true}
          showIndicators={false}
        >
        {
         userTopDataMediumTerm?.items.map((data: any) => {
          return (
            <Card key={data.id} name={data.name} image={data.images[0].url} popularity={data.popularity} genre={data.genres}/>
          )
         })
        }
        </Carousel>
      </SliderBox>
    </HomeViewBox>
  );
}

export default HomeView;