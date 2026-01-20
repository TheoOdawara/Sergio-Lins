"use client";

import { useEffect } from "react";

export default function SkipToContent() {
  useEffect(() => {
    // Garantir que o foco seja visível ao usar Tab
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.body.classList.add("user-is-tabbing");
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove("user-is-tabbing");
    };

    window.addEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("keydown", handleFirstTab);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <a
      href="#main-content"
      className="sr-only fixed left-0 top-0 z-[9999] bg-gold px-6 py-3 font-semibold text-bg-black focus:not-sr-only focus:absolute"
    >
      Pular para o conteúdo principal
    </a>
  );
}
