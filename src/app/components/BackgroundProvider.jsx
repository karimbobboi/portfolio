"use client"

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import Background from './Background';

const BackgroundContext = createContext(null);

export function BackgroundProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <BackgroundContext.Provider value={{ mounted }}>
      <div className="background-wrapper">
        <Background />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </BackgroundContext.Provider>
  );
}

export const useBackground = () => useContext(BackgroundContext);