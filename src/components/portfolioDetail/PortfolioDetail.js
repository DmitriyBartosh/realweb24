import React, { useEffect } from 'react'
import { useMedia } from 'react-media';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './PortfolioDetail.scss'

function PortfolioDetail(props) {
  const isSmallScreen = useMedia({ query: "(max-width: 600px)" });

  useEffect(() => {
    window.scrollTo(0, 0);
  },)

  return (
    <>
    <div className="sectionIntro" style={props.mainColor}>
      <div className="previewPortfolio">
          <LazyLoadImage 
          src={props.preview} 
          alt={props.title} 
          placeholderSrc={props.previewPlaceholder}
          effect="blur"
          />
      </div>

      <div className="sectionTitle" style={props.introTitle}>
        <p>{props.subtitle}</p>
        <h1>{props.title}</h1>
      </div>
    </div>
    <div className="sectionAbout">
      <div className="container-sm">
        <div className="services">
          <h2>Что делали?</h2>
          <p>{props.services}</p>
        </div>
        <div className="aboutProject">
          <h2>О проекте</h2>
          <p>{props.aboutProject}</p>
        </div>
      </div>
    </div>

    <div className="sectionPhotoStatic">
        <LazyLoadImage 
        src={props.img1} 
        placeholderSrc={props.img1Placeholder}
        effect="blur"
        alt="иллюстрация" 
        />
    </div>

    <div className="sectionIdea" style={props.colorIdea}>
      <div className="container-sm">
        <div className="idea">
          <h2>Идея:</h2>
          <p>{props.idea}</p>
        </div>
        <div className="ideaDescription">
          <p>{props.ideaDescription}</p>
        </div>
      </div>
      <div className="container-sm">
        <LazyLoadImage 
        src={props.ideaPhoto} 
        placeholderSrc={props.ideaPhotoPlaceholder}
        alt="Идея проекта" 
        effect="blur"
        />
      </div>

      <div className="sectionPhoto">
        <div className="container-sm">
          <LazyLoadImage 
          src={props.img2} 
          placeholderSrc={props.img2Placeholder}
          alt="иллюстрация" 
          effect="blur"
          />
          <LazyLoadImage 
          src={props.img3} 
          placeholderSrc={props.img3Placeholder}
          alt="иллюстрация" 
          effect="blur"
          />
        </div>
      </div>
    </div>

    <div className="sectionBackPhoto">
      <LazyLoadImage 
      src={isSmallScreen ? props.backPhotoMob : props.backPhoto} 
      alt="иллюстрация"
      visibleByDefault='true'
      />
    </div>

    <div className="sectionBrand">
      <div className="container-sm">
        <LazyLoadImage 
        src={props.brandLogo} 
        visibleByDefault='true'
        alt="Логотип"
        />
        <div className="brandInfo">
          <div className="brandSlogan">
            <h3>{props.brandSlogan}</h3>
          </div>
          <div className="brandDetail">
            <p>{props.brandDetail}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="sectionPhotoStatic">
      <LazyLoadImage 
      src={props.img4} 
      placeholderSrc={props.img4Placeholder}
      alt="иллюстрация" 
      effect="blur"
      />
    </div>
    </>
  )
}

export default PortfolioDetail
