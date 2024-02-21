import React, { useEffect, useState } from "react";
import {
  useCreateIdiomMutation,
  useDeleteIdiomMutation,
} from "../services/appApi";
import axios from "../axios";
import "./IdiomsPage.css";
import { useSelector } from "react-redux";

function IdiomsPage() {
  const user = useSelector((state) => state.user);
  const [idioms, setIdioms] = useState([]);
  const [createIdiom, { isError, error, isSuccess, isLoading }] =
    useCreateIdiomMutation();
  const [textereaval, setTextereaval] = useState("");
  const [deleteIdiom, { isError1, isSuccess1, error1, isLoading1 }] =
    useDeleteIdiomMutation();

  function handleSubmit(e) {
    e.preventDefault();
    createIdiom({ newIdiom: textereaval });
    setTextereaval("");
  }
  useEffect(() => {
    axios.get("/idioms").then((res) => {
      //console.log(res.data);
      setIdioms(res.data.map((elem) => elem));
    });
  });
  //console.log(idioms);
  return (
    <form className="idioms_container" onSubmit={handleSubmit}>
      {user && user.isAdmin && (
        <>
          <textarea
            placeholder="type something..."
            onChange={(e) => setTextereaval(e.target.value)}
            value={textereaval}
          />
          <button type="submit">
            <h2>Add idiom</h2>
          </button>
        </>
      )}
      {idioms &&
        idioms.map((elem) => (
          <span className="idiom_">
            <p>{elem.idiom}</p>
            {user && user.isAdmin && (
              <span onClick={() => deleteIdiom(elem._id)}></span>
            )}
          </span>
        ))}
    </form>
  );
}

export default IdiomsPage;
