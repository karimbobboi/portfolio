"use client"

import React, { useEffect, useRef, memo, useState } from "react";
import { Gradient } from "./gradient.jsx";
import styles from "./Background.module.css";

let gradientInitialized = false;

const Background = memo(function Background() {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('Background mounted')
    if (!canvasRef.current) return;
    
    if (!gradientInitialized) {
      gradientRef.current = new Gradient();
      gradientRef.current.initGradient("#gradient-canvas");
      gradientInitialized = true;
      
      // add delay before showing gradient
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    } else {
      setIsVisible(true);
    }

    // cleanup function
    return () => {
      if (gradientRef.current) {
        gradientRef.current.pause();
        gradientRef.current.disconnect();
        gradientRef.current = null;
      }
    };
  }, []);

  return (
    <div className="rounded-md">
      <div className={'rounded-md ' + styles.blurOverlay} />
      <div className={`rounded-md ${styles.bgcontainer} ${isVisible ? styles.visible : ''}`}>
        <canvas 
          id="gradient-canvas"
          ref={canvasRef}
          className={styles.canvas}
        />
      </div>
    </div>
  );
});

export default Background;