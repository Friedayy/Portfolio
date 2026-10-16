import React, { useEffect, useRef } from 'react';

export default function SiteBackdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    let targetScroll = window.scrollY || 0;
    let currentScroll = targetScroll;
    let time = 0;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleScroll = () => {
      targetScroll = window.scrollY || 0;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const render = () => {
      time += 0.008;
      currentScroll += (targetScroll - currentScroll) * 0.09;

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      // 1. Deep Obsidian Space base (#07090e) or Clean Porcelain White (#f8fafc)
      ctx.fillStyle = isLight ? '#f8fafc' : '#07090e';
      ctx.fillRect(0, 0, width, height);

      // 2. Midnight Nebula Aurora Mesh (Soft organic drifting light spheres)
      // Orb 1: Electric Indigo
      const orb1X = width * 0.45 + Math.sin(time * 0.7) * (width * 0.12);
      const orb1Y = height * 0.22 + Math.cos(time * 0.5) * (height * 0.08);
      const rad1 = Math.min(width, height) * 0.65;
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, rad1);
      grad1.addColorStop(0, isLight ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0.16)');
      grad1.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Orb 2: Luminous Cyan
      const orb2X = width * 0.72 + Math.cos(time * 0.6) * (width * 0.1);
      const orb2Y = height * 0.45 + Math.sin(time * 0.8) * (height * 0.1);
      const rad2 = Math.min(width, height) * 0.55;
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, rad2);
      grad2.addColorStop(0, isLight ? 'rgba(56, 189, 248, 0.07)' : 'rgba(56, 189, 248, 0.13)');
      grad2.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Orb 3: Deep Violet
      const orb3X = width * 0.2 + Math.sin(time * 0.9) * (width * 0.08);
      const orb3Y = height * 0.75 + Math.cos(time * 0.7) * (height * 0.12);
      const rad3 = Math.min(width, height) * 0.6;
      const grad3 = ctx.createRadialGradient(orb3X, orb3Y, 0, orb3X, orb3Y, rad3);
      grad3.addColorStop(0, isLight ? 'rgba(139, 92, 246, 0.05)' : 'rgba(139, 92, 246, 0.12)');
      grad3.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, width, height);

      // 3. Crisp Starry Micro-Dot Matrix with Silky Parallax
      const spacing = 28;
      const baseRadius = 0.9;
      const gridYOffset = -(currentScroll * 0.20) % spacing;

      ctx.fillStyle = isLight ? 'rgba(15, 23, 42, 0.12)' : 'rgba(255, 255, 255, 0.14)';
      ctx.beginPath();

      const startY = gridYOffset - spacing;
      const endY = height + spacing;
      const endX = width + spacing;

      for (let x = spacing / 2; x < endX; x += spacing) {
        for (let y = startY; y < endY; y += spacing) {
          ctx.moveTo(x + baseRadius, y);
          ctx.arc(x, y, baseRadius, 0, Math.PI * 2);
        }
      }
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="site-backdrop" aria-hidden="true">
      <canvas ref={canvasRef} className="site-backdrop__canvas" />
    </div>
  );
}
