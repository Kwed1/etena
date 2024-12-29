import { useLayoutEffect, useState } from "react";
import FirstSection from "./components/FirstSection";
import FiveSection from "./components/FiveSection";
import Footer from "./components/Footer";
import FourSection from "./components/FourSection";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ThreeSection from "./components/ThreeSection";

export default function App() {
    const [loading, setLoading] = useState<boolean>(true);

    useLayoutEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 0);
        }
    }, [loading]);

    return (
        <>
            {/* {loading ? (
                <Loader />
            ) : ( */}
                <>
                    <Header />
                    <FirstSection />
                    <ThreeSection />
                    <FourSection />
                    <FiveSection />
                    <Footer />
                </>
             {/* )} */}
        </>
    );
}
