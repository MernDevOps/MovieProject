import React from 'react';
import {Slider} from '../Slider';
import {Parallax} from '../Parallax';
import MovieSlider from '../MovieSlider';
import UpMovies from '../UpMovies';
import TopTen  from '../TopTen';
function Home() {
  return (
    <>
      <Slider />
      <MovieSlider/>
      <UpMovies/>
      <TopTen/>
      <Parallax />
      
    </>
  );
}

export default Home;
