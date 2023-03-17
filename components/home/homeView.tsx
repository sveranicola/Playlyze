/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import {
  HomeViewBox,
  HeaderBox,
  LogoBox,
  ButtonCluster,
  CustomButton,
  GridBox,
} from './styled';
import Card from '../card/card';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { topArtist } from '../../types/data';

interface HomeViewProps {
  userTopDataAllTerm: topArtist;
  userTopDataMediumTerm: topArtist;
  userTopDataShortTerm: topArtist;
}

const HomeView = ({
  userTopDataAllTerm,
  userTopDataMediumTerm,
  userTopDataShortTerm,
}: HomeViewProps) => {
  const [term, setTerm] = useState<string>('all_time');
  const [sortBy, setSortBy] = useState<string>('none');

  const dataSelect = () => {
    if (term === 'all_time') {
      return userTopDataAllTerm.items;
    } else if (term === '6_months') {
      return userTopDataMediumTerm.items;
    } else {
      return userTopDataShortTerm.items;
    }
  };

  let currentData = dataSelect();

  const tempCurrentData = [...currentData];

  const filteredData =
    sortBy !== 'none'
      ? tempCurrentData.sort((a, b) => {
          if (sortBy === 'low_high') {
            if (a.popularity > b.popularity) return 1;
            if (b.popularity > a.popularity) return -1;
            return 0;
          } else if (sortBy === 'high_low') {
            if (a.popularity < b.popularity) return 1;
            if (b.popularity < a.popularity) return -1;
            return 0;
          }

          return 0;
        })
      : currentData;

  return (
    <HomeViewBox>
      <HeaderBox>
        <LogoBox>
          <img
            src='https://i.imgur.com/cm3Bn0p.png'
            alt='logo'
            style={{ height: '100%', width: '100%' }}
          />
        </LogoBox>
      </HeaderBox>
      <ButtonCluster>
        <CustomButton
          onClick={() => {
            setTerm('all_time');
          }}
          sx={{
            backgroundColor: term === 'all_time' ? '#7D82B8' : '#FBFBFB',
            color: term === 'all_time' ? '#FBFBFB' : '#7D82B8',
          }}
        >
          all time
        </CustomButton>
        <CustomButton
          onClick={() => {
            setTerm('6_months');
          }}
          sx={{
            backgroundColor: term === '6_months' ? '#7D82B8' : '#FBFBFB',
            color: term === '6_months' ? '#FBFBFB' : '#7D82B8',
          }}
        >
          6 months
        </CustomButton>
        <CustomButton
          onClick={() => {
            setTerm('4_months');
          }}
          sx={{
            backgroundColor: term === '4_months' ? '#7D82B8' : '#FBFBFB',
            color: term === '4_months' ? '#FBFBFB' : '#7D82B8',
          }}
        >
          4 weeks
        </CustomButton>
      </ButtonCluster>
      <ButtonCluster>
        <CustomButton
          onClick={() => {
            setSortBy('none');
          }}
          sx={{
            backgroundColor: sortBy === 'none' ? '#7D82B8' : '#FBFBFB',
            color: sortBy === 'none' ? '#FBFBFB' : '#7D82B8',
          }}
        >
          None
        </CustomButton>
        <CustomButton
          onClick={() => {
            setSortBy('low_high');
          }}
          sx={{
            backgroundColor: sortBy === 'low_high' ? '#7D82B8' : '#FBFBFB',
            color: sortBy === 'low_high' ? '#FBFBFB' : '#7D82B8',
          }}
        >
          Lowest to Highest
        </CustomButton>
        <CustomButton
          onClick={() => {
            setSortBy('high_low');
          }}
          sx={{
            backgroundColor: sortBy === 'high_low' ? '#7D82B8' : '#FBFBFB',
            color: sortBy === 'high_low' ? '#FBFBFB' : '#7D82B8',
          }}
        >
          Highest to Lowest
        </CustomButton>
      </ButtonCluster>
      <GridBox>
        <Grid container>
          {filteredData?.map((data: any) => {
            return (
              <Grid item xs={6} sm={4} md={3} lg={3} xl={2} key={data.id}>
                <Card
                  name={data.name}
                  image={data.images[0].url}
                  popularity={data.popularity}
                  genre={data.genres}
                />
              </Grid>
            );
          })}
        </Grid>
      </GridBox>
    </HomeViewBox>
  );
};

export default HomeView;
