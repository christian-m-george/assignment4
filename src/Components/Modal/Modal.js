import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const Modal = ({ username, setUsername, open, onClose }) => {
  const [formValue, setFormValue] = React.useState(username);
  return ReactDOM.createPortal(
    <>
      {open ? (
        <>
          <div className="overlay-style" onClick={onClose}></div>
          <CSSTransition
            in={open}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            <div className="modal-style">
              <form
                className="modal-form"
                onSubmit={() => {
                  setUsername(formValue);
                  onClose();
                  console.log("submit");
                }}
              >
                <label>You can change your username below</label>
                <input
                  type="text"
                  value={formValue}
                  style={{
                    width: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 5,
                  }}
                  onChange={(e) => {
                    setFormValue(e.target.value);
                    console.log(formValue);
                  }}
                ></input>
                <button
                  type="submit"
                  style={{
                    width: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 5,
                  }}
                >
                  Change username
                </button>
              </form>
            </div>
          </CSSTransition>
        </>
      ) : (
        <></>
      )}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
