/* eslint-disable @next/next/no-img-element */
import { CardBox, CardImageBox, ArtistName, ArtistDetails } from './styled'

interface CardProps {
  name: string;
  image: string;
  popularity: number;
  genre: any;
}

const Card = ({name, image, popularity, genre}: CardProps) => {
  let genres = '';

  genre.forEach((type: string, index: number) => {
    if( index === genre.length -1 ) {
      genres += type;
    } else {
      genres += type + ', ';
    }
  });

  const findRarityBGColor = (popularity: number) => {
    if(60 <= popularity) {
      return '#E8EEF2'
    } else if (16 <= popularity && popularity <= 59) {
      return '#7D82B8'
    } else{
      return '#390099'
    }
  };

  const findRarityFontColor = (popularity: number) => {
    if(60 <= popularity) {
      return '#050401'
    } else {
      return '#FBFBFB'
    }
  };

  return (
    <CardBox sx={{ backgroundColor: findRarityBGColor(popularity)}}>
      <CardImageBox>
        <img src={image} alt='ArtistPicture' style={{ height: '100%',  width: '100%',   borderRadius: '15px', maxWidth: '280px',}}/>
      </CardImageBox>
      <ArtistName sx={{ color: findRarityFontColor(popularity)}}>{name}</ArtistName>
      <ArtistDetails sx={{ color: findRarityFontColor(popularity)}}>Genres : {genres}</ArtistDetails>
      <ArtistDetails sx={{ color: findRarityFontColor(popularity)}}>popularity : {popularity}</ArtistDetails>
    </CardBox>
  );
}

export default Card;