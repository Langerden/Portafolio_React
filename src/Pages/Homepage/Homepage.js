import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import About from '../../Components/About/About';
import Resume from '../../Components/Resume/Resume';
import Contact from '../../Components/Contact/Contact';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Portfolio from '../../Components/Portfolio/Portfolio';
import data from '../../Data/resumeData.json';
import data2 from '../../Data/json2.json';

export default function Homepage({ params }) {
    const [editorMode, setEditorMode] = useState(false);
    const [updatedResumeData, setUpdatedResumeData] = useState(data2);

    const { email } = params;

    useEffect(function () {
        updateFromLocalStoragerOrJson(data2)
    }, [email])

    function updateFromLocalStoragerOrJson() {
        let resumeLS = JSON.parse(localStorage.getItem(email));
        if (resumeLS !== undefined && resumeLS !== null) {
            setUpdatedResumeData(resumeLS);
        } else {
            setUpdatedResumeData(data2)
        }
    }

    function saveData() {
        setEditorMode(false)
        localStorage.setItem(email, JSON.stringify(updatedResumeData));
    }

    function cancelEdition() {
        updateFromLocalStoragerOrJson(data2);
        setEditorMode(false)
    }

    return (
        <div className="App">
            <Header data={updatedResumeData} setUpdatedResumeData={setUpdatedResumeData} editorMode={editorMode} setEditorMode={setEditorMode} />
            <About data={updatedResumeData} setUpdatedResumeData={setUpdatedResumeData} editorMode={editorMode} />
            {/* <Resume data={resumeData.resume} editorMode={editorMode} updatedResumeData={updatedResumeData} setUpdatedResumeData={setUpdatedResumeData} />
            <Portfolio data={resumeData.portfolio} editorMode={editorMode} updatedResumeData={updatedResumeData} setUpdatedResumeData={setUpdatedResumeData} />
            <Testimonials data={resumeData.testimonials} editorMode={editorMode} updatedResumeData={updatedResumeData} setUpdatedResumeData={setUpdatedResumeData} />
            <Contact data={resumeData.main} editorMode={editorMode} setEditorMode={setEditorMode} /> */}
            {editorMode ?
                <div className="row">
                    <button type='button' onClick={saveData} >Guardar</button>
                    <button type='button' onClick={cancelEdition}>Cancelar</button>
                </div>
                : null
            }
            {/* <Footer data={resumeData.main} editorMode={editorMode} /> */}
        </div>
    );
}