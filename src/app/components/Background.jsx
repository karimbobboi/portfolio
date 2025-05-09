"use client"

import React, { useEffect } from "react";
import { Gradient } from "./gradient.jsx";

function Background() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <div 
        style={{ 
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          zIndex: -1
        }}
      />
      
      <div style={{ position: "fixed", height: "100vh", width: "100vw", zIndex: -2 }}>
        <canvas
          id="gradient-canvas"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            "--gradient-color-1": "#000000",
            "--gradient-color-2": "#0027A5",
            "--gradient-color-3": "#0027A5",
            "--gradient-color-4": "#CFAF63",
          }}
        />
      </div>
    </>
  );
}

export default Background;