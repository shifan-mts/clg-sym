import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import animationLoader from "../assets/Price/animationLoader.json";
const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center transform  transition-transform duration-200">
      <Lottie
        loop
        animationData={animationLoader}
        play
        style={{ width: 400, height: 400 }}
      />
    </div>  
  );
};

export default Loader;
