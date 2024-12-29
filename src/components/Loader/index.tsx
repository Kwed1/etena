import loader from '../../assets/loader-bg.webp';
import loader1 from '../../assets/loader.webp';
import loader_bg from '../../assets/loader-bg222.svg'

export default function Loader() {
    return (
        <div className="loader-section js-loader">
            <img
                className="loader-section__bg1"
                src={loader}
                alt=""
            />
            <img
                className="loader-section__bg"
                src={loader1}
                alt=""
            />
            <div className="loader-section__wrapper">
                <div className="loader-section__img">
                    <div className="loader-section__img-wrapper js-loader-img">
                        <img width={1280} height={1280} src={loader_bg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
