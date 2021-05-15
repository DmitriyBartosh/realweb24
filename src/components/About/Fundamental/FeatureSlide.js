import React, { useEffect, useRef } from 'react'
import useOnScreen from '../../../hooks/useOnScreen'

function FeatureSlide({title, description, index, updateActiveImage}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if(onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage])


  return (
    <div className="fundamentalSlide" ref={ref}>
      <h3 className="fundamentalSlideTitle">{title}</h3>
      <p className="fundamentalSlideDescription">{description}</p>
    </div>
  )
}

export default FeatureSlide
