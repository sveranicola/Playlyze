/* eslint-disable @next/next/no-img-element */
import {HomeViewBox, HeaderBox, LogoBox, TimeSelect, TimeButton, SliderBox } from './styled';
import Card from '../card/card';
import { useEffect } from 'react';

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
        {
         userTopDataMediumTerm?.items.map((data: any) => {
          return (
            <Card key={data.id} name={data.name} image={data.images[0].url} popularity={data.popularity} genre={data.genres}/>
          )
         })
        }
      </SliderBox>
    </HomeViewBox>
  );
}

export default HomeView;