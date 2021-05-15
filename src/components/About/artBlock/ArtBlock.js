import React, {useRef, useEffect} from 'react'
import './ArtBlock.scss'
import lottie from 'lottie-web'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const artWords = ['Мы не внедряем дизайн как изобразительное искусство, а используем его как инструмент, который выведет Вас на новый уровень и сделает сайт запоминающимся.', 'Это позволит клиентам вспомнить ваши контакты и повторно к вам обратиться, посредственный сайт сломает этот мостик.'];

function ArtBlock() {
  const introBackgroundRef = useRef(null);
  const artRef = useRef(null);
  const wordRefs = useRef([]);
  wordRefs.current = [];

  const addToWords = (el) => {
    if(el && !wordRefs.current.includes(el)){
      wordRefs.current.push(el);
    }
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    lottie.loadAnimation({
      container: introBackgroundRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../assets/animation/flowers/data.json'),
      name: "flowers",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        progressiveLoad: true,
        hideOnTransparent: true,
      },
    })

    gsap.from(wordRefs.current, {
      scrollTrigger: {
        trigger: artRef.current,
        toggleActions: "play none none reset",
        start: "50% 50%",
        end: "+=1000px 50%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
      opacity: 0,
      stagger: 0.5,
      y: 30,
    });
  })

  return (
    <div className="art" ref={artRef}>
    <div className="introBackground" ref={introBackgroundRef}/>
      <h2 ref={addToWords}>Творчество. Стиль. Технологии.</h2>
      <p>
        {artWords.map((artWord) => 
          <span className="artWord" key={artWord.toString()} ref={addToWords}>{artWord}</span>
        )}
      </p>
    </div>
  )
}

export default ArtBlock
