import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './IllustrationBlock.scss'

function IllustrationBlock() {
  const illustrationRef = useRef(null);
  const headerRef = useRef(null);
  const dinoRef = useRef(null);
  const busRef = useRef(null);

  const textLeftOne = useRef(null);
  const textLeftTwo = useRef(null);
  const textLeftThree = useRef(null);

  const textRightOne = useRef(null);
  const textRightTwo = useRef(null);
  const textRightThree = useRef(null);

  const photoRef = useRef(null);
  const photoFrontRef = useRef(null);
  
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    lottie.loadAnimation({
      container: dinoRef.current,
      animationData: require("../../../assets/animation/dino/data.json"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        progressiveLoad: true,
        hideOnTransparent: true,
      },
    });

    const busBack = lottie.loadAnimation({
      container: busRef.current,
      animationData: require("../../../assets/animation/bus-back/data.json"),
      renderer: "svg",
      loop: true,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        progressiveLoad: true,
        hideOnTransparent: true,
        className: "back-bus",
      },
    });

    const bus = lottie.loadAnimation({
      container: busRef.current,
      animationData: require("../../../assets/animation/bus/data.json"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        progressiveLoad: true,
        hideOnTransparent: true,
        className: "bus",
      },
    });

    const tlTextIllustration = gsap.timeline({defaults:{opacity: 0, ease: "power3.out", duration: 4}})
      .from(textLeftOne.current, {x: -10 })
      .from(textRightThree.current, {x: 10 }, "-=4")
      .to(textLeftOne.current, { x: -10 })
      .to(textRightThree.current, { x: 10 }, "-=4")
      .from(textLeftTwo.current, { x: -10 })
      .from(textRightTwo.current, { x: 10 }, "-=4")
      .to(textLeftTwo.current, { x: -10 })
      .to(textRightTwo.current, { x: 10 }, "-=4")
      .from(textLeftThree.current, { x: -10 })
      .from(textRightOne.current, { x: 10 }, "-=4")
      .to(textLeftThree.current, { x: -10 })
      .to(textRightOne.current, { x: 10 }, "-=4")
      .from(photoRef.current, { y: "100%", opacity: 1, duration: 10 })
      .to(photoFrontRef.current, { y: "100%", opacity: 1,  duration: 10 });

    const tlIllustration = gsap
      .timeline()
      .addPause(1)
      .to(".illustration-header", { scaleX: 200, scaleY: 200, ease: "power4.in", duration: 5, onStart: busIn, onReverseComplete: busIn })
      .to(".illustration-header", { autoAlpha: 0, onComplete: busOut })
      .addPause(20)
      .add(tlTextIllustration);

    ScrollTrigger.create({
      trigger: illustrationRef.current,
      animation: tlIllustration,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      start: "center center",
      end: "+=5000 center",
      scrub: 1,
    });

    function busOut() {
      bus.setSubframe(true);
      busBack.setSubframe(true);
      bus.goToAndPlay(1);
      busBack.goToAndPlay(1);
    }
    function busIn() {
      bus.goToAndStop(1);
      busBack.goToAndStop(1);
    }
  }, [])

  return (
    <div className="illustration" ref={illustrationRef}>
      <div className="background-bus" ref={busRef}>
        <div className="dino-dancer" ref={dinoRef} />
        <div className="illustration-info">
          <div className="illustrInfo-left">
            <h2 className="one" ref={textLeftOne}>уникальные</h2>
            <h2 className="two" ref={textLeftTwo}>креатив</h2>
            <h2 className="three" ref={textLeftThree}>яркий</h2>
          </div>
          <div className="illustrInfo-right">
            <h2 className="one" ref={textRightOne}>дизайн</h2>
            <h2 className="two" ref={textRightTwo}>стиль</h2>
            <h2 className="three" ref={textRightThree}>анимации</h2>
          </div>
        </div>
        <h2 className="illustration-header" ref={headerRef}>Иллюстрации</h2>
      </div>
      <div className="photo-section" ref={photoRef}>
        <h2 className="photo-header">Фотографии</h2>
        <div className="photo-front" ref={photoFrontRef}/>
      </div>
    </div>
  )
}

export default IllustrationBlock
