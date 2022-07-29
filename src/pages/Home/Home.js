import React from 'react';
import FirstSection from "./FirstSection/FirstSection";
import Features from "./Features/Features";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Process from "./Process/Process";
import Experience from "./Experience/Experience";

const Home = () => {
    return (
        <div>
            <FirstSection/>
            <Features/>
            <Services/>
            <Projects/>
            <Process/>
            <Experience/>
        </div>
    );
};

export default Home;