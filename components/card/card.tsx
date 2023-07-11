/* eslint-disable @next/next/no-img-element */
import {
  CardBox,
  CardImageBox,
  ArtistName,
  ArtistDetails,
  SpotifyLogoBox,
} from './styled';
interface CardProps {
  name: string;
  image: string;
  popularity: number;
  genre: any;
  externalUrl: string;
}

const Card = ({ name, image, popularity, genre, externalUrl }: CardProps) => {
  const grenreSelcetor = (genre: any) => {
    console.log(genre);
    let genres = '';

    for (let x = 0; x < 3; x++) {
      if (genre[x] !== undefined) {
        if (x === genre.length - 1 || x === 2) {
          genres += genre[x];
        } else {
          genres += genre[x] + ', ';
        }
      }
    }

    return genres;
  };

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
            aspectRatio: '1',
          }}
        />
      </CardImageBox>
      <ArtistName sx={{ color: findRarityFontColor(popularity) }}>
        {name}
      </ArtistName>
      <ArtistDetails sx={{ color: findRarityFontColor(popularity) }}>
        Genres : {grenreSelcetor(genre)}
      </ArtistDetails>
      <ArtistDetails sx={{ color: findRarityFontColor(popularity) }}>
        {findPopularity(popularity)}
      </ArtistDetails>
      <SpotifyLogoBox
        onClick={() => {
          linkToSpotifyArtist();
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z'
          />
        </svg>
      </SpotifyLogoBox>
    </CardBox>
  );
};

export default Card;
