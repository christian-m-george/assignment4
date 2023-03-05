import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import User from "./Components/User/User";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import NavigationPanel from "./Components/Modal/Modal";

function App() {
  const [username, setUsername] = useState("default-user");
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route
            path={"/"}
            element={<Main username={username} setUsername={setUsername} />}
          />
          <Route exact path={"/user"} element={<User username={username} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
