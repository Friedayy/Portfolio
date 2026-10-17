import React, { useEffect, useRef } from 'react';

/**
 * Curated digital glyphs: Matrix Katakana, binary, brackets, and arithmetic operators.
 * Curated for atmospheric depth rather than dense code walls.
 */
const MATRIX_CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>[]{}/\\=+-*~_|^:;';

export default function SiteBackdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animId = null;
    let isRunning = true;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let targetScroll = window.scrollY || 0;
    let currentScroll = targetScroll;

    let mouseX = width * 0.5;
    let mouseY = height * 0.3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Stream column geometry
    const fontSize = 14;
    const charSpacingY = 20;
    const columnSpacingX = 28; // Generous column spacing for a sparse, high-end feel

    let columns = [];

    const initColumns = () => {
      const colCount = Math.floor(width / columnSpacingX) + 1;
      columns = [];

      for (let i = 0; i < colCount; i++) {
        const x = i * columnSpacingX;
        const length = Math.floor(10 + Math.random() * 18); // 10 to 28 characters
        const speed = 0.8 + Math.random() * 1.6; // Smooth, relaxed flow (0.8 to 2.4 px/frame)
        
        // Stagger streams vertically across the viewport so rain is immediately present
        const y = Math.random() * (height + length * charSpacingY * 2) - (length * charSpacingY);
        
        // Sparsity control: ~55% of columns are active, creating clean breathing room
        const active = Math.random() > 0.45;

        // Generate characters for this stream
        const chars = [];
        for (let j = 0; j < length; j++) {
          chars.push(MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]);
        }

        columns.push({
          x,
          y,
          speed,
          length,
          chars,
          active,
          opacity: 0.35 + Math.random() * 0.55, // Subtle variation in stream intensity
          mutationInterval: 5 + Math.floor(Math.random() * 12)
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initColumns();

      if (prefersReducedMotion) {
        renderStatic();
      }
    };

    const handleScroll = () => {
      targetScroll = window.scrollY || 0;
    };

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        if (animId) cancelAnimationFrame(animId);
      } else {
        isRunning = true;
        if (!prefersReducedMotion) {
          lastFrameTime = performance.now();
          animId = requestAnimationFrame(render);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Static render for reduced-motion users
    const renderStatic = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      ctx.fillStyle = isLight ? '#f8fafc' : '#05070b';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `600 ${fontSize}px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < columns.length; i += 2) {
        const col = columns[i];
        if (!col.active) continue;

        for (let j = 0; j < col.length; j++) {
          const charY = (i * 47 + j * charSpacingY) % (height - 40) + 30;
          ctx.fillStyle = isLight ? 'rgba(5, 150, 105, 0.12)' : 'rgba(16, 185, 129, 0.18)';
          ctx.fillText(col.chars[j], col.x, charY);
        }
      }
    };

    let frameCount = 0;
    let lastFrameTime = performance.now();

    const render = (now) => {
      if (!isRunning) return;

      // Delta time check to maintain fluid 60fps across monitors
      const delta = Math.min((now - lastFrameTime) / 16.67, 2);
      lastFrameTime = now;
      frameCount++;

      // Smooth scroll parallax interpolation
      currentScroll += (targetScroll - currentScroll) * 0.08;
      const scrollDrift = -(currentScroll * 0.12);

      // Smooth mouse position damping
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      // 1. Deep Obsidian Void Base (#05070b) or Clean Porcelain White (#f8fafc)
      ctx.fillStyle = isLight ? '#f8fafc' : '#05070b';
      ctx.fillRect(0, 0, width, height);

      // 2. Atmospheric Ambient Glow (Subtle emerald mist around cursor and center)
      if (!isLight) {
        // Deep Emerald / Slate Ambience
        const ambientGrad = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          Math.max(width * 0.45, 380)
        );
        ambientGrad.addColorStop(0, 'rgba(16, 185, 129, 0.06)');
        ambientGrad.addColorStop(0.5, 'rgba(5, 150, 105, 0.02)');
        ambientGrad.addColorStop(1, 'rgba(5, 7, 11, 0)');
        ctx.fillStyle = ambientGrad;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Soft Mint Ambience in Light Mode
        const ambientLight = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          Math.max(width * 0.4, 340)
        );
        ambientLight.addColorStop(0, 'rgba(16, 185, 129, 0.04)');
        ambientLight.addColorStop(1, 'rgba(248, 250, 252, 0)');
        ctx.fillStyle = ambientLight;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Render Matrix Digital Rain Columns
      ctx.font = `600 ${fontSize}px 'JetBrains Mono', 'Fira Code', Consolas, monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];

        if (!col.active) {
          // Occasionally activate inactive columns when space opens up
          if (Math.random() < 0.005) {
            col.active = true;
            col.y = -col.length * charSpacingY - Math.random() * 60;
            col.speed = 0.8 + Math.random() * 1.6;
            col.opacity = 0.35 + Math.random() * 0.55;
          }
          continue;
        }

        // Advance stream vertical position
        col.y += col.speed * delta;

        // Subtle character mutation
        if (frameCount % col.mutationInterval === 0 && Math.random() < 0.35) {
          const randIdx = Math.floor(Math.random() * col.chars.length);
          col.chars[randIdx] = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        }

        // Draw character trail
        const streamHeadY = col.y + scrollDrift;

        for (let j = 0; j < col.length; j++) {
          const charY = streamHeadY - (j * charSpacingY);

          // Cull characters off-screen (above viewport or below viewport)
          if (charY < -20 || charY > height + 20) continue;

          const isHead = j === 0;
          const isNearHead = j === 1 || j === 2;
          const fadeProgress = (col.length - j) / col.length; // 1.0 at head down to ~0.05 at tail

          if (isLight) {
            // Light Theme: Elegant deep sage & emerald characters
            if (isHead) {
              ctx.fillStyle = `rgba(4, 120, 87, ${Math.min(col.opacity * 0.9, 0.85)})`;
            } else if (isNearHead) {
              ctx.fillStyle = `rgba(5, 150, 105, ${col.opacity * 0.65 * fadeProgress})`;
            } else {
              ctx.fillStyle = `rgba(16, 185, 129, ${col.opacity * (0.08 + 0.32 * fadeProgress)})`;
            }
          } else {
            // Dark Theme: Iconic subtle Matrix digital rain
            if (isHead) {
              // Glowing mint-white head
              ctx.fillStyle = `rgba(220, 252, 231, ${Math.min(col.opacity * 1.3, 0.98)})`;
              ctx.shadowColor = 'rgba(110, 231, 183, 0.85)';
              ctx.shadowBlur = 8;
            } else if (isNearHead) {
              // Bright emerald near head
              ctx.fillStyle = `rgba(52, 211, 153, ${Math.min(col.opacity * 0.95, 0.8)})`;
              ctx.shadowColor = 'rgba(16, 185, 129, 0.5)';
              ctx.shadowBlur = 4;
            } else {
              // Muted deep emerald / dark green fading into void
              const tailAlpha = col.opacity * (0.12 + 0.48 * Math.pow(fadeProgress, 1.2));
              ctx.fillStyle = `rgba(16, 185, 129, ${tailAlpha})`;
              ctx.shadowBlur = 0;
            }
          }

          ctx.fillText(col.chars[j], col.x, charY);
          ctx.shadowBlur = 0; // Reset shadow for next render
        }

        // Reset column to top once the tail has fully cleared the bottom of the screen
        const tailY = streamHeadY - (col.length * charSpacingY);
        if (tailY > height + 40) {
          col.y = -col.length * charSpacingY - Math.random() * 120;
          col.speed = 0.8 + Math.random() * 1.6;
          col.length = Math.floor(10 + Math.random() * 18);
          col.opacity = 0.35 + Math.random() * 0.55;
          col.active = Math.random() > 0.4; // 60% chance to cycle immediately, 40% pauses for breath
        }
      }

      animId = requestAnimationFrame(render);
    };

    if (prefersReducedMotion) {
      renderStatic();
    } else {
      animId = requestAnimationFrame(render);
    }

    return () => {
      isRunning = false;
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="site-backdrop" aria-hidden="true">
      <canvas ref={canvasRef} className="site-backdrop__canvas" />
    </div>
  );
}
