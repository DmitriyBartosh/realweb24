import React, { useEffect, useRef } from 'react'
import './AdaptiveBlock.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import macbook from '../../assets/img/adaptive/macbook.png'
import ipad from '../../assets/img/adaptive/ipad.png'
import iphone from '../../assets/img/adaptive/iphone.png'
import responsive from '../../assets/img/adaptive/macbookVideo.png'

import videoOgv from '../../assets/video/video.ogv'
import videoMp4 from '../../assets/video/video.mp4'
import videoWebm from '../../assets/video/video.webm'

function AdaptiveBlock() {
  const adaptive = useRef(null);
  const titleRef = useRef(null);
  const macRef = useRef(null);
  const ipadRef = useRef(null);
  const iphoneRef = useRef(null);
  const videoRef = useRef(null);
  const backRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tlResponsive = gsap
      .timeline()
      .from(titleRef.current, { y: -30, opacity: 0 })
      .to(titleRef.current, { y: 0, opacity: 0 })
      .from(macRef.current, { scaleX: 0.5, scaleY: 0.5, autoAlpha: 0 })
      .to(macRef.current, { x: "-30%" })
      .to(ipadRef.current, { x: "250px", opacity: 1 })
      .to(iphoneRef.current, { x: "470px", opacity: 1 }, "-=0.5")
      .to(iphoneRef.current, { x: "520px", opacity: 0 }, "+=0.5")
      .to(ipadRef.current, { x: "300px", opacity: 0 })
      .to(macRef.current, { x: "0%" })
      .from(videoRef.current, { autoAlpha: 0, opacity: 1 })
      .to(videoRef.current, { scaleX: 3.08, scaleY: 3.08 })
      .to(macRef.current, { scaleX: 3, scaleY: 3, autoAlpha: 1, duration: 2 }, "-=0.5")
      .from(backRef.current, { opacity: 0, autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: adaptive.current,
        animation: tlResponsive,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        start: "center center",
        end: "+=4000 center",
        scrub: 1,
      });
  })

  return (
    <div className="responsive" ref={adaptive}>
      <div className="black-opacity" ref={backRef}/>
      <h2 ref={titleRef}>Адаптивный дизайн</h2>
      <div className="responsive-device">
        
        <img src={ipad} alt="ipad" className="ipad-responsive" ref={ipadRef}/>
        <img src={macbook} alt="macbook" className="macbook-responsive" ref={macRef}/>
        <img src={iphone} alt="iphone" className="iphone-responsive" ref={iphoneRef}/>
        <div className="video-scale" ref={videoRef}>
          <img src={responsive} alt="responsive" className="responsive-img" />
          <video className="responsive-video" autoPlay muted loop>
            <source src={videoOgv} type='video/ogg;' />
            <source src={videoMp4} type='video/mp4;' />
            <source src={videoWebm} type='video/webm;' />
          </video>
        </div> 
      </div>
    </div>
  )
}

export default AdaptiveBlock
