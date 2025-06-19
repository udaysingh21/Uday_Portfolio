"use client";

import { useEffect } from "react";
import AOS from "aos";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      offset: 120,
    });
  }, []);

  return null;
};

export default AOSInitializer;
