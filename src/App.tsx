import { useEffect, useLayoutEffect, useState } from "react"
import FirstSection from "./components/FirstSection"
import FiveSection from "./components/FiveSection"
import Footer from "./components/Footer"
import FourSection from "./components/FourSection"
import Header from "./components/Header"
import Loader from './components/Loader'
import ThreeSection from "./components/ThreeSection"

export default function App() {
    const [loading, setLoading] = useState<boolean>(true);

    useLayoutEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 400);
        }
    }, [loading]);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.height = "100%";


        const timer = setTimeout(() => {
            document.documentElement.style.overflow = "auto";
            document.documentElement.style.height = "auto";
        }, 2200);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <FirstSection />
                    <ThreeSection />
                    <FourSection />
                    <FiveSection />
                    <Footer />
                </>
            )}
        </>
    );
}
