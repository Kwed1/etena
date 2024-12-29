import footer_logo from '../../assets/footer/footer-logo.svg';
import footer_button_pixel_left from '../../assets/footer/footer-button-pixel-left.svg';
import footer_button_pixel_right from '../../assets/footer/footer-button-pixel-right.svg'
import footer_button_up from '../../assets/footer/footer-button-up.webp'
import footer_button_up_arrow from '../../assets/footer/footer-button-up-arrow.webp'
import footer_hero from '../../assets/footer/footer-hero.webp'
import footer_mountain_front from '../../assets/footer/footer-mountain-front.webp'
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useDeviceDetect, { DeviceType } from '../../hooks/useDeviceDetect';
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

    const {deviceType} = useDeviceDetect();

    useEffect(() => {

        if(!deviceType) return;

        const endpoint = deviceType === DeviceType.MOBILE ? 180 : 450;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.footer__trigger',
                start: '-=100 bottom',
                end: `${endpoint} center`,
                scrub: true,
            }
        })
        
        if(deviceType === DeviceType.TABLET) {
            tl.fromTo('.js-footer-logo', {x: '0', y: 400}, {y: -100, duration: 1})
            tl.to('.footer__up', {x: -70, duration: 3})
            tl.to('.js-footer-hero', {x: 60, duration: 3})
        } else if(deviceType === DeviceType.MOBILE) {
            tl.fromTo('.js-footer-logo', {x: 0, y: 400}, {y: -150, duration: 1})
            tl.fromTo('.footer__up', {x: -100, duration: 3}, {x: 0})
            tl.fromTo('.js-footer-hero', {x: 140, duration: 3}, {x: 40})
        } else {
            tl.fromTo('.js-footer-logo', {x: '-50%', y: 400}, {y: -250,scale: 1.2, duration: 1})
            tl.fromTo('.footer__up', {x: -300, duration: 3}, {x: -100})
            tl.to('.js-footer-hero', {x: -440, duration: 3})
        }

    }, [deviceType])

    return (
        <footer className="footer js-footer">
            <div className='footer__trigger'></div>
            <div className="footer__shadow-1"></div>
            <div className="footer__logo js-footer-logo">
                <img
                    className="js-scale"
                    src={footer_logo}
                    alt=""
                />
            </div>
            <div className="footer__mountain"></div>
            <a className="footer__up js-scroll-up js-scale" href="#">
                <div className="footer__up-pixel-left">
                    <img
                        className="js-dotted"
                        data-size="10"
                        src={footer_button_pixel_left}
                        alt=""
                    />
                </div>
                <div className="footer__up-pixel-right">
                    <img
                        className="js-dotted"
                        data-size="10"
                        src={footer_button_pixel_right}
                        alt=""
                    />
                </div>
                <img
                    className="footer__up-arrow"
                    src={footer_button_up_arrow}
                    alt=""
                />
                <img src={footer_button_up} alt="" />
            </a>
            <div className="footer__shadow-2"></div>
            <img
                className="footer__mountain-front"
                src={footer_mountain_front}
                alt=""
            />
            <div className="footer__hero js-footer-hero">
                <img
                    className="js-scale"
                    src={footer_hero}
                    alt=""
                />
            </div>
            <div className="footer__container footer__container--min js-footer-text">
                <div className="footer__title title-h1">
                    Begin Your Adventure in the World of Etena.
                </div>
                <div className="footer__buttons">
                    {" "}
                    <a className="footer__travel-js btn" href="#">
                        <span>Inferno magic travel</span>
                    </a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__container">
                    <div className="footer__copyright">
                        All Rights Reserved © ETENAlaB
                    </div>
                </div>
            </div>
        </footer>
    );
}
