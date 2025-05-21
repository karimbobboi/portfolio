"use client"

import React, { useEffect, useRef, memo, useState } from "react";
import { Gradient } from "./gradient.jsx";
import styles from "./Background.module.css";

const Background = memo(function Background() {
  const gradientRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  let gradientInitialized = false;

  useEffect(() => {
    console.log("here")
    if (!gradientRef.current && !gradientInitialized) {
      gradientRef.current = new Gradient();
      gradientRef.current.initGradient("#gradient-canvas");
      gradientInitialized = true;
      // add delay before showing gradient
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }
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