import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import { useMedia } from 'react-media';
import imgSrc from '../../../assets/img/Intro/phone-frame.png'
import videoUrl from '../../../assets/video/aboutRealPeople.mp4'

function PhoneBlock() {
  const isSmallScreen = useMedia({query: "(max-width: 600px)"});
  const phoneRef = useRef(null)

  useEffect(() => {
    function intro() {
      const tl = gsap.timeline();

      tl.fromTo(phoneRef.current, {y: 200}, {y: 0, duration: 1})
      return tl;
    }

    function stopTrigger(){
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top top',
          end: '+=1000',
          pin: true,
          scrub: true
        }
      });
      tl.to(phoneRef.current, {scale: 1.2}, "+=0.2");
      tl.to('.introContainer', {backgroundColor: 'transparent', duration: 0.25}, '-=0.5')
      return tl;
    }

    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);

  }, [isSmallScreen])

  return (
    <div className="introPhoneBlack" ref={phoneRef}>
      <div className="introPhoneTemplate" style={{backgroundImage: `url(${imgSrc})`}}>
        <video 
        className="collageElement"
        playsInline
        webkit-playsInline
        autoPlay
        muted
        loop
        src={videoUrl}
        />
      </div>
    </div>
  )
}

export default PhoneBlock
