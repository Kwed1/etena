import mount_right from '../../assets/two-section/mountain-right.webp'
import mount_left from '../../assets/two-section/mountain-left.webp'
import mount_back from '../../assets/two-section/mountain-back.webp'
import mounts_below from '../../assets/two-section/mountains-below.webp'
import shadow from '../../assets/two-section/shadow.webp'
import shadows from '../../assets/two-section/shadows2.webp'
import hero from '../../assets/two-section/hero.webp'
import { useEffect } from 'react'
import gsap from 'gsap'
import useDeviceDetect, { DeviceType } from '../../hooks/useDeviceDetect'

export default function TwoSection() {

    const {deviceType} = useDeviceDetect();
    const d = deviceType;

    useEffect(() => {
        gsap.fromTo(
            '.two-section',
            {y: 300, opacity: 0},
            {y: d === DeviceType.TABLET ? 0 : -100, opacity: 1, duration: 2, ease: 'power2.out'}
        )
    })

    return (
        <div className="two-section js-two-section">
            <div className="two-section__mright two-section__mright--hide-lg">
                <img src={mount_right} alt="" />
            </div>
            <div className="two-section__mleft two-section__mleft--hide-lg">
                <img src={mount_left} alt="" />
            </div>
            <div className="two-section__container">
                <img
                    className="two-section__shadow"
                    src={shadow}
                    alt=""
                />
                <div className="two-section__mright">
                    <img src={mount_right} alt="" />
                </div>
                <div className="two-section__mleft">
                    <img src={mount_left} alt="" />
                </div>
                <img
                    className="two-section__back"
                    src={mount_back}
                    alt=""
                />
            </div>
            <div className="two-section__hero">
                <img
                    className="js-scale"
                    src={hero}
                    alt=""
                />
            </div>
            <img
                className="two-section__below"
                src={mounts_below}
                alt=""
            />
            <div className="two-section__shadow2">
                <img src={shadows} alt="" />
            </div>
        </div>
    );
}
