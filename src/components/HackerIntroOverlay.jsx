import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ShieldCheck, Cpu } from 'lucide-react';

const TARGET_NAME = 'MOHAMMAD AMAAN BHAT';
const TARGET_SUBTITLE = 'FULL STACK DEVELOPER // ARCHITECT';
const GLYPHS = '01アイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEF0123456789!@#$%^&*<>[]{}/*';

export default function HackerIntroOverlay({ onComplete }) {
  const [displayedName, setDisplayedName] = useState('');
  const [displayedSub, setDisplayedSub] = useState('');
  const [commandText, setCommandText] = useState('');
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const hasFinishedRef = useRef(false);

  const finishIntro = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsFadingOut(true);
    setTimeout(() => {
      setIsCompleted(true);
      if (onComplete) onComplete();
    }, 600);
  };

  // Keyboard shortcut: ESC to skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        finishIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let timerId = null;
    let scrambleInterval = null;
    let subScrambleInterval = null;

    // Step 1: Rapid CLI command stream
    const fullCommand = 'root@friedayy:~$ ./decrypt_identity.sh --exec';
    let cmdIdx = 0;
    const typeCommand = () => {
      if (cmdIdx <= fullCommand.length) {
        setCommandText(fullCommand.slice(0, cmdIdx));
        cmdIdx += 2; // Fast 2-char chunks
        timerId = setTimeout(typeCommand, 12);
      } else {
        // Step 2: Start Name Decryption after brief pause
        timerId = setTimeout(startNameDecryption, 100);
      }
    };

    const startNameDecryption = () => {
      const targetLen = TARGET_NAME.length;
      let iteration = 0;
      const maxIterations = targetLen * 2.2;

      scrambleInterval = setInterval(() => {
        iteration += 1;
        const resolvedCount = Math.floor(iteration / 2.2);

        const currentScramble = TARGET_NAME.split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < resolvedCount) {
              return TARGET_NAME[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');

        setDisplayedName(currentScramble);

        if (iteration >= maxIterations) {
          clearInterval(scrambleInterval);
          setDisplayedName(TARGET_NAME);
          // Start Subtitle Decryption
          startSubDecryption();
        }
      }, 16);
    };

    const startSubDecryption = () => {
      const subLen = TARGET_SUBTITLE.length;
      let subIter = 0;
      const subMax = subLen * 1.5;

      subScrambleInterval = setInterval(() => {
        subIter += 1;
        const resolved = Math.floor(subIter / 1.5);

        const current = TARGET_SUBTITLE.split('')
          .map((c, i) => {
            if (c === ' ' || c === '/' || c === '-') return c;
            if (i < resolved) return TARGET_SUBTITLE[i];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');

        setDisplayedSub(current);

        if (subIter >= subMax) {
          clearInterval(subScrambleInterval);
          setDisplayedSub(TARGET_SUBTITLE);
          // Trigger Access Granted pulse
          setIsAccessGranted(true);
          // Finish and fade out
          timerId = setTimeout(finishIntro, 450);
        }
      }, 12);
    };

    typeCommand();

    return () => {
      if (timerId) clearTimeout(timerId);
      if (scrambleInterval) clearInterval(scrambleInterval);
      if (subScrambleInterval) clearInterval(subScrambleInterval);
    };
  }, []);

  if (isCompleted) return null;

  return (
    <div
      className={`hacker-intro-overlay ${isFadingOut ? 'fade-out' : ''}`}
      onClick={finishIntro}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio Decryption Intro"
    >
      {/* CRT Scanline & Grid Background */}
      <div className="hacker-intro-grid" />
      <div className="hacker-intro-scanlines" />
      <div className="hacker-intro-vignette" />

      {/* Cyber Corner HUD Brackets */}
      <div className="hacker-corner-bracket top-left">
        <span className="bracket-code">[ SYS_BOOT: 0x7FA9 ]</span>
      </div>
      <div className="hacker-corner-bracket top-right">
        <span className="bracket-code">[ SECURE_PORT: 443 ]</span>
      </div>
      <div className="hacker-corner-bracket bottom-left">
        <span className="bracket-code">[ PROTOCOL: QUANTUM_CIPHER ]</span>
      </div>
      <div className="hacker-corner-bracket bottom-right">
        <span className="bracket-code">[ PRESS ESC TO SKIP ]</span>
      </div>

      {/* Center Terminal Decryption Box */}
      <div className="hacker-intro-terminal">
        {/* Terminal Header */}
        <div className="hacker-terminal-top">
          <div className="hacker-top-dots">
            <span className="hdot red" />
            <span className="hdot yellow" />
            <span className="hdot green" />
          </div>
          <div className="hacker-top-title">
            <Terminal size={13} />
            <span>cipher_telemetry.sh</span>
          </div>
          <div className="hacker-top-status">
            <span className="hacker-live-dot" />
            <span>UPLINK LIVE</span>
          </div>
        </div>

        {/* Terminal Output Body */}
        <div className="hacker-terminal-body">
          <div className="hacker-cmd-row">
            <span className="hacker-prompt-arrow">&gt;</span>
            <span className="hacker-cmd-text">{commandText}</span>
            <span className="hacker-cursor" />
          </div>

          <div className="hacker-cipher-status">
            <Cpu size={14} className="hacker-cpu-icon" />
            <span>DECRYPTING NEURAL IDENTITY MATRIX:</span>
          </div>

          {/* Main Scrambled Name Display */}
          <div className="hacker-name-display-wrap">
            <h1 className={`hacker-name-text ${isAccessGranted ? 'locked' : 'scrambling'}`}>
              {displayedName || '-------------------'}
            </h1>
          </div>

          {/* Subtitle Role Decryption */}
          <div className="hacker-sub-display-wrap">
            <div className={`hacker-sub-text ${isAccessGranted ? 'locked' : ''}`}>
              {displayedSub || '-----------------------------'}
            </div>
          </div>

          {/* Access Granted Badge */}
          <div className={`hacker-access-pill ${isAccessGranted ? 'active' : ''}`}>
            <ShieldCheck size={16} />
            <span>ACCESS GRANTED // 200 OK</span>
          </div>
        </div>
      </div>

      {/* Skip Button Hint */}
      <button 
        type="button" 
        className="hacker-skip-btn" 
        onClick={(e) => {
          e.stopPropagation();
          finishIntro();
        }}
      >
        Skip Intro [ESC]
      </button>
    </div>
  );
}
