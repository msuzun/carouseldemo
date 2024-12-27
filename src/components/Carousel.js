import React, { useState } from 'react'
import imageArray from '../data/data'
import { Image } from './Image';
import Buttons from './Buttons';
import '../app/global.css'
const Corousel = () => {
    const [count,setCount] = useState(0);
    const handlePrevClick = () => {
        setCount((prevCount) => (prevCount === 0 ? imageArray.length - 1 : prevCount - 1));
      };
    
      const handleNextClick = () => {
        setCount((prevCount) => (prevCount === imageArray.length - 1 ? 0 : prevCount + 1));
      };
  return (
    <div className="carousel-container">
        <Image image={imageArray[count]}/>
        <Buttons onPrevClick={handlePrevClick} onNextClick={handleNextClick}/>
    </div>
  )
}

export default Corousel