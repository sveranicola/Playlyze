/* eslint-disable @next/next/no-img-element */
import {HomeViewBox, HeaderBox, LogoBox, TimeSelect, TimeButton, SliderBox } from './styled';
import {Button} from '@mui/material'
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
            <div key={data.id}>
              {data.name}
            </div>
          )
         })
        }

      </SliderBox>
    </HomeViewBox>
  );
}

export default HomeView;