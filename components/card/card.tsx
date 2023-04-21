/* eslint-disable @next/next/no-img-element */
import {
  CardBox,
  CardImageBox,
  ArtistName,
  ArtistDetails,
  SpotifyLogoBox,
} from './styled';
import { SpotifyLogo } from '../../public/spotifyLogo';
interface CardProps {
  name: string;
  image: string;
  popularity: number;
  genre: any;
  externalUrl: string;
}

const Card = ({ name, image, popularity, genre, externalUrl }: CardProps) => {
  let genres = '';

  genre.forEach((type: string, index: number) => {
    if (index === genre.length - 1) {
      genres += type;
    } else {
      genres += type + ', ';
    }
  });

  const findPopularity = (popularity: number) => {
    if (90 <= popularity) {
      return 'very popular';
    } else if (60 <= popularity && popularity <= 89) {
      return 'popular';
    } else if (16 <= popularity && popularity <= 59) {
      return 'under ground';
    } else {
      return 'so under ground are you sure about this?';
    }
  };

  const findRarityBGColor = (popularity: number) => {
    if (90 <= popularity) {
      return '#E8EEF2';
    } else if (60 <= popularity && popularity <= 89) {
      return '#7D82B8';
    } else if (16 <= popularity && popularity <= 59) {
      return '#390099';
    } else {
      return '#050401';
    }
  };

  const findRarityFontColor = (popularity: number) => {
    if (90 <= popularity) {
      return '#050401';
    } else {
      return '#FBFBFB';
    }
  };

  const linkToSpotifyArtist = () => {
    window.open(externalUrl, '_blank');
  };

  return (
    <CardBox sx={{ backgroundColor: findRarityBGColor(popularity) }}>
      <CardImageBox>
        <img
          src={image}
          alt='ArtistPicture'
          style={{
            height: '100%',
            width: '100%',
            aspectRatio: '3/4',
          }}
        />
      </CardImageBox>
      <ArtistName sx={{ color: findRarityFontColor(popularity) }}>
        {name}
      </ArtistName>
      <ArtistDetails sx={{ color: findRarityFontColor(popularity) }}>
        Genres : {genres}
      </ArtistDetails>
      <ArtistDetails sx={{ color: findRarityFontColor(popularity) }}>
        {findPopularity(popularity)}
      </ArtistDetails>
      <SpotifyLogoBox
        onClick={() => {
          linkToSpotifyArtist();
        }}
      >
        <SpotifyLogo />
      </SpotifyLogoBox>
    </CardBox>
  );
};

export default Card;
