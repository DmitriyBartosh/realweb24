import React, {useRef, useEffect} from 'react'
import './intro.scss'
import { gsap } from 'gsap'
 
const services = ['Дизайн', 'Брендирование', '3D', 'Интерфейсы', 'Иллюстрации', 'Продвижение']

function Intro() {
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const skipRef = useRef(null);
  const rotaterRefs = useRef([]);
  rotaterRefs.current = [];

  const addToFers = (el) => {
    if(el && !rotaterRefs.current.includes(el)){
      rotaterRefs.current.push(el);
    }
  }

  const scrollStart = () => {
    document.documentElement.scrollIntoView(true);
  }

  const intro = gsap.timeline();
  const rotateText = gsap.timeline({defaults: { opacity: 0, ease: "elastic(0.5, 0.5)", autoAlpha: 0 }});

  const skipIntro = () => {
    rotateText.progress(1);
    intro.progress(0.78);
  }
  
  useEffect(() => {
    setTimeout(() => {
      intro
      .set([titleRef.current, subtitleRef.current], { 
        transformOrigin: "50% 50% -80",
      })
      .from([titleRef.current, subtitleRef.current], { 
        y: 100, ease: "elastic(0.2, 0.5)", 
        autoAlpha: 0,
        duration: 2, 
        skewY: 7,
        stagger: 0.5,
        delay: 0.5
      }, "<")
      .from(skipRef.current, {autoAlpha: 0, y: 5, duration: 1.5}, "-=1.5");

    rotateText
      .set(rotaterRefs.current, { 
        transformOrigin: "50% 50% -34",
      })
      .from(rotaterRefs.current, {
        rotationX: -90,
        rotationY: -45,
        opacity: 0,
        duration: 2,
        stagger: 1,
      })
      .to(rotaterRefs.current, {
        rotationX: 90,
        rotationY: 45,
        opacity: 0,
        duration: 1.7,
        stagger: 1 
      }, 0.8);

    intro
      .to([titleRef.current, subtitleRef.current], { 
        y: -150,
        opacity: 0,
        duration: 2, 
        stagger: 0.5
      }, "<4")
      .to(introRef.current, { 
        opacity: 0,
        duration: 0.5,
        autoAlpha: 0,
        onStart: scrollStart,
    }, "-=1.5")
      .fromTo(".introPhoneTemplate", {y: 300}, { y:0, duration: 1}, '-=0.75')
      .fromTo(".introElement", {y: 300}, { y:0, duration: 1, delay: function(index) {return 0.2 * index;} }, '-=1');
    }, 500);
  }, [intro, rotateText])

  return (
    <div className="intro-screen-wrapper" ref={introRef}>

      <div className="web-studios-wrapper">
        <h3 className="web-studios" ref={titleRef}>
          <span>R</span>eal A<span>r</span>t | Вебстудия
        </h3>
      </div>

      <div className="loader-text-wrap">
        {services.map((service) => 
          <div className="text-rotater" key={service.toString()} ref={addToFers}>
            <h2 className="threed-text">{service}</h2>
          </div>
        )}
      </div>

      <div className="web-studios-wrapper creative">
        <h2 className="web-studios creative" ref={subtitleRef}>
          Разработка. Бренд. Продвижение.
        </h2>
      </div>

      <p className="skip-intro" ref={skipRef} onClick={skipIntro}>пропустить</p>

    </div>
  )
}

export default Intro
