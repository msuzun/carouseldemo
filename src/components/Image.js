import React from 'react'
import '../app/global.css'
export const Image = ({image}) => {
  return (
    <img src={image} alt={`carousel-${image}`} />
  )
}
