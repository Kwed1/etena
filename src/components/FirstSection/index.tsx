import first_pexel1 from '../../assets/first-pexel-1.svg'
import first_pexel2 from '../../assets/first-pexel-2.svg'
import first_pexel3 from '../../assets/first-pexel-3.svg'
import first_pexel4 from '../../assets/first-pexel-4.svg'

import first_img1 from '../../assets/first-img-1.webp'
import first_img2 from '../../assets/first-img-2.webp'
import first_img3 from '../../assets/first-img-3.webp'

import first_shadow1 from '../../assets/first-shadow-1.svg'
import first_shadow2 from '../../assets/first-shadow-2.svg'
import first_shadow3 from '../../assets/first-shadow-3.svg'
import first_shadow4 from '../../assets/first-shadow-4.svg'

import first_paradise from '../../assets/first-paradise.webp';

import logo from '../../assets/first-logo.webp';

import first_cloud1 from '../../assets/first-cloud-1.webp'
import first_cloud2 from '../../assets/first-cloud-2.webp'
import first_cloud3 from '../../assets/first-cloud-3.webp'

import gsap from 'gsap'
import { useEffect } from 'react'
import useDeviceDetect, { DeviceType } from '../../hooks/useDeviceDetect'

export default function FirstSection() {

    const {deviceType} = useDeviceDetect();
    
    useEffect(() => {
        if(!deviceType) return;

        gsap.fromTo('.first-section__paradise img', {
            y: 300,
            scale: 0.5
        }, {y: 0, scale: 1, duration: 5, ease: 'power4.out'})

        gsap.fromTo(
            '.first-section__logo',
            {y: 300, opacity: 0},
            {y: 0, opacity: 1, duration: 1.5, ease: 'power2.out'}
        )
        gsap.fromTo(
            '.first-section__cloud-1',
            {x: 200, y: 300, opacity: 0},
            {x: 0, y: 0, opacity: 1, duration: 1.5, ease: 'power2.out'}
        )
        gsap.fromTo(
            '.first-section__cloud-2',
            {x: 200, y: 300, opacity: 0},
            {x: 0, y: 0, opacity: 1, duration: 1.5, ease: 'power2.out'}
        )
        gsap.fromTo(
            '.first-section__cloud-3',
            {x: -200, y: 300, opacity: 0},
            {x: 0, y: 0, opacity: 1, duration: 1.5, ease: 'power2.out'}
        )
        gsap.fromTo(
            '.first-section__img-1',
            {y: 300, opacity: 0},
            {y: 0, opacity: 1, duration: 2, ease: 'power2.out'}
        )
        gsap.fromTo(
            '.first-section__img-2',
            {y: 300, opacity: 0},
            {y: 0, opacity: 1, duration: 2, ease: 'power2.out'}
        )
        gsap.fromTo(
            '.first-section__img-3',
            {y: 300, opacity: 0},
            {y: 0, opacity: 1, duration: 2, ease: 'power2.out'}
        )
    }, [deviceType])

    return (
        <div className="first-section js-first-section">
            <div className="first-section__container">
                <div className="first-section__pixels">
                    <img
                        className="first-section__pixel-1 js-dotted"
                        src={first_pexel1}
                        alt=""
                    />
                    <img
                        className="first-section__pixel-2 js-dotted"
                        src={first_pexel2}
                        alt=""
                    />
                    <img
                        className="first-section__pixel-3 js-dotted"
                        src={first_pexel3}
                        alt=""
                    />
                    <img
                        className="first-section__pixel-4 js-dotted"
                        src={first_pexel4}
                        alt=""
                    />
                    <img
                        className="first-section__pixel-5 js-dotted"
                        src={first_pexel1}
                        alt=""
                    />
                    <img
                        className="first-section__pixel-6 js-dotted"
                        src={first_pexel2}
                        alt=""
                    />
                    <img
                        className="first-section__pixel-7 js-dotted"
                        src={first_pexel3}
                        alt=""
                    />
                    <img
                        className="first-section__pixel-8 js-dotted"
                        src={first_pexel4}
                        alt=""
                    />
                    <img
                        className="first-section__pixel js-dotted"
                        src={first_pexel1}
                        alt=""
                    />
                    <img
                        className="first-section__pixel js-dotted"
                        src={first_pexel2}
                        alt=""
                    />
                    <img
                        className="first-section__pixel js-dotted"
                        src={first_pexel3}
                        alt=""
                    />
                    <img
                        className="first-section__pixel js-dotted"
                        src={first_pexel4}
                        alt=""
                    />
                    <img
                        className="first-section__pixel js-dotted"
                        src={first_pexel1}
                        alt=""
                    />
                    <img
                        className="first-section__pixel js-dotted"
                        src={first_pexel2}
                        alt=""
                    />
                    <img
                        className="first-section__pixel js-dotted"
                        src={first_pexel3}
                        alt=""
                    />
                    <img
                        className="first-section__pixel js-dotted"
                        src={first_pexel4}
                        alt=""
                    />
                </div>
            </div>
            <div className="first-section__img-1">
                <img
                    className="js-scale"
                    src={first_img1}
                    alt=""
                />
            </div>
            <div className="first-section__img-2">
                <img
                    className="js-scale"
                    src={first_img2}
                    alt=""
                />
            </div>
            <div className="first-section__img-3">
                <img
                    className="js-scale"
                    src={first_img3}
                    alt=""
                />
            </div>
            <div className="first-section__shadows">
                <img
                    className="first-section__shadow-1"
                    src={first_shadow1}
                    alt=""
                />
                <img
                    className="first-section__shadow-2"
                    src={first_shadow2}
                    alt=""
                />
                <img
                    className="first-section__shadow-3"
                    src={first_shadow3}
                    alt=""
                />
                <img
                    className="first-section__shadow-4"
                    src={first_shadow4}
                    alt=""
                    style={{
                        display: deviceType === DeviceType.TABLET ? 'none' : 'block'
                    }}
                />
            </div>
            <div className="first-section__paradise">
                <img
                    className="js-scale"
                    src={first_paradise}
                    alt=""
                />
            </div>
            <div className="first-section__logo">
                <img className="js-scale" src={logo} alt="" />
            </div>
            <img
                className="first-section__cloud-1"
                src={first_cloud1}
                alt=""
            />
            <img
                className="first-section__cloud-2"
                src={first_cloud2}
                alt=""
            />
            <img
                className="first-section__cloud-3"
                src={first_cloud3}
                alt=""
            />
        </div>
    );
}
