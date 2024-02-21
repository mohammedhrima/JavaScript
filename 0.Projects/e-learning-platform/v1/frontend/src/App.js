import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InternationalPrograms from "./pages/InternationalPrograms";
import NewProgram from "./pages/NewProgram";
import EditProgram from "./pages/EditProgram";
import { useSelector } from "react-redux";
import EditInfo from "./pages/EditInfo";
import Dashboard from "./pages/Dashboard";
import TestLevel from "./pages/TestLevelPage";
import NewTest from "./pages/NewTestPage";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      {/* <Header />*/}
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route
          path="international-programs"
          element={<InternationalPrograms />}
        />
        {user && (
          <>
            <Route path="test-level" element={<TestLevel />} />
            <Route path="account/:id" element={<EditInfo />} />
          </>
        )}
        {user && user.isAdmin && (
          <>
            <Route path="new-program" element={<NewProgram />} />
            <Route path="new-test" element={<NewTest />} />
            <Route path="edit-program/:id" element={<EditProgram />} />
            <Route path="dashboard" element={<Dashboard />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
