import React, { useState } from "react";
import './Landing.css';
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import NewsLetter from "./NewsLetter/NewsLetter";

const Landing= () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setVisible(true);
        } else if (scrolled <= 400) {
            setVisible(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <>
            <div className="landing">
                <Banner />
                <Feature />

                <NewsLetter />
            </div>
            <button style={{ border: "none" }} className={visible ? "gotoUp" : ""} onClick={scrollTop}>
                <i className="fas  fa-arrow-up"></i>
            </button>
        </>
    );
};

export default Landing;