import React, { useState, useRef, useEffect } from 'react'
import {gsap} from 'gsap'
import cn from 'classnames'
import { fundamentalSlides } from '../data'
import './Fundamental.scss'
import FeatureSlide from './FeatureSlide'

function RenderImages({activeFeatureIndex}) {
  return fundamentalSlides.map(({imageUrl}, index) => (
    <img className={cn({'as-primary': activeFeatureIndex === index})} 
      key={imageUrl}
      style={{backgroundImage: `url(${imageUrl})`}}
      alt=''
    />
  ))
}

function Fundamental() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);

  useEffect(() => {
  function stopTrigger() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: featureSlidesRightRef.current,
        start: 'top top',
        end: () => `+=${featureSliderRef.current.offsetHeight}`,
        scrub: true,
        pin: true,
      }
    });
    return tl;
  }
  const master = gsap.timeline();
  master.add(stopTrigger());
  }, [])

  return (
    <div className='fundamental' ref={featureSliderRef}>
      <div className="fundamentalLeft">
        {fundamentalSlides.map((feature, index) => (
          <FeatureSlide 
            updateActiveImage={setFeatureIndex}
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
      <div className="fundamentalRight" ref={featureSlidesRightRef}>
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  )
}

export default Fundamental
