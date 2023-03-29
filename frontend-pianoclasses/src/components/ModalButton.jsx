import React from "react";
import PropTypes from "prop-types";

const ModalButton = ({ onClick, children }) => {
  return (
    <button className="btnNav" onClick={onClick}>
      {children}
    </button>
  );
};

ModalButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalButton;




      