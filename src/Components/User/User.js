import React, { useState, useRef } from "react";
// import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "./User.css";

const User = ({ username }) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div style={{ paddingTop: "2rem" }} className="main">
      {showButton && (
        <>
          Click the button to show your username with an animation!
          <button
            onClick={() => setShowMessage(true)}
            style={{ width: "20%", marginTop: 5, padding: 3 }}
          >
            Show Message
          </button>
        </>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div>
          <h3>your username is {username}</h3>
          <button
            onClick={() => setShowMessage(false)}
            style={{ width: "20%" }}
          >
            Close
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default User;
