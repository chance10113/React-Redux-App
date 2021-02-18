// import styled components or something
import React, { useEffect } from "react";
import { connect } from "react-redux";

function display(props) {
  const { src, isFetching, error } = props;

  return <div className="container">
      
  </div>;
}

const mapStateToProps = (state) => {
  return {
    src: state.src,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(display);
