import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import shadow from '../../assets/five-section/five-bg-shadow.png'
import cloud_1 from "../../assets/five-section/five-cloud-1.webp"
import cloud_2 from "../../assets/five-section/five-cloud-2.webp"
import cloud_3 from "../../assets/five-section/five-cloud-3.webp"
import cloud_4 from "../../assets/five-section/five-cloud-4.webp"
import cloud_5 from "../../assets/five-section/five-cloud-5.webp"
import img_2 from "../../assets/five-section/five-img2.webp"
import shadows from '../../assets/five-section/five-shadows.webp'

export default function FiveSection() {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".js-five-title",
                start: `top bottom`,
                end: `center 70%`,
                scrub: true,
            },
        });

        tl.from('.five-section__row', {y: 0, opacity: 0}).to('.five-section__row', {y: -200, opacity: 0.5, duration: 2}).to('.five-section__row', {y: -400, opacity: 1})
        tl.from('.five-section__img-main', {y: 50}).to('.five-section__img-main', {y: 100})

    }, []);

    return (
        <div className="five-section js-five-section">
            <div className="five-section__wrapper">
                <div className="five-section__container">
                    <div className="five-section__row js-scale">
                        <div className="five-section__title title-h1 js-five-title">
                            {" "}
                            <span className="js-scale2">
                                This NFT project, beginning with the vivid and
                                dynamic Demons of Etena, invites you to partake
                                in a saga of resurgence, power, and mystery.{" "}
                            </span>
                        </div>
                        <div className="five-section__text js-five-text">
                            <div className="js-scale2">
                                <p>
                                    The future of Etena hangs in the balance,
                                    its destiny intertwined with the revival of
                                    Etena Dust and the secrets it holds.
                                </p>
                                <p>
                                    Join the adventure, align with a clan, and
                                    be a part of the legend that shapes the
                                    destiny of Etena.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="five-section__img js-five-img">
                <img
                    className="five-section__img-cloud-1 js-five-cloud-1"
                    src={cloud_1}
                    alt=""
                />
                <img
                    className="five-section__img-cloud-2 js-five-cloud-2"
                    src={cloud_2}
                    alt=""
                />
                <img
                    className="five-section__img-cloud-3 js-five-cloud-3"
                    src={cloud_3}
                    alt=""
                />
                <img
                    className="five-section__img-cloud-4 js-five-cloud-4"
                    src={cloud_4}
                    alt=""
                />
                <img
                    className="five-section__img-cloud-5 js-five-cloud-5"
                    src={cloud_5}
                    alt=""
                />
                <img
                    className="five-section__img-main js-scale"
                    src={img_2}
                    alt=""
                />
                <div className="five-section__img-shadow">
                    <img
                        width={'100%'}
                        className="five-section__img-shadow-img"
                        src={shadow}
                        alt="" 
                    />
                </div>
                <div className="five-section__img-shadows">
                    <img
                        width={'100%'}
                        className="five-section__img-shadows-img"
                        src={shadows}
                        alt="" 
                    />
                </div>
            </div>
            <div className="js-five-section-trigger"></div>
        </div>
    );
}
