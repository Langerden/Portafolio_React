import React, { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
import { useLocation } from "wouter";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import Resume from "../../Components/Resume/Resume";
import Contact from "../../Components/Contact/Contact";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Spinner from "../../Components/Spinner/Spinner";
import { getData, setData, deleteData } from "../../Services/DataServices";

export default function Homepage({ params }) {
  const { email } = params;

  const [editorMode, setEditorMode] = useState(false);
  const [actualResumeData, setActualResumeData] = useState({});
  const [updatedResumeData, setUpdatedResumeData] = useState({});
  const [loading, setLoading] = useState(true);

  const [path, pushLocation] = useLocation();

  useEffect(
    function () {
      setLoading(true);
      getData(email).then(function (response) {
        setActualResumeData(response);
        setLoading(false);
      });
    },
    [email]
  );

  function saveData() {
    setData(email, updatedResumeData);
    setActualResumeData(updatedResumeData)
    setEditorMode(false);
  }

  function cancelEdition() {
    setEditorMode(false);
  }

  function deleteInfo() {
    deleteData(email);
    pushLocation(`/login`);
  }

  function downloadCV() {
    html2pdf(document.getElementById("cv-to-download"), {
      filename: `Curriculum.pdf`,
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        orientation: "portrait",
        unit: "in",
        format: "A4",
        compressPDF: true,
        disableSmartShrinking: true,
        pagebreak: { mode: ["avoid-all"] },
      },
    });
  };

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Header
            data={actualResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
            setEditorMode={setEditorMode}
            downloadCV={downloadCV}
          />
          <div id="cv-to-download">
            <About
              data={actualResumeData}
              setUpdatedResumeData={setUpdatedResumeData}
              editorMode={editorMode}
              downloadCV={downloadCV}
            />
            <Resume
              data={actualResumeData}
              setUpdatedResumeData={setUpdatedResumeData}
              editorMode={editorMode}
            />
          </div>

          <Portfolio
            data={actualResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
          />
          <Testimonials
            data={actualResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
          />
          <Contact
            data={actualResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
          />
          {editorMode ? (
            <div className="button-grpup">
              <button className="new-button" type="button" onClick={saveData}>
                Guardar
              </button>
              <button className="new-button" type="button" onClick={cancelEdition}>
                Cancelar
              </button>
              <button className="new-button" type="button" onClick={deleteInfo}>
                Borrar mis datos
              </button>
            </div>
          ) : null}
          <Footer data={actualResumeData} editorMode={editorMode} />
        </div>
      )}
    </div>
  );
}
