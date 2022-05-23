import React, { useState, useEffect } from "react";
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
  var initialLoadData = getData(email);

  const [editorMode, setEditorMode] = useState(false);
  const [updatedResumeData, setUpdatedResumeData] = useState(initialLoadData);
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      setLoading(true);
      getData(email).then(function (response) {
        setUpdatedResumeData(response);
        setLoading(false);
      });
    },
    [email]
  );

  function saveData() {
    setEditorMode(false);
    setData(email, updatedResumeData);
  }

  function cancelEdition() {
    setUpdatedResumeData(initialLoadData);
    setEditorMode(false);
  }

  function deleteInfo() {
    deleteData(email);
    setUpdatedResumeData(initialLoadData);
    setEditorMode(false);
  }

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header
            data={updatedResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
            setEditorMode={setEditorMode}
          />
          <About
            data={updatedResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
          />
          <Resume
            data={updatedResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
          />
          <Portfolio
            data={updatedResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
          />
          <Testimonials
            data={updatedResumeData}
            setUpdatedResumeData={setUpdatedResumeData}
            editorMode={editorMode}
          />
          <Contact
            data={updatedResumeData}
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
          <Footer data={updatedResumeData} editorMode={editorMode} />
        </>
      )}
    </div>
  );
}
