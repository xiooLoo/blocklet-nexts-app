"use client";

import React, { useEffect, useState } from "react";
import { RootLayout } from "@/layout";
import { MiButton } from "@/components";
import ParticlesBg from "particles-bg";

const HomePage = () => {
  const [rowHeight, setRowHeight] = useState(50);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRowHeight(Math.floor((window.innerHeight - 100) / 14));
    }
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setRowHeight(Math.floor((window.innerHeight - 100) / 14));
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  return (
    <RootLayout>
      <ParticlesBg type="circle" bg={true} />
      <MiButton>TODO: <br/>Home Page</MiButton>
    </RootLayout>
  );
};

export default HomePage;
