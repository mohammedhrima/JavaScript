import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./styles/TestLevelPage.css";
import axios from "../axios";
import { useState } from "react";

function TestLevel() {
  const user = useSelector((state) => state.user);
  const [TestArr, setTestArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/tests").then(({ data }) => {
      console.log("in useEffect");
      // console.log(data);
      setTestArr(data.map((elem) => ({ title: elem.title, _id: elem._id })));
    });
  }, []);
  console.log("-> ", TestArr);
  return (
    <div className="Testlevel">
      <Header />
      <div className="test-container">
        {TestArr.map(({ title, _id }) => (
          <div className="test">
            <div className="cover"></div>
            <h1>{title}</h1>
            {user &&
              (user.isAdmin ? (
                <button>Edit Test</button>
              ) : !user.paid.includes(_id) ? (
                <button>Start Test</button>
              ) : (
                ""
              ))}
          </div>
        ))}
      </div>
      <div>
        {user && user.isAdmin && (
          <button className="addtestbtn" onClick={() => navigate("/new-test")}>
            Add Test
          </button>
        )}
      </div>
    </div>
  );
}

export default TestLevel;
