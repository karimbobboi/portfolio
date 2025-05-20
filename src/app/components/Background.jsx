"use client"

import React, { useEffect, useRef, memo, useState } from "react";
import { Gradient } from "./gradient.jsx";
import styles from "./Background.module.css";

const Background = memo(function Background() {
  const gradientRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // function to cleanup gradient instance
    const cleanupFunction = () => {
      if (gradientRef.current) {
        gradientRef.current = null;
      }
    }

    if (!gradientRef.current) {
      gradientRef.current = new Gradient();
      gradientRef.current.initGradient("#gradient-canvas");
      
      // add delay before showing gradient
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }

    // run when component unmounts
    return cleanupFunction;
  }, []);

  return (
    <div className="rounded-md">
      <div className={'rounded-md ' + styles.blurOverlay} />
      <div className={`rounded-md ${styles.bgcontainer} ${isVisible ? styles.visible : ''}`}>
        <canvas 
          id="gradient-canvas"
          className={styles.canvas}
        />
      </div>
    </div>
  );
});

export default Background;