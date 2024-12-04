import sun from '../../images/third-section/sun.webp';
import hero_center from '../../images/third-section/hero-center.webp'
import hero_center_stone from '../../images/third-section/hero-center-stone.webp'
import hero_center_shadow from '../../images/third-section/hero-center-shadow.webp'
import pixel_5 from '../../images/third-section/pixel-5.svg'
import pixel_2 from '../../images/third-section/pixel-2.svg'
import hero_left from '../../images/third-section/hero-left.webp'
import hero_left_stone1 from '../../images/third-section/hero-left-stone-1.webp'
import hero_left_stone2 from '../../images/third-section/hero-left-stone-2.webp'
import pixel_3 from '../../images/third-section/pixel-3.svg'
import pixel_4 from '../../images/third-section/pixel-4.svg'
import hero_right from '../../images/third-section/hero-right.webp'
import hero_right_stone1 from '../../images/third-section/hero-right-stone-1.webp'
import hero_right_stone2 from '../../images/third-section/hero-right-stone-2.webp'
import pixel_1 from '../../images/third-section/pixel-1.svg'
import pixel_6 from '../../images/third-section/pixel-6.svg'

export default function ThirdSection() {
    return (
        <div className="three-section js-three-section">
            <div className="three-section__trigger js-three-section-trigger"></div>

            <div className="three-section__bg">
                <div className="three-section__bg-city js-three-city"></div>
                <img
                    className="three-section__bg-sun js-three-sun"
                    src={sun}
                    alt=""
                />
            </div>

            <div className="three-section__container">
                <div className="three-section__hero-center js-three-hero-center">
                    <div className="three-section__hero-center-wrap">
                        <img
                            className="three-section__hero-center-main js-scale"
                            src={hero_center}
                            alt=""
                        />
                        <img
                            className="three-section__hero-center-stone"
                            src={hero_center_stone}
                            alt=""
                        />
                        <img
                            className="three-section__hero-center-shadow"
                            src={hero_center_shadow}
                            alt=""
                        />
                        <img
                            className="three-section__pixel-2 js-dotted"
                            src={pixel_2}
                            alt=""
                        />
                        <img
                            className="three-section__pixel-5 js-dotted"
                            src={pixel_5}
                            alt=""
                        />
                    </div>
                </div>
                <div className='three-section__hero-left js-three-hero-left'>
                    <div className="three-section__hero-left-wrap">
                        <img
                            className="three-section__hero-left-main js-scale"
                            src={hero_left}
                            alt=""
                        />
                        <img
                            className="three-section__hero-left-stone-1"
                            src={hero_left_stone1}
                            alt=""
                        />
                        <img
                            className="three-section__hero-left-stone-2"
                            src={hero_left_stone2}
                            alt=""
                        />
                        <img
                            className="three-section__pixel-3 js-dotted"
                            src={pixel_3}
                            alt=""
                        />
                        <img
                            className="three-section__pixel-3 js-dotted"
                            src={pixel_4}
                            alt=""
                        />
                    </div>
                </div>
                <div className='three-section__hero-right js-three-hero-right'>
                    <div className="three-section__hero-right-wrap">
                        <div className='three-section__hero-right-main'>
                            <img
                                className="js-scale"
                                src={hero_right}
                                alt=""
                            />
                        </div>
                        <img
                            className="three-section__hero-right-stone-1"
                            src={hero_right_stone1}
                            alt=""
                        />
                        <img
                            className="three-section__hero-right-stone-2"
                            src={hero_right_stone2}
                            alt=""
                        />
                        <img
                            className="three-section__pixel-1 js-dotted"
                            src={pixel_1}
                            alt=""
                        />
                        <img
                            className="three-section__pixel-6 js-dotted"
                            src={pixel_6}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
