import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import background from '../../assets/four-section/bg.webp'
import cloud_1 from "../../assets/four-section/cloud-1.webp"
import cloud_2 from "../../assets/four-section/cloud-2.webp"
import img_1 from "../../assets/four-section/img-1.webp"
import img_2 from "../../assets/four-section/img-2.webp"
import pexel_1 from "../../assets/four-section/pexel-1.svg"
import pexel_10 from "../../assets/four-section/pexel-10.svg"
import pexel_11 from "../../assets/four-section/pexel-11.svg"
import pexel_12 from "../../assets/four-section/pexel-12.svg"
import pexel_13 from "../../assets/four-section/pexel-13.svg"
import pexel_2 from "../../assets/four-section/pexel-2.svg"
import pexel_3 from "../../assets/four-section/pexel-3.svg"
import pexel_4 from "../../assets/four-section/pexel-4.svg"
import pexel_5 from "../../assets/four-section/pexel-5.svg"
import pexel_6 from "../../assets/four-section/pexel-6.svg"
import pexel_7 from "../../assets/four-section/pexel-7.svg"
import pexel_8 from "../../assets/four-section/pexel-8.svg"
import pexel_9 from "../../assets/four-section/pexel-9.svg"
import planet_1 from "../../assets/four-section/planet-1.webp"
import planet_2 from "../../assets/four-section/planet-2.webp"
import planet_3 from "../../assets/four-section/planet-3.webp"
import planet_4 from "../../assets/four-section/planet-4.png"
import stone from "../../assets/four-section/stone.webp"
import useDeviceDetect, { DeviceType } from "../../hooks/useDeviceDetect"

