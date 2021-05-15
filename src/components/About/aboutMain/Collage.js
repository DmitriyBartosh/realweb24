import React from 'react'
import { photos } from '../data'

function ImageElement({src}){
  return (
    <div className='introElement'>
      <img src={src} className='collageElement' alt=''/>
    </div>
  )
}

function Collage() {
  const leftImages = photos.slice(0,3);
  const rightImages = photos.slice(3, photos.length);

  return (
    <div className="introCollage">
      <div className="leftCollumn">
        {leftImages.map((src, index) => (
          <ImageElement src={src} key={index}/>
        ))}
      </div>
      <div className="rightCollumn">
        {rightImages.map((src, index) => (
          <ImageElement src={src} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Collage
