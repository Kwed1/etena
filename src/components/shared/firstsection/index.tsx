import React from 'react'
import Logo from '../../images/EthenaFont.png'
import Tower from '../../images/Tower.png'

import FirstCloud from '../../images/first-cloud-1.png'
import FirstCloud1 from '../../images/first-cloud-2.png'
import FirstCloud2 from '../../images/first-cloud-3.png'

import FirstImg from '../../images/first-img-1.png'
import FirstImg2 from '../../images/first-img-2.png'
import FirstImg3 from '../../images/first-img-3.png'


import FirstPixel from '../../images/first-pexel-1.svg'
import FirstPixel2 from '../../images/first-pexel-2.svg'
import FirstPixel3 from '../../images/first-pexel-3.svg'
import FirstPixel4 from '../../images/first-pexel-4.svg'



interface FirstSectionProps {
  attributes?: React.HTMLProps<HTMLDivElement>;
}

const FirstSection: React.FC<FirstSectionProps> = ({ attributes }) => {
  return (
    <div className="first-section js-first-section" {...attributes}>
      <div className="first-section__container">
        <div className="first-section__pixels">
          <img src={FirstPixel} alt="" className="first-section__pixel-1 js-dotted" />
          <img src={FirstPixel2} alt="" className="first-section__pixel-2 js-dotted" />
          <img src={FirstPixel3} alt="" className="first-section__pixel-3 js-dotted" />
          <img src={FirstPixel4} alt="" className="first-section__pixel-4 js-dotted" />
          <img src={FirstPixel} alt="" className="first-section__pixel-1 js-dotted" />
          <img src={FirstPixel2} alt="" className="first-section__pixel-2 js-dotted" />
          <img src={FirstPixel3} alt="" className="first-section__pixel-3 js-dotted" />
          <img src={FirstPixel4} alt="" className="first-section__pixel-4 js-dotted" />
        </div>

        <div className="first-section__img-1">
          <img src={FirstImg} alt="" className="js-scale" />
        </div>
        <div className="first-section__img-2">
          <img src={FirstImg2} alt="" className="js-scale" />
        </div>
        <div className="first-section__img-3">
          <img src={FirstImg3} alt="" className="js-scale" />
        </div>

        <div className="first-section__shadows">
          <img src="images/first-shadow-1.svg" alt="" className="first-section__shadow-1" />
          <img src="images/first-shadow-2.svg" alt="" className="first-section__shadow-2" />
          <img src="images/first-shadow-3.svg" alt="" className="first-section__shadow-3" />
          <img src="images/first-shadow-4.svg" alt="" className="first-section__shadow-4" />
        </div>

        <div className="first-section__paradise">
          <img src={Tower} alt="" className="js-scale" />
        </div>

        <div className="first-section__logo">
          <img src={Logo} alt="" className="js-scale" />
        </div>

        <img src={FirstCloud} alt="" className="first-section__cloud-1" />
        <img src={FirstCloud1} alt="" className="first-section__cloud-2" />
        <img src={FirstCloud2} alt="" className="first-section__cloud-3" />
      </div>
      {/* Uncomment to include the two-section component */}
    </div>
  );
};

export default FirstSection;
