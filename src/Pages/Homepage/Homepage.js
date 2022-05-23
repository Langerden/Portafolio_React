import React, { useState, useEffect } from "react";
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

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header
            data={actualResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
            setEditorMode={setEditorMode}
          />
          <About
            data={actualResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
          />
          <Resume
            data={actualResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
          />
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
        </>
      )}
    </div>
  );
}
