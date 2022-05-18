import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import About from '../../Components/About/About';
import Resume from '../../Components/Resume/Resume';
import Contact from '../../Components/Contact/Contact';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Portfolio from '../../Components/Portfolio/Portfolio';
import data from '../../Data/resumeData.json';

export default function Homepage() {
    let resumeData = data;

    return (
        <div className="App">
            <Header data={resumeData.main} />
            <About data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Portfolio data={resumeData.portfolio} />
            <Testimonials data={resumeData.testimonials} />
            <Contact data={resumeData.main} />
            <Footer data={resumeData.main} />
        </div>
    );
}