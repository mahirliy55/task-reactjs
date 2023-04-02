import React from "react";
import "./modal.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&amp;origin=http://example.com"
            frameborder="0"
            title="video"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Modal;