export default function FourSection() {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const {deviceType} = useDeviceDetect();

    
    useEffect(() => {
        if(!deviceType) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".js-four-section-trigger",
                start: `bottom +=100`,
                end: `+=${(7400 - 2513)} top`,
                pin: deviceType === DeviceType.MOBILE ? false : ".four-section",
                scrub: true,
                onUpdate: () => {
                    const pinSpacer = (document.querySelector(".four-section") as Element).parentNode as Element;
                    if (pinSpacer && pinSpacer.classList.contains("pin-spacer")) {
                      (pinSpacer as any).style.height = `${6800}px`;
                    }
                },
            },
        });

        if(deviceType === DeviceType.TABLET) {
            tl.fromTo('.js-four-story', {top: '300px'}, {top: '50px', scale: 1.2})
            tl.to('.js-four-cloud-1', {scale: 0.8}, '<0.1');
            tl.to('.four-section__img-main-1', {scale: 1.2}, '<0.1');
            tl.from('.js-four-contain-1', {y: 1000}).to('.js-four-contain-1', {y: 200}).to('.js-four-contain-1', {y: -1500}, '+=4')
            tl.from('.js-four-contain-2', {y: 1000}).to('.js-four-contain-2', {y: -500}).to('.js-four-contain-2', {y: -1500}, '+=4')
            tl.fromTo('.js-four-cloud-1', {y: 0}, {y: -1500}, '<0.2');
            tl.fromTo(
                '.js-four-contain-3',
                {position: 'absolute', y: 0, opacity: 0, visibility: 'hidden' },
                {y: '-390%', opacity: 1, visibility: 'visible', scale: 0.8, duration: 1 }
            ).to('.js-four-contain-3', { opacity: 0.5, visibility: 'visible', duration: 2 }, '+=1')
            tl.from('.js-four-cloud-2', {x: 0, y: 1000}, '<0.1').to('.js-four-cloud-2', {x: 150, y: -500}).to('.js-four-cloud-2', {x: 100, y: -1000})
            tl.to('.js-four-planet-1', {duration: 1, opacity: 0, y: '0%'}).to('.js-four-planet-1', {duration: 1, opacity: 0.5, y: '-400%'}).to('.js-four-planet-1', {duration: 1, opacity: 1, y: '-400%'}).to('.js-four-planet-1', {duration: 1, opacity: 0, y: '-1120%'}, '+=4');
            tl.to('.js-four-planet-2', {duration: 1, opacity: 0, y: '0%'}).to('.js-four-planet-2', {duration: 1, opacity: 0.5, y: '-400%'}).to('.js-four-planet-2', {duration: 1, opacity: 1, y: '-480%'}).to('.js-four-planet-2', {duration: 1, opacity: 0, y: '-1120%'}, '+=4');
            tl.to('.js-four-planet-3', {duration: 1, opacity: 0, y: '0%'}).to('.js-four-planet-3', {duration: 1, opacity: 0.5, y: '-400%'}).to('.js-four-planet-3', {duration: 1, opacity: 1, y: '-630%'}).to('.js-four-planet-3', {duration: 1, opacity: 0, y: '-1120%'}, '+=4');
            tl.to('.js-four-planet-4', {duration: 1, opacity: 0, y: '0%'}).to('.js-four-planet-4', {duration: 1, opacity: 0.5, y: '-400%'}).to('.js-four-planet-4', {duration: 1, opacity: 1, y: '-740%'}).to('.js-four-planet-4', {duration: 1, opacity: 0, y: '-1120%'}, '+=4');
        } else if(deviceType === DeviceType.MOBILE) {
            gsap.fromTo('.four-section__subtitle p', {opacity: 0}, {opacity: 1, duration: 3, scrollTrigger: {
                trigger: '.four-section__subtitle',
                start: 'top bottom',
                end: 'bottom top',
            }});
            gsap.fromTo('.four-section__planet-img--i1 img', {y: -70, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: '.four-section__planet-img--i1',
                start: '-=30 bottom',
                end: 'bottom top',
            }});
            gsap.fromTo('.four-section__planet-img--i2 img', {y: -70, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: '.four-section__planet-img--i2',
                start: '-=30 bottom',
                end: 'bottom top',
            }});
            gsap.fromTo('.four-section__planet-img--i3 img', {y: -70, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: '.four-section__planet-img--i3',
                start: '-=30 bottom',
                end: 'bottom top',
            }});
            gsap.fromTo('.four-section__planet-img--i4 img', {y: -70, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: '.four-section__planet-img--i4',
                start: '-=30 bottom',
                end: 'bottom top',
            }});
        } else {
            tl.fromTo('.js-four-story', {top: '300px'}, {top: '-500px'})
            tl.from('.js-four-contain-1', {y: 1000}).to('.js-four-contain-1', {y: 50}).to('.js-four-contain-1', {y: -1500}, '+=4')
            tl.from('.js-four-contain-2', {y: 1000}).to('.js-four-contain-2', {y: -570}).to('.js-four-contain-2', {y: -1500}, '+=4')
            tl.fromTo('.js-four-cloud-1', {y: 0}, {y: -1500}, '<0.2');
            tl.fromTo(
                '.js-four-contain-3',
                {y: '0%', opacity: 0, visibility: 'hidden' },
                {y: '-440%', opacity: 1, visibility: 'visible', duration: 1 }
            ).to('.js-four-contain-3', { opacity: 0.5, visibility: 'visible', duration: 2 }, '+=1')
            tl.from('.js-four-cloud-2', {x: 0, y: 1000}, '<0.1').to('.js-four-cloud-2', {x: 150, y: -500}).to('.js-four-cloud-2', {x: 100, y: -1000})
            tl.to('.js-four-planet-1', {duration: 1, opacity: 0, y: '0%'}).to('.js-four-planet-1', {duration: 1, opacity: 0.5, y: '-400%'}).to('.js-four-planet-1', {duration: 1, opacity: 1, y: '-520%'}).to('.js-four-planet-1', {duration: 1, opacity: 0, y: '-1120%'}, '+=4');
            tl.to('.js-four-planet-2', {duration: 1, opacity: 0, y: '0%'}).to('.js-four-planet-2', {duration: 1, opacity: 0.5, y: '-400%'}).to('.js-four-planet-2', {duration: 1, opacity: 1, y: '-520%'}).to('.js-four-planet-2', {duration: 1, opacity: 0, y: '-1120%'}, '+=4');
            tl.to('.js-four-planet-3', {duration: 1, opacity: 0, y: '0%'}).to('.js-four-planet-3', {duration: 1, opacity: 0.5, y: '-400%'}).to('.js-four-planet-3', {duration: 1, opacity: 1, y: '-520%'}).to('.js-four-planet-3', {duration: 1, opacity: 0, y: '-1120%'}, '+=4');
            tl.to('.js-four-planet-4', {duration: 1, opacity: 0, y: '0%'}).to('.js-four-planet-4', {duration: 1, opacity: 0.5, y: '-400%'}).to('.js-four-planet-4', {duration: 1, opacity: 1, y: '-520%'}).to('.js-four-planet-4', {duration: 1, opacity: 0, y: '-1120%'}, '+=4');
        }
    }, [deviceType]);

    const sectionStyle: React.CSSProperties = {
        position: 'relative',
        zIndex: 5,
        paddingTop: '200px',
        background: `url(${background}) 0 0/100% auto no-repeat #38231e`,
    };

    return (
        <div className="four-section js-four-section" ref={sectionRef} style={sectionStyle}>
            <img
                className="four-section__cloud-1 js-four-cloud-1"
                src={cloud_1}
                alt=""
            />
            <div className="js-four-section-trigger"></div>
            <div className="four-section__group four-section__group--g1 js-four-group-1">
                <div className="four-section__container four-section__container--s1">
                    <div className="four-section__story js-four-story">
                        Story
                    </div>
                    <div className="four-section__row js-four-contain-1">
                        <div className="four-section__img four-section__img--s1">
                            <div className="four-section__img-wrap js-four-img-1">
                                <div className="four-section__img-main-1">
                                    <img
                                        className="js-scale"
                                        src={img_1}
                                        alt=""
                                    />
                                </div>
                                <img
                                    className="four-section__pixel-1 js-dotted"
                                    src={pexel_1}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-2 js-dotted"
                                    src={pexel_2}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-3 js-dotted"
                                    src={pexel_3}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-4 js-dotted"
                                    src={pexel_4}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-5 js-dotted"
                                    src={pexel_5}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-6 js-dotted"
                                    src={pexel_6}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-7 js-dotted"
                                    src={pexel_7}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-8 js-dotted"
                                    src={pexel_8}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-9 js-dotted"
                                    src={pexel_9}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-10 js-dotted"
                                    src={pexel_10}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="four-section__info four-section__info--s1 js-scale">
                            <div className="four-section__title title-h1 js-four-title">
                                In the mystical realm of Etena, where the fabric
                                of reality is woven from the threads of Etena
                                Dust
                            </div>
                            <div className="four-section__text js-four-text-1">
                                <p>
                                    A pixelated essence vital for life itself,
                                    two ethereal species thrived: the enigmatic
                                    Angels and their counterparts, the Demons.
                                </p>
                                <p>
                                    Etena was a utopia, a testament to harmony
                                    and unity, until the fateful discovery that
                                    Etena Dust could be wielded for power beyond
                                    imagination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="four-section__group four-section__group--g2 js-four-group-2">
                <div className="four-section__container four-section__container--s2 js-four-contain-2">
                    <div className="four-section__row four-section__row-2">
                        <div className="four-section__img four-section__img--s2">
                            <div className="four-section__img-wrap js-four-img-2">
                                <img
                                    className="four-section__img-main js-scale"
                                    src={img_2}
                                    alt=""
                                />
                                <img
                                    className="four-section__img-stone js-dotted"
                                    data-size="150"
                                    src={stone}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-11 js-dotted"
                                    src={pexel_11}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-12 js-dotted"
                                    src={pexel_12}
                                    alt=""
                                />
                                <img
                                    className="four-section__pixel-13 js-dotted"
                                    src={pexel_13}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="four-section__info four-section__info--s2 js-scale">
                            <div className="four-section__text js-four-text-2">
                                <p>
                                    The peaceful coexistence was shattered.
                                    Angels and Demons, once allies in the
                                    stewardship of Etena, diverged on their
                                    philosophies of Etena Dust’s use.
                                </p>
                                <p>
                                    This divergence sparked a cataclysmic
                                    battle, scattering the inhabitants &
                                    consuming the Etena Dust to near extinction.
                                    The aftermath was a world fractured, its
                                    legendary inhabitants lost to myth, and the
                                    once abundant Etena Dust a rare relic of the
                                    past.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="four-section__cloud-2 js-four-cloud-2"
                    src={cloud_2}
                    alt=""
                />
            </div>
            <div className="four-section__group four-section__group--g3 js-four-group-3">
                <div className="four-section__container four-section__container--s3">
                    <div className="four-section__row js-four-contain-3">
                        <div className="four-section__info four-section__info--s3 js-scale">
                            <div className="four-section__subtitle js-four-subtitle">
                                <p>
                                    In the shadows of a world recovering from
                                    its own greed and violence, the Demons
                                    sensed a stirring, the faint whispers of
                                    Etena Dust rekindling.
                                </p>
                                <p>
                                    Amidst this resurgence, three clans of
                                    Demons emerged, ready to claim their stake
                                    in the rebirth of their world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="four-section__group four-section__group--g4 js-four-group-4">
                <div className="four-section__container four-section__container--s4 js-four-contain-4">
                    <div className="four-section__planets">
                        <div className="four-section__planet js-four-planet-1">
                            <div className="four-section__planet-img four-section__planet-img--i1 js-scale">
                                <img src={planet_1} alt="" />
                            </div>
                            <div className="four-section__planet-wrap">
                                <div className="four-section__planet-title title-h1">
                                    The Flameborn
                                </div>
                                <div className="four-section__planet-text">
                                    Masters of fire, embody the ferocity and
                                    unyielding power of volcanic eruptions.
                                    Their essence is one with the molten fury of
                                    Etena, a clan where passion and strength
                                    burn eternal.
                                </div>
                            </div>
                        </div>
                        <div className="four-section__planet js-four-planet-2">
                            <div className="four-section__planet-img four-section__planet-img--i2 js-scale">
                                <img src={planet_2} alt="" />
                            </div>
                            <div className="four-section__planet-wrap">
                                <div className="four-section__planet-title title-h1">
                                    The Voidwalkers
                                </div>
                                <div className="four-section__planet-text">
                                    Weavers of cosmic energies, embody the
                                    vastness and mystery of the universe. They
                                    navigate the space between stars, harnessing
                                    the celestial power to bend the fabric of
                                    reality itself.
                                </div>
                            </div>
                        </div>
                        <div className="four-section__planet js-four-planet-3">
                            <div className="four-section__planet-img four-section__planet-img--i3 js-scale">
                                <img src={planet_3} alt="" />
                            </div>
                            <div className="four-section__planet-wrap">
                                <div className="four-section__planet-title title-h1">
                                    The Tideseekers
                                </div>
                                <div className="four-section__planet-text">
                                    guardians of water, embody the depth and
                                    adaptability of the ocean. Their spirits
                                    flow with the grace and relentless force of
                                    the tides, a clan as nurturing as it is
                                    formidable.
                                </div>
                            </div>
                        </div>
                        <div className="four-section__planet js-four-planet-4">
                            <div className="four-section__planet-img four-section__planet-img--i4 js-scale">
                                <img src={planet_4} alt="" />
                            </div>
                            <div className="four-section__planet-wrap">
                                <div className="four-section__planet-title title-h1">
                                    The Tideseekers
                                </div>
                                <div className="four-section__planet-text">
                                    guardians of water, embody the depth and
                                    adaptability of the ocean. Their spirits
                                    flow with the grace and relentless force of
                                    the tides, a clan as nurturing as it is
                                    formidable.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
