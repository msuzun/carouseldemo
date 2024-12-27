import React from 'react'
import '../app/global.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Buttons = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="button-container">
      <button className="prev-button" onClick={onPrevClick}>
        <FaArrowLeft />
      </button>
      <button className="next-button" onClick={onNextClick}>
        <FaArrowRight />
      </button>
    </div>
  )
}

export default Buttons