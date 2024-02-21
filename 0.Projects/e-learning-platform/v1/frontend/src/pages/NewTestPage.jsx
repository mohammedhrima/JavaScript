import React from "react";
import "./styles/NewTest.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useNewtestMutation } from "../services/appApi";
import { useSelector } from "react-redux";

//last update
function NewTest() {
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [qtn, setQtn] = useState([]);
  const [id, setId] = useState(1);
  const [file, setFile] = useState(".pdf");
  const [createTest, { error, isError, isLoading, isSuccess }] =
    useNewtestMutation();
  const AddQtn = () => {
    console.log("adding qtn");
    setQtn([
      ...qtn,
      {
        id: id,
        question: "",
        answers: [],
        right: 0,
      },
    ]);
    setId(id + 1);
  };

  const handleclique = () => {
    console.log("my list now ", qtn);
    console.log("type:", file);
  };

  const updateQuestion = (id, value) => {
    setQtn(
      qtn.map((elem) => (elem.id === id ? { ...elem, question: value } : elem))
    );
  };

  const AddAns = (id) => {
    setQtn((item) =>
      item.map((elem) =>
        elem.id === id ? { ...elem, answers: [...elem.answers, ""] } : elem
      )
    );
  };
  const updateAnswer = (id, index, value) => {
    setQtn(
      qtn.map((elem) =>
        elem.id === id
          ? {
              ...elem,
              answers: elem.answers.map((answer, i) =>
                i === index ? value : answer
              ),
            }
          : elem
      ) // console.log(elem);
    );
  };
  const setCorrect = (id, index) => {
    setQtn(
      qtn.map((elem) => (elem.id === id ? { ...elem, right: index } : elem))
    );
  };
  const save = () => {
    createTest({ title, tests: qtn, access_token: user.token }).then(
      ({ data }) => {
        console.log(data);
      }
    );
  };
  return (
    <div className="Newtest">
      <Header />
      <h1>Test Title</h1>
      <input
        type={"text"}
        className="testTitle"
        onChange={(e) => setTitle(e.target.value)}
      />
      {qtn.map(({ question, answers, id }) => (
        <div>
          <h2>Upload file</h2>
          <label className="selectfile">
            Select file...
            <input type={"file"} accept={file} />
          </label>
          <select
            id="filetype"
            onChange={(e) => setFile(e.target.value)}
            defaultValue={file}
          >
            <option value={".pdf"}>Pdf</option>
            <option value={".doc .docx"}>Word</option>
            <option value={".mp3"}>MP3</option>
            <option value={".mp4"}>MP4</option>
            <option value={".pptx ,.ppt"}>Power point</option>
          </select>
          <div className="qtns">
            <input
              type={"text"}
              defaultValue={question}
              onChange={(e) => updateQuestion(id, e.target.value)}
            />
          </div>
          <div className="ans_container">
            {answers.map((ans, index) => (
              <div className="ans">
                <input
                  type={"radio"}
                  name={id}
                  onChange={() => setCorrect(id, index + 1)}
                />
                <input
                  type={"text"}
                  defaultValue={ans}
                  id={index}
                  onChange={(e) => updateAnswer(id, index, e.target.value)}
                />
              </div>
            ))}
            <button className="addans" onClick={() => AddAns(id)}>
              <h3>+ Add Answer</h3>
            </button>
          </div>
        </div>
      ))}

      <button className="addqtn" onClick={() => AddQtn()}>
        <h3>+ Add Question</h3>
      </button>
      {/* <button onClick={() => handleclique()}>See update</button>*/}
      <button className="success" onClick={() => save()}>
        <h2>Save</h2>
      </button>
    </div>
  );
}

export default NewTest;
