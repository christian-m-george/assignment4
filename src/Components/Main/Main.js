import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Main.css";

const Main = ({ username, setUsername }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="main">
        Click below to open a portal to alter your username!
        <button onClick={() => setIsOpen(!isOpen)} className="modal-button">
          Open Modal
        </button>
        <Modal
          username={username}
          setUsername={setUsername}
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </>
  );
};

export default Main;
