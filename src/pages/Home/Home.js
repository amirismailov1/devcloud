import React from 'react';
import FirstSection from "./FirstSection/FirstSection";
import Features from "./Features/Features";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";

const Home = () => {
    return (
        <div>
            <FirstSection/>
            <Features/>
            <Services/>
            <Projects/>
        </div>
    );
};

export default Home;