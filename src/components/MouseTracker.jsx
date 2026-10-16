import React, { useEffect, useState, useRef } from 'react';

export default function MouseTracker() {
  const squareRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse / trackpad)
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
    setHasMouse(true);

    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instant 1:1 synchronization with the cursor - strictly moves with the pointer
      if (squareRef.current) {
        squareRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Update background spotlight coordinates & 3D perspective tilt
      document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);

      const tiltX = ((mouseX / window.innerWidth) - 0.5) * 8;
      const tiltY = ((mouseY / window.innerHeight) - 0.5) * 8;
      document.documentElement.style.setProperty('--mouse-tilt-x', tiltX.toFixed(2));
      document.documentElement.style.setProperty('--mouse-tilt-y', tiltY.toFixed(2));

      // Detect hover on interactive elements vs text inputs
      const target = e.target;
      if (target instanceof Element) {
        const isInput = !!target.closest('input, textarea, [contenteditable="true"]');
        const isInteractive = !!target.closest(
          'a, button, [role="button"], select, .interactable, .pod-btn, .nav-cv-btn, .dock-item, .project-card, .gh-repo-card, .gh-milestone-card, .gh-sidebar-nav-btn, .now-card, .submit-btn, .gh-cta-btn'
        );
        setIsTextInput(isInput);
        setIsHovered(isInteractive && !isInput);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!hasMouse) return null;

  return (
    <div 
      className={`custom-cursor-container ${isVisible ? 'visible' : 'hidden'}`} 
      aria-hidden="true"
    >
      {/* Square cursor with 100% transparent center — no blur */}
      <div 
        ref={squareRef} 
        className={`custom-cursor-square ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''} ${isTextInput ? 'text-mode' : ''}`}
      >
        <span className="square-reticle corner-tl" />
        <span className="square-reticle corner-tr" />
        <span className="square-reticle corner-bl" />
        <span className="square-reticle corner-br" />
      </div>
    </div>
  );
}
