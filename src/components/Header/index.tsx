import logo_orange from "../../assets/logo-orange.svg";
import logo from "../../assets/logo.svg";
import Soc1 from "../Soc1";
import Soc2 from "../Soc2";
import Soc3 from "../Soc3";

export default function Header() {
    return (
        <header className="header js-header">
            <div className="header__container container">
                <div className="header__row">
                    <div className="header__logo">
                        <a href="/">
                            <img
                                className="header__logo-orange"
                                src={logo_orange}
                                alt="Etena"
                            />
                            <img
                                className="header__logo-white"
                                src={logo}
                                alt="Etena"
                            />
                        </a>
                    </div>
                    <div className="socials-block header__soc">
                        <a className="socials-block__icon" href="#">
                            <Soc1 className="icon icon_sprite-svg--soc-1" fill="white"/>
                        </a>
                        <a className="socials-block__icon" href="#">
                            <Soc2 className='icon icon_sprite-svg--soc-2' fill="white"/>
                        </a>
                        <a className="socials-block__icon" href="#">
                            <Soc3 className='icon icon_sprite-svg--soc-3' fill="white"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
