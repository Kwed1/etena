import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import "../../assets/three-section/bg.webp"
import city from '../../assets/three-section/bg.webp'
import hero_center_shadow from "../../assets/three-section/hero-center-shadow.webp"
import hero_center_stone from "../../assets/three-section/hero-center-stone.webp"
import hero_center from "../../assets/three-section/hero-center.webp"
import hero_left_stone_1 from "../../assets/three-section/hero-left-stone-1.webp"
import hero_left_stone_2 from "../../assets/three-section/hero-left-stone-2.webp"
import hero_left from "../../assets/three-section/hero-left.webp"
import hero_right_stone_1 from "../../assets/three-section/hero-right-stone-1.webp"
import hero_right_stone_2 from "../../assets/three-section/hero-right-stone-2.webp"
import hero_right from "../../assets/three-section/hero-right.webp"
import pixel_1 from "../../assets/three-section/pixel-1.svg"
import pixel_2 from "../../assets/three-section/pixel-2.svg"
import pixel_3 from "../../assets/three-section/pixel-3.svg"
import pixel_4 from "../../assets/three-section/pixel-4.svg"
import pixel_5 from "../../assets/three-section/pixel-5.svg"
import pixel_6 from "../../assets/three-section/pixel-6.svg"
import sun from "../../assets/three-section/sun.webp"
import useDeviceDetect, { DeviceType } from "../../hooks/useDeviceDetect"
import TwoSection from "../TwoSection"
gsap.registerPlugin(ScrollTrigger);

export default function ThreeSection() {

    const {deviceType} = useDeviceDetect()

    useEffect(() => {
        if (!deviceType) return;

        const endpoint = deviceType === DeviceType.MOBILE ? '-=150' : '400px';
        const startpoint = deviceType === DeviceType.MOBILE ? '-=700' : '-=800';

        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".js-three-section-trigger",
                start: `${startpoint} 100`,
                end: `${endpoint} top`,
                toggleActions: "restart none none none",
            },
        });

        const tlMob = gsap.timeline({
            scrollTrigger: {
                trigger: ".js-three-section-trigger",
                scrub: false,
                start: "-=300 100",
                end: `${endpoint} top`,
            },
        });

        if (deviceType === DeviceType.MOBILE) {
            tlMob.fromTo(
                ".three-section__bg-city",
                { y: 300, opacity: 1 },
                { y: 0, duration: 2, ease: "power2.out" }
            );
            tlMob.fromTo(
                ".three-section__bg-sun",
                { y: 3700, opacity: 0 },
                { x: 0, y: 0, opacity: 1, duration: 2, ease: "power2.out" }, '-=3'
            );
            tlMob.fromTo(
                ".three-section__hero-center",
                { y: 600, opacity: 0 },
                { x: -90, y: -100, opacity: 1, duration: 4, ease: "power2.out" }, '-=3'
            );
            tlMob.fromTo(
                ".three-section__hero-left",
                { x: -600, y: 600, opacity: 0 },
                { x: 0, y: 0, opacity: 1, duration: 3, ease: "power2.out" }, '-=3'
            );
            tlMob.fromTo(
                ".three-section__hero-right",
                { x: 600, y: 600, opacity: 0 },
                { x: 0, y: 0, opacity: 1, duration: 3, ease: "power2.out" }, '-=3'
            );
        } 

        else if (deviceType === DeviceType.TABLET) {
            tl.fromTo(
                ".three-section__bg-city",
                { y: 300, opacity: 0 },
                { y: 0, opacity: 1, duration: 4, ease: "power2.out" }
            );
            tl.fromTo(
                ".three-section__bg-sun",
                { y: 3700, opacity: 0 },
                { x: 0, y: 250, opacity: 1, scale: 1.6, duration: 3, ease: "power2.out" }
            );
            tl.fromTo(
                ".three-section__hero-center",
                { y: 600, opacity: 0 },
                { x: -180, y: -200, opacity: 1, duration: 4, ease: "power2.out" }
            );
            tl.fromTo(
                ".three-section__hero-left",
                { x: -600, y: 600, opacity: 0 },
                { x: 0, y: -100, opacity: 1, duration: 4, ease: "power2.out" }
            );
            tl.fromTo(
                ".three-section__hero-right",
                { x: 600, y: 600, opacity: 0 },
                { x: 80, y: -100, opacity: 1, duration: 4, ease: "power2.out" }
            );
        }

        else {
            tl.fromTo(
                ".three-section__bg-city",
                { y: 900, opacity: 0 },
                { y: 400, opacity: 4 },
            ).to(".three-section__bg-city", { y: 0, duration: 2 });
            tl.fromTo(
                ".three-section__bg-sun",
                { x: '100vw - 50%', y: 3700, opacity: 0 },
                { x: '100vw - 50%', y: -200, opacity: 2, duration: 1 },
                '-=2'
            );
            tl.fromTo(
                ".three-section__hero-center",
                { y: 600, opacity: 0 },
                { x: 0, y: -100, scale: 0.9, opacity: 2 },
                '-=1'
            );
            tl.fromTo(
                ".three-section__hero-left",
                { x: -600, y: 600, opacity: 0 },
                { x: 0, y: 150, scale: 0.9, opacity: 2 },
                '-=1'
            );
            tl.fromTo(
                ".three-section__hero-right",
                { x: 600, y: 600, opacity: 0 },
                { x: 30, y: 150, scale: 0.9, opacity: 2 },
                '-=1'
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, [deviceType]);
    return (
        <div className="three-section js-three-section">
            <TwoSection />
            <div className="js-three-section-trigger"></div>
            <div className="three-section__bg">
                <div className="three-section__bg-city js-three-city">
                    <img src={city} alt="" />
                </div>
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
                <div className="three-section__hero-left js-three-hero-left">
                    <div className="three-section__hero-left-wrap">
                        <img
                            className="three-section__hero-left-main js-scale"
                            src={hero_left}
                            alt=""
                        />
                        <img
                            className="three-section__hero-left-stone-1 js-dotted"
                            src={hero_left_stone_1}
                            alt=""
                        />
                        <img
                            className="three-section__hero-left-stone-2"
                            src={hero_left_stone_2}
                            alt=""
                        />
                        <img
                            className="three-section__pixel-3 js-dotted"
                            src={pixel_3}
                            alt=""
                        />
                        <img
                            className="three-section__pixel-4 js-dotted"
                            src={pixel_4}
                            alt=""
                        />
                    </div>
                </div>
                <div className="three-section__hero-right js-three-hero-right">
                    <div className="three-section__hero-right-wrap">
                        <div className="three-section__hero-right-main">
                            <img className="js-scale" src={hero_right} alt="" />
                        </div>
                        <img
                            className="three-section__hero-right-stone-1 js-dotted"
                            src={hero_right_stone_1}
                            alt=""
                        />
                        <img
                            className="three-section__hero-right-stone-2"
                            src={hero_right_stone_2}
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
