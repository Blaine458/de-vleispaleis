"use client";
import { useEffect, useState } from 'react';

export default function DebugScroll() {
  const [bodyStyles, setBodyStyles] = useState<any>({});

  useEffect(() => {
    const updateStyles = () => {
      const computedStyle = getComputedStyle(document.body);
      setBodyStyles({
        overflow: computedStyle.overflow,
        position: computedStyle.position,
        top: computedStyle.top,
        width: computedStyle.width,
        left: computedStyle.left,
        right: computedStyle.right,
        touchAction: computedStyle.touchAction,
        className: document.body.className,
      });
    };

    updateStyles();
    const interval = setInterval(updateStyles, 1000);

    return () => clearInterval(interval);
  }, []);

  const resetBody = () => {
    document.body.className = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.touchAction = '';
  };

  return (
    <div className="fixed top-4 left-4 bg-white p-4 border border-black z-[9999] text-xs">
      <h3 className="font-bold mb-2">Debug Scroll</h3>
      <div className="space-y-1">
        <div>Overflow: {bodyStyles.overflow}</div>
        <div>Position: {bodyStyles.position}</div>
        <div>Top: {bodyStyles.top}</div>
        <div>Width: {bodyStyles.width}</div>
        <div>Classes: {bodyStyles.className}</div>
      </div>
      <button 
        onClick={resetBody}
        className="mt-2 px-2 py-1 bg-red-500 text-white text-xs rounded"
      >
        Reset Body
      </button>
    </div>
  );
}
