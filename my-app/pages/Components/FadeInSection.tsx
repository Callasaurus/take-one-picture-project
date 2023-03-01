import React, { useState, useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export const FadeInSection: React.FC<Props> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const documentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
      });
    });
    if (documentRef.current) {
      observer.observe(documentRef.current);
    }
    return () => {
      if (documentRef.current) {
        observer.unobserve(documentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={documentRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;