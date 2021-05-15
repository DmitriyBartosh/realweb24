import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './PhotoBlock.scss'
import simpleParallax from 'simple-parallax-js';

import ioneJpg from '../../../assets/img/photo/one.jpg'
import ioneWebp from '../../../assets/img/photo/one.webp'
import ioneJpgM from '../../../assets/img/photo/one-m.jpg'
import ioneWebpM from '../../../assets/img/photo/one-m.webp'

import itwoJpg from '../../../assets/img/photo/two.jpg'
import itwoWebp from '../../../assets/img/photo/two.webp'
import itwoJpgM from '../../../assets/img/photo/two-m.jpg'
import itwoWebpM from '../../../assets/img/photo/two-m.webp'

import ithreeJpg from '../../../assets/img/photo/three.jpg'
import ithreeWebp from '../../../assets/img/photo/three.webp'
import ithreeJpgM from '../../../assets/img/photo/three-m.jpg'
import ithreeWebpM from '../../../assets/img/photo/three-m.webp'

import ifourJpg from '../../../assets/img/photo/four.jpg'
import ifourWebp from '../../../assets/img/photo/four.webp'
import ifourJpgM from '../../../assets/img/photo/four-m.jpg'
import ifourWebpM from '../../../assets/img/photo/four-m.webp'

import ifiveJpg from '../../../assets/img/photo/five.jpg'
import ifiveWebp from '../../../assets/img/photo/five.webp'
import ifiveJpgM from '../../../assets/img/photo/five-m.jpg'
import ifiveWebpM from '../../../assets/img/photo/five-m.webp'

import isixJpg from '../../../assets/img/photo/six.jpg'
import isixWebp from '../../../assets/img/photo/six.webp'
import isixJpgM from '../../../assets/img/photo/six-m.jpg'
import isixWebpM from '../../../assets/img/photo/six-m.webp'


function PhotoBlock() {
  const photoRef = useRef(null);
  const photoFrontRef = useRef(null);
  const textRef = useRef(null);

  const photoOne = useRef(null);
  const photoTwo = useRef(null);
  const photoThree = useRef(null);
  const photoFour = useRef(null);
  const photoFive = useRef(null);
  const photoSix = useRef(null);

  useEffect(() => {  
  function stopTrigger(){
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: photoRef.current,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: true
      }
    });
    tl.to(photoFrontRef.current, {y: '100%'})
    tl.to(textRef.current, {scale: 1.1, opacity: 1}, '-=1');
    return tl;
  }
  
  const master = gsap.timeline();
    master.add(stopTrigger());

  new simpleParallax(photoOne.current, {
    scale: 1.2,
    orientation: "left",
  });
  new simpleParallax(photoTwo.current, {
    scale: 1.2,
    orientation: "right",
  });
  new simpleParallax(photoThree.current, {
    scale: 1.2,
    orientation: "left",
  });
  new simpleParallax(photoFour.current, {
    scale: 1.2,
    orientation: "right",
  });
  new simpleParallax(photoFive.current, {
    scale: 1.2,
    orientation: "left",
  });
  new simpleParallax(photoSix.current, {
    scale: 1.2,
    orientation: "right",
  });
  }, [])
  return (
    <>
    <div className="photo-section" ref={photoRef}>
      <div className="photo-info" ref={textRef}>
        <h2 className="photo-header">Фотографии</h2>
        <p className="photo-desc">важная часть успеха Вашего бренда</p>
      </div>
      <div className="photo-front" ref={photoFrontRef}/>
    </div>
    <div className="photo">
      <div className="photo-container">
        <div className="photo-block">
          <div className="img one-photo">
            <picture>
              <source srcSet={ioneWebpM} type="image/webp" media="(max-width: 992px)" />
              <source srcSet={ioneJpgM} type="image/jpg" media="(max-width: 992px)" />
              <source srcSet={ioneWebp} type="image/webp" />
              <source srcSet={ioneJpg} type="image/jpg"  />
              <img src={ioneJpg} alt="production" className="ione" ref={photoOne}/>
            </picture>
          </div>

          <div className="txt text-1">
            <h1>Фото продукции для каталога</h1>
          </div>
        </div>

        <div className="photo-block">
          <div className="txt text-2">
            <h1>Фото товаров для интернет-магазина</h1>
          </div>

          <div className="img two-photo">
            <picture>
              <source srcSet={itwoWebpM} type="image/webp" media="(max-width: 992px)" />
              <source srcSet={itwoJpgM} type="image/jpg" media="(max-width: 992px)" />
              <source srcSet={itwoWebp} type="image/webp" />
              <source srcSet={itwoJpg} type="image/jpg"  />
              <img src={itwoJpg} alt="shopPhoto" className="itwo" ref={photoTwo}/>
            </picture>
          </div>
        </div>

        <div className="photo-block">
          <div className="img three-photo">
            <picture>
              <source srcSet={ithreeWebpM} type="image/webp" media="(max-width: 992px)" />
              <source srcSet={ithreeJpgM} type="image/jpg" media="(max-width: 992px)" />
              <source srcSet={ithreeWebp} type="image/webp" />
              <source srcSet={ithreeJpg} type="image/jpg" />
              <img src={ithreeJpg} alt="objectPhoto" className="ithree" ref={photoThree}/>
            </picture>
          </div>

          <div className="txt text-3">
            <h1>Предметная съемка товаров для рекламы</h1>
          </div>
        </div>

        <div className="photo-block">
          <div className="txt text-4">
            <h1>Фотосъемка товаров для сайта</h1>
          </div>

          <div className="img four-photo">
            <picture>
              <source srcSet={ifourWebpM} type="image/webp" media="(max-width: 992px)" />
              <source srcSet={ifourJpgM} type="image/jpg" media="(max-width: 992px)" />
              <source srcSet={ifourWebp} type="image/webp" />
              <source srcSet={ifourJpg} type="image/jpg" />
              <img src={ifourJpg} alt="productPhoto" className="ifour" ref={photoFour}/>
            </picture>
            <img src="" className="ifour" alt="" />
          </div>
        </div>

        <div className="photo-block">
          <div className="img five-photo">
            <picture>
              <source srcSet={ifiveWebpM} type="image/webp" media="(max-width: 992px)" />
              <source srcSet={ifiveJpgM} type="image/jpg" media="(max-width: 992px)" />
              <source srcSet={ifiveWebp} type="image/webp" />
              <source srcSet={ifiveJpg} type="image/jpg" />
              <img src={ifiveJpg} alt="groupPhoto" className="ifive" ref={photoFive}/>
            </picture>
          </div>

          <div className="txt text-5">
            <h1>Портретная и групповая съемка</h1>
          </div>
        </div>

        <div className="photo-block">
          <div className="txt text-6">
            <h1>Обработка фото</h1>
          </div>

          <div className="img six-photo">
            <picture>
              <source srcSet={isixWebpM} type="image/webp" media="(max-width: 992px)" />
              <source srcSet={isixJpgM} type="image/jpg" media="(max-width: 992px)" />
              <source srcSet={isixWebp} type="image/webp" />
              <source srcSet={isixJpg} type="image/jpg" />
              <img src={isixJpg} alt="editPhoto" className="isix" ref={photoSix}/>
            </picture>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default PhotoBlock
