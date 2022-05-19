import React, { useState } from 'react';
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

    const { email } = params;
    let resumeData = data;

    let resumeLS = JSON.parse(localStorage.getItem(email));
    if(resumeLS !== undefined && resumeLS !== null) {
        resumeData = resumeLS;
    }

    // resumeData = data2['asd@asd.asd']

    function saveData() {

    }
 
    function cancelEdition() {
 
    }

    return (
        <div className="App">
            <Header data={resumeData.main} editorMode={editorMode} setEditorMode={setEditorMode} />
            <About data={resumeData.main} editorMode={editorMode} />
            <Resume data={resumeData.resume} editorMode={editorMode} />
            <Portfolio data={resumeData.portfolio} editorMode={editorMode} />
            <Testimonials data={resumeData.testimonials} editorMode={editorMode} />
            <Contact data={resumeData} editorMode={editorMode} setEditorMode={setEditorMode} />
            <div className="row section-head">
            <div className="two columns header-col">
               <button type='button' onClick={saveData} >Guardar</button>
               <button type='button' onClick={cancelEdition}>Cancelar</button>
            </div>
         </div>
            <Footer data={resumeData.main} editorMode={editorMode} />
        </div>
    );
}