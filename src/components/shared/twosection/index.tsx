import React from 'react'
import Hero from '../../images/two-section/hero.png'
import MountainBack from '../../images/two-section/mountain-back.png'
import MountainLeft from '../../images/two-section/mountain-left.png'
import MountainRight from '../../images/two-section/mountain-right.png'
import MountainsBelow from '../../images/two-section/mountains-below.png'
import Shadow from '../../images/two-section/shadow.png'
import Shadows2 from '../../images/two-section/shadows2.png'

interface TwoSectionProps {
  attributes?: React.HTMLProps<HTMLDivElement>;
}

const TwoSection: React.FC<TwoSectionProps> = ({ attributes }) => {
  return (
    <div className="two-section" {...attributes}>
      <div className="two-section__mright -hide-lg">
        <img src={MountainRight} alt="Mountain Right" />
      </div>
      <div className="two-section__mleft -hide-lg">
        <img src={MountainLeft} alt="Mountain Left" />
      </div>

      <div className="two-section__container">
        <img src={Shadow} alt="Shadow" className="two-section__shadow" />
        
        <div className="two-section__mright">
          <img src={MountainRight} alt="Mountain Right" />
        </div>
        <div className="two-section__mleft">
          <img src={MountainLeft} alt="Mountain Left" />
        </div>
        <img src={MountainBack} alt="Mountain Back" className="two-section__back" />
      </div>

      <div className="two-section__hero">
        <img src={Hero} alt="Hero" className="two-section__hero-img js-scale" />
      </div>
      <img src={MountainsBelow} alt="Mountains Below" className="two-section__below" />
      <div className="two-section__shadow2">
        <img src={Shadows2} alt="Shadows" />
      </div>
    </div>
  );
};

export default TwoSection;
