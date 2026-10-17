import React from 'react';

/**
 * High-fidelity, official brand logos for all programming languages, 
 * frameworks, tools, and technical skills used across the portfolio.
 */

// 1. React
export function ReactLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-11.5 -10.23174 23 20.46348"
      className={className}
      aria-label="React"
      role="img"
      {...props}
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// 2. JavaScript
export function JavaScriptLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="JavaScript"
      role="img"
      {...props}
    >
      <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
      <path
        d="M12.44 14.65c-.21-.35-.5-.62-.86-.82l.89-.96c.54.34.95.78 1.22 1.31.28.53.41 1.13.41 1.8 0 .86-.23 1.57-.69 2.14-.46.57-1.13.85-2 .85-.61 0-1.14-.14-1.59-.42-.45-.28-.79-.67-1.02-1.18l1.05-.69c.33.58.75.87 1.27.87.43 0 .78-.15 1.04-.45.26-.3.39-.72.39-1.27 0-.58-.14-1.04-.42-1.38-.28-.34-.67-.58-1.17-.73l-.93-.28c-.89-.27-1.56-.69-2-1.27-.45-.58-.67-1.32-.67-2.21 0-.91.27-1.67.8-2.27.53-.6 1.26-.9 2.17-.9.63 0 1.16.14 1.61.41.45.27.79.65 1.03 1.14l-1.05.69c-.16-.3-.38-.55-.67-.74-.29-.18-.64-.28-1.04-.28-.46 0-.82.15-1.1.44-.28.29-.42.7-.42 1.22 0 .54.14.97.41 1.28.28.31.68.55 1.22.72l.85.27zM6.24 18.5c-.46 0-.84-.13-1.14-.39-.3-.26-.45-.66-.45-1.2V11.2h1.4v5.6c0 .24.06.41.18.51.12.1.29.15.51.15.22 0 .4-.05.54-.15.14-.1.21-.27.21-.51V7.5h1.4v9.3c0 .54-.15.94-.45 1.2-.3.26-.68.39-1.14.39z"
        fill="#000000"
      />
    </svg>
  );
}

// 3. TypeScript
export function TypeScriptLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="TypeScript"
      role="img"
      {...props}
    >
      <rect width="24" height="24" rx="3.5" fill="#3178C6" />
      <path
        d="M11.6 7.2v1.6H9v7.7H7.2V8.8H4.6V7.2h7zm4.3 5.4c.8.3 1.4.6 1.8 1.1.4.5.6 1.1.6 1.9 0 1-.4 1.8-1.1 2.3-.7.5-1.7.8-2.9.8-1 0-1.9-.2-2.7-.7-.8-.5-1.3-1.2-1.5-2.1l1.7-.5c.2.6.5 1.1 1 1.4.5.3 1 .5 1.6.5.6 0 1.2-.1 1.6-.4.4-.3.6-.7.6-1.2 0-.4-.1-.8-.4-1-.3-.3-.8-.5-1.5-.7-.9-.3-1.6-.6-2.1-1-.5-.4-.7-1-.7-1.8 0-.9.3-1.6 1-2.1.7-.5 1.6-.8 2.7-.8.9 0 1.7.2 2.4.6.7.4 1.2 1 1.4 1.8l-1.7.5c-.1-.5-.4-.8-.8-1.1-.4-.2-.9-.4-1.4-.4-.5 0-1 .1-1.3.4-.3.2-.5.6-.5 1 0 .4.1.7.4.9.3.2.8.4 1.5.7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 4. Next.js
export function NextjsLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="Next.js"
      role="img"
      {...props}
    >
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
      <path d="M15.5 17.5L8.2 8h-1.4v8h1.4v-5.6l6.2 7.7c.37-.18.74-.4 1.1-.6z" fill="#FFFFFF" />
      <rect x="13.8" y="8" width="1.4" height="5.2" fill="#FFFFFF" />
    </svg>
  );
}

// 5. HTML5
export function Html5Logo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="HTML5"
      role="img"
      {...props}
    >
      <path fill="#E34F26" d="M1.5 0h21l-1.9 21.3-8.6 2.4-8.6-2.4L1.5 0z" />
      <path fill="#EF652A" d="M12 21.7l7.1-2 1.6-17.7H12v19.7z" />
      <path fill="#EBEBEB" d="M12 9.5H8.2l-.2-2.3H12V4.9H5.6l.7 7H12V9.5zm0 6.6l-.1.1-2.9-.8-.2-2.1H6.5l.4 4 5.1 1.4V16.1z" />
      <path fill="#FFFFFF" d="M12 9.5h3.8l-.4 4.3-3.4.9v2.3l5.1-1.4.7-7.4.2-2.3H12v2.3h3.9l-.1 1.2z" />
      <path fill="#FFFFFF" d="M12 4.9v2.3h6.1l.2-2.3H12z" />
    </svg>
  );
}

// 6. CSS3
export function Css3Logo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="CSS3"
      role="img"
      {...props}
    >
      <path fill="#1572B6" d="M1.5 0h21l-1.9 21.3-8.6 2.4-8.6-2.4L1.5 0z" />
      <path fill="#33A9DC" d="M12 21.7l7.1-2 1.6-17.7H12v19.7z" />
      <path fill="#EBEBEB" d="M12 9.5H8.2l-.2-2.3H12V4.9H5.6l.7 7H12V9.5zm0 6.6l-.1.1-2.9-.8-.2-2.1H6.5l.4 4 5.1 1.4V16.1z" />
      <path fill="#FFFFFF" d="M12 9.5h3.8l-.4 4.3-3.4.9v2.3l5.1-1.4.7-7.4H12V9.5zm0-4.6v2.3h6.1l.2-2.3H12z" />
    </svg>
  );
}

// 7. Tailwind CSS
export function TailwindLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#06B6D4"
      className={className}
      aria-label="Tailwind CSS"
      role="img"
      {...props}
    >
      <path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62C13.67 10.62 15.03 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C16.34 6.18 14.98 4.8 12 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62 1.18 1.19 2.54 2.58 5.51 2.58 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C10.34 13.38 8.98 12 6 12z" />
    </svg>
  );
}

// 8. Node.js
export function NodejsLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="Node.js"
      role="img"
      {...props}
    >
      <path fill="#5FA04E" d="M12 1.5L2.5 7v10l9.5 5.5 9.5-5.5V7L12 1.5zm0 2.4l7.4 4.3v7.6L12 20.1l-7.4-4.3V8.2L12 3.9z" />
      <path fill="#339933" d="M12 6.5l5 2.9v5.2l-5 2.9-5-2.9V9.4l5-2.9z" />
      <path fill="#FFFFFF" d="M11 9h2v6h-2z" />
    </svg>
  );
}

// 9. Express.js
export function ExpressLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="Express.js"
      role="img"
      {...props}
    >
      <path d="M23.5 18.5h-4.3l-3.3-5.3-3.3 5.3H8.6l5.5-8.7L8.8 1.5h4.3l3.1 4.9 3.1-4.9h4.4l-5.3 8.4 5.1 8.6zM5.7 7c-.6 0-1.1.2-1.5.6-.4.4-.6.9-.6 1.6h4.1c0-.6-.2-1.2-.6-1.6-.4-.4-.9-.6-1.4-.6zm-3.8 3.9h7.9v.8c0 1.3-.4 2.3-1.1 3-.7.8-1.7 1.1-3 1.1-1.3 0-2.3-.4-3.1-1.2-.8-.8-1.2-1.9-1.2-3.2 0-1.4.4-2.5 1.2-3.3.8-.9 1.9-1.3 3.2-1.3 1.3 0 2.4.4 3.2 1.2.8.8 1.2 1.9 1.2 3.2v.4H3.6c0 .8.3 1.4.9 1.9.5.5 1.2.7 2.1.7.7 0 1.2-.1 1.7-.5.4-.3.7-.7.9-1.2h1.7c-.2.9-.7 1.7-1.5 2.3-.8.6-1.8.9-2.9.9-1.8 0-3.2-.6-4.3-1.7C1.1 14.3.6 12.9.6 11.1c0-1.7.5-3.1 1.6-4.2C3.3 5.8 4.7 5.2 6.4 5.2c1.6 0 3 .5 4 1.6 1.1 1.1 1.6 2.4 1.6 4.1v.8H1.9z" />
    </svg>
  );
}

// 10. MongoDB
export function MongodbLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="MongoDB"
      role="img"
      {...props}
    >
      <path fill="#47A248" d="M12 1.5c-.4 1.3-1 3.2-1 5.5 0 3.7 1.8 6.5 1.8 10.2 0 2.3-.9 4.2-.9 6.5.9-1.4 2.3-3.2 3.2-5.1 1.4-2.8 2.3-6 2.3-8.8 0-3.2-1.4-6-3.7-8.3h-1.7z" />
      <path fill="#4DB33D" d="M12 1.5C11.1 2.9 8.3 5.7 7.4 8.9c-.9 3.2-.5 6.5.9 9.3.9 1.8 2.3 3.7 2.8 5.5 0-2.3.9-4.2.9-6.5 0-3.7-1.8-6.5-1.8-10.2 0-2.3.5-4.2.9-5.5h-.9z" />
      <path fill="#3FA037" d="M12 23.2c-.1.3-.2.5-.3.8.1-.1.2-.3.3-.8z" />
    </svg>
  );
}

// 11. SQL / MySQL
export function MysqlLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="MySQL"
      role="img"
      {...props}
    >
      <path fill="#00758F" d="M18.8 5.6c-.6-.7-1.4-1.2-2.3-1.4-.9-.2-1.8-.1-2.7.2-.9.4-1.7 1-2.3 1.7-.8 1-1.3 2.1-1.6 3.4-.3 1.2-.4 2.5-.2 3.8.1 1 .5 1.9 1.1 2.7.6.8 1.4 1.4 2.4 1.8 1 .3 2 .3 3-.1.9-.4 1.7-1 2.3-1.8.6-.8 1-1.8 1.1-2.8.1-1 0-2-.4-3-.4-.9-1-1.8-1.8-2.5l1.4-2zm-5.7 6.6c-.1-.7 0-1.4.2-2 .2-.7.6-1.3 1.1-1.8.5-.5 1.1-.8 1.8-.9.7-.1 1.4 0 2 .3-.4.8-1 1.5-1.7 2.1-.7.6-1.5 1-2.4 1.2-.4.4-.7.7-1 1.1z" />
      <path fill="#F29111" d="M4 14.5c1.5-1 3.5-1.5 5.5-1.2 1.2.2 2.3.7 3.2 1.5-1.5.8-3.2 1.1-4.9.9-1.4-.2-2.7-.7-3.8-1.2z" />
      <path fill="#00758F" d="M2.5 17.5c2.5-1.2 5.3-1.5 8.1-.8 1.8.4 3.5 1.3 4.9 2.5-2.2 1-4.7 1.3-7.1.8-2.1-.4-4-1.3-5.9-2.5z" />
    </svg>
  );
}

// 12. Python
export function PythonLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="Python"
      role="img"
      {...props}
    >
      <path fill="#3776AB" d="M11.9 0C5.8 0 6.2 2.7 6.2 2.7l.01 2.75h5.81v.83H3.88S0 5.8 0 11.9c0 6.1 3.4 5.9 3.4 5.9h2.03v-2.85s-.1-3.4 3.34-3.4h5.76s3.23.05 3.23-3.12V3.12S18.2 0 11.9 0zm-3.2 1.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      <path fill="#FFD43B" d="M12.1 24c6.1 0 5.7-2.7 5.7-2.7l-.01-2.75H12v-.83h8.14s3.88.45 3.88-5.67c0-6.1-3.4-5.9-3.4-5.9h-2.03v2.85s.1 3.4-3.34 3.4H9.47s-3.23-.05-3.23 3.12v5.3S5.8 24 12.1 24zm3.2-1.9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </svg>
  );
}

// 13. Git
export function GitLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#F05032"
      className={className}
      aria-label="Git"
      role="img"
      {...props}
    >
      <path d="M23.55 10.93L13.07.45a1.5 1.5 0 0 0-2.13 0L8.85 2.54l3.15 3.15a1.8 1.8 0 0 1 2.26 2.27l3.04 3.04a1.79 1.79 0 0 1 1.75 1.72 1.79 1.79 0 0 1-1.79 1.79 1.79 1.79 0 0 1-1.79-1.79c0-.36.1-.7.28-1l-2.84-2.83a1.8 1.8 0 0 1-1.42.38l-3.34 3.34a1.8 1.8 0 0 1 .43 1.16 1.79 1.79 0 1 1-1.79-1.79 1.8 1.8 0 0 1 1.16.43l3.33-3.33a1.8 1.8 0 0 1-.37-1.43L9.67 6.79 1.45 15a1.5 1.5 0 0 0 0 2.13l10.48 10.48a1.5 1.5 0 0 0 2.13 0l9.49-9.48a1.5 1.5 0 0 0 0-2.13z" />
    </svg>
  );
}

// 14. GitHub
export function GithubLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="GitHub"
      role="img"
      {...props}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.39.6.11.83-.26.83-.57 0-.29-.02-1.23-.02-2.24-3.02.56-3.8-.73-4.04-1.41-.13-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.77-.01-.79.94-.01 1.62.87 1.84 1.23 1.08 1.82 2.81 1.31 3.5.99.11-.78.42-1.31.76-1.61-2.67-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.39 1.23-3.23-.12-.3-.54-1.53.12-3.18 0 0 1-.31 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.6-2.8 5.62-5.48 5.92.44.38.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.22.7.82.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// 15. Docker
export function DockerLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#2496ED"
      className={className}
      aria-label="Docker"
      role="img"
      {...props}
    >
      <path d="M13.98 11.08h2.12c.1 0 .19-.08.19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.18.19v1.88c0 .1.08.19.18.19m-2.95-5.43h2.12c.1 0 .19-.08.19-.19V3.57a.19.19 0 0 0-.19-.18h-2.12a.19.19 0 0 0-.18.18v1.89c0 .1.08.19.18.19m0 2.72h2.12c.1 0 .19-.09.19-.19V6.29a.19.19 0 0 0-.19-.18h-2.12a.19.19 0 0 0-.18.18v1.89c0 .1.08.19.18.19m-2.93 0h2.12c.1 0 .18-.09.18-.19V6.29a.19.19 0 0 0-.18-.18H8.1a.19.19 0 0 0-.18.18v1.89c0 .1.08.19.18.19m-2.97 0h2.12c.1 0 .19-.09.19-.19V6.29a.19.19 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.09.19.19.19m5.9 2.71h2.11c.1 0 .19-.08.19-.18V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.18.19v1.88c0 .1.08.18.18.18m-2.94 0h2.12c.1 0 .19-.08.19-.18V9.01a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.18.19v1.88c0 .1.08.18.18.18m-2.96 0h2.12c.1 0 .19-.08.19-.18V9.01a.19.19 0 0 0-.19-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.09.18.19.18m-2.93 0h2.12c.1 0 .18-.08.18-.18V9.01a.19.19 0 0 0-.18-.19H2.21a.19.19 0 0 0-.18.19v1.88c0 .1.08.18.18.18M23.77 11.7a9.38 9.38 0 0 0-3.69-1.93c-.15-.04-.3-.02-.43.06-.52.34-1.12.52-1.74.53-.47 0-.9-.14-1.26-.41l-.05-.04a.26.26 0 0 0-.17-.07H.26c-.14 0-.26.12-.26.26v.01c-.07 1.54.23 3.09.88 4.5 1.48 3.22 4.67 5.42 8.36 5.75 5.4.47 10.35-2.07 12.65-6.52.84-1.63 1.34-3.46 1.43-5.34.01-.08-.03-.16-.09-.21l-.46-.39z" />
    </svg>
  );
}

// 16. Postman
export function PostmanLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#FF6C37"
      className={className}
      aria-label="Postman"
      role="img"
      {...props}
    >
      <path d="M13.67 2.12a10.87 10.87 0 1 0 7.82 17.5l-3.32-3.32a6.3 6.3 0 1 1-4.5-10.74 6.27 6.27 0 0 1 4.47 1.86l3.22-3.23A10.83 10.83 0 0 0 13.67 2.12zm7.74 1.13l-4.14 4.14a8.88 8.88 0 0 1 2.37 2.37l4.14-4.14a11.13 11.13 0 0 0-2.37-2.37z" />
      <circle cx="12" cy="12" r="3.2" fill="#FF6C37" />
    </svg>
  );
}

// 17. Linux CLI
export function LinuxLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="Linux CLI"
      role="img"
      {...props}
    >
      <path fill="#FCC624" d="M12 24c5 0 9-1.3 9-3 0-1.2-2.2-2.3-5.5-2.7V16c1.7-1.3 2.5-3.3 2.5-6 0-4.4-2.7-8-6-8s-6 3.6-6 8c0 2.7.8 4.7 2.5 6v2.3C5.2 18.7 3 19.8 3 21c0 1.7 4 3 9 3z" />
      <ellipse cx="12" cy="10" rx="3.5" ry="4.2" fill="#FFFFFF" />
      <circle cx="10.5" cy="8.2" r="0.9" fill="#000000" />
      <circle cx="13.5" cy="8.2" r="0.9" fill="#000000" />
      <path d="M10 10.8c0 .8.9 1.4 2 1.4s2-.6 2-1.4l-2-.8-2 .8z" fill="#E65100" />
    </svg>
  );
}

// 18. Vite
export function ViteLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="Vite"
      role="img"
      {...props}
    >
      <path fill="#BD34FE" d="M23.5 3.5a.75.75 0 0 0-.8-.5L12.8 4.4a.75.75 0 0 0-.6.7v8.1c0 .3.2.5.4.7l6.9 3.7c.5.3 1.1-.1 1.1-.5l2.9-13.6z" />
      <path fill="#FFD62E" d="M13 .1a.75.75 0 0 0-.9.2L.3 15.7c-.3.5 0 1.2.5 1.2l8 .4-3.2 6.4c-.4.7.5 1.3 1.1.7L19.1 6.1a.75.75 0 0 0-.6-1.2l-5.7-.1V.1z" />
    </svg>
  );
}

// 19. Vercel
export function VercelLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="Vercel"
      role="img"
      {...props}
    >
      <path d="M12 2L24 22H0L12 2Z" />
    </svg>
  );
}

// 20. Chrome DevTools
export function ChromeLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="Chrome DevTools"
      role="img"
      {...props}
    >
      <circle cx="12" cy="12" r="11" fill="#4285F4" />
      <path d="M12 1a11 11 0 0 1 9.5 5.5H12V1z" fill="#EA4335" />
      <path d="M21.5 6.5A11 11 0 0 1 12 23V12l9.5-5.5z" fill="#34A853" />
      <path d="M12 23A11 11 0 0 1 2.5 6.5L12 12v11z" fill="#FBBC05" />
      <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
      <circle cx="12" cy="12" r="4" fill="#1A73E8" />
    </svg>
  );
}

// 21. VS Code
export function VsCodeLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-label="VS Code"
      role="img"
      {...props}
    >
      <path fill="#007ACC" d="M17.6 23.8c.5.2 1.2.2 1.7-.2l4.2-3.6c.4-.4.7-.9.7-1.5V5.4c0-.6-.3-1.1-.7-1.5L19.3.4c-.5-.4-1.2-.4-1.7-.2-.5.2-.9.8-.9 1.4v20.8c0 .6.4 1.2.9 1.4z" />
      <path fill="#1F9CF0" d="M17.2 4.6L7.9 12l9.3 7.5V4.6z" />
      <path fill="#0065A9" d="M17.2 19.4L5.8 28.2a1.5 1.5 0 0 1-2.1-.3l-3.1-4a1.5 1.5 0 0 1 .2-2.1L17.2 4.6v14.8z" />
    </svg>
  );
}

// 22. Chart.js
export function ChartjsLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#FF6384"
      className={className}
      aria-label="Chart.js"
      role="img"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

// 23. State Management (Redux-inspired)
export function StateManagementLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#764ABC"
      className={className}
      aria-label="State Management"
      role="img"
      {...props}
    >
      <path d="M15.4 14.2c-.5-.3-.9-.8-1-1.4-.1-.6.1-1.2.5-1.7l2.6-3.2c.5-.6.7-1.3.6-2.1-.1-.7-.5-1.4-1.2-1.8-1.4-.9-3.1-.6-4.2.6L9.4 8.4c-.8.9-.7 2.3.2 3.1.4.4.9.6 1.5.6.5 0 1-.3 1.4-.7l1.6-1.8 1.5 1.3-1.6 1.9c-.8.8-1.8 1.3-2.9 1.4-1.1.1-2.2-.4-3-1.2-1.7-1.7-1.9-4.4-.3-6.3l3.3-3.9c1.9-2.2 5.3-2.7 7.8-1.1 1.2.8 2.1 2.1 2.3 3.5.2 1.5-.2 2.9-1.1 4.1l-2.6 3.2c-.4.4-.9.7-1.4.8z" />
    </svg>
  );
}

// 24. Responsive UI/UX
export function ResponsiveLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#38BDF8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Responsive UI/UX"
      role="img"
      {...props}
    >
      <rect x="2" y="3" width="13" height="9" rx="2" />
      <polygon points="5 16 3 20 12 20 10 16" />
      <rect x="14" y="7" width="8" height="14" rx="2" fill="rgba(56,189,248,0.2)" />
    </svg>
  );
}

// 25. RESTful APIs
export function RestApiLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="RESTful APIs"
      role="img"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
}

// 26. Authentication / JWT
export function JwtLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A855F7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Authentication / JWT"
      role="img"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="11" r="2.5" fill="#A855F7" />
      <path d="M12 13.5V16" />
    </svg>
  );
}

// 27. API Integration
export function ApiIntegrationLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0EA5E9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="API Integration"
      role="img"
      {...props}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <polyline points="12 12 12 16" />
      <polyline points="10 14 14 14" />
    </svg>
  );
}

// 28. Custom Hooks
export function CustomHooksLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Custom Hooks"
      role="img"
      {...props}
    >
      <circle cx="6" cy="6" r="3" fill="#61DAFB" />
      <path d="M6 9v4a5 5 0 0 0 5 5h2a4 4 0 0 0 4-4v-2" />
    </svg>
  );
}

// 29. Machine Learning / Data Viz
export function MlLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EC4899"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Machine Learning"
      role="img"
      {...props}
    >
      <path d="M12 2a4 4 0 0 0-4 4c0 1.1.4 2.1 1.2 2.8L8 13h8l-1.2-4.2C15.6 8.1 16 7.1 16 6a4 4 0 0 0-4-4z" />
      <circle cx="6" cy="18" r="3" fill="#EC4899" />
      <circle cx="18" cy="18" r="3" fill="#EC4899" />
      <path d="M8.5 15.5L7 16.5M15.5 15.5l1.5 1M12 13v8" />
    </svg>
  );
}

// 30. Java
export function JavaLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E76F00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Java"
      role="img"
      {...props}
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

// 31. C / C++
export function CppLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#00599C"
      className={className}
      aria-label="C++"
      role="img"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#00599C" />
      <path
        d="M9.5 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.8 0 3.3-1.1 4-2.6l-1.8-.8c-.4.9-1.2 1.4-2.2 1.4-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c1 0 1.8.5 2.2 1.4l1.8-.8c-.7-1.5-2.2-2.6-4-2.6zm6 2.5v1.5h-1.5v1.5h1.5v1.5h1.5v-1.5h1.5V11.5H17V10h-1.5zm3.5 0v1.5H17.5v1.5h1.5v1.5h1.5v-1.5H22V11.5h-1.5V10H19z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 32. Shell / Bash
export function ShellLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4EAA25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Shell"
      role="img"
      {...props}
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

// 33. Generic Default Code Badge
export function GenericCodeLogo({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Code"
      role="img"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/**
 * Universal TechLogo component that takes any skill/language name
 * and renders its exact official vector logo.
 */
export default function TechLogo({ name, size = 15, className = '', ...props }) {
  if (!name) return null;

  const key = String(name).toLowerCase().trim();

  // 1. React variations
  if (
    key === 'react' ||
    key === 'react.js' ||
    key === 'reactjs' ||
    key.includes('react / jsx') ||
    key.includes('react')
  ) {
    return <ReactLogo size={size} className={className} {...props} />;
  }

  // 2. JavaScript variations
  if (
    key === 'javascript' ||
    key === 'js' ||
    key.includes('javascript') ||
    key.includes('(es6+)')
  ) {
    return <JavaScriptLogo size={size} className={className} {...props} />;
  }

  // 3. TypeScript variations
  if (key === 'typescript' || key === 'ts' || key.includes('typescript')) {
    return <TypeScriptLogo size={size} className={className} {...props} />;
  }

  // 4. Next.js variations
  if (key === 'next' || key === 'next.js' || key === 'nextjs' || key.includes('next')) {
    return <NextjsLogo size={size} className={className} {...props} />;
  }

  // 5. HTML5 variations
  if (key === 'html' || key === 'html5' || key.includes('html')) {
    return <Html5Logo size={size} className={className} {...props} />;
  }

  // 6. CSS3 / Vanilla CSS variations
  if (
    key === 'css' ||
    key === 'css3' ||
    key.includes('css3') ||
    key.includes('vanilla css') ||
    key.includes('css modules')
  ) {
    return <Css3Logo size={size} className={className} {...props} />;
  }

  // 7. Tailwind CSS variations
  if (key.includes('tailwind')) {
    return <TailwindLogo size={size} className={className} {...props} />;
  }

  // 8. Node.js variations
  if (key === 'node' || key === 'node.js' || key === 'nodejs' || key.includes('node')) {
    return <NodejsLogo size={size} className={className} {...props} />;
  }

  // 9. Express.js variations
  if (key === 'express' || key === 'express.js' || key === 'expressjs' || key.includes('express')) {
    return <ExpressLogo size={size} className={className} {...props} />;
  }

  // 10. MongoDB variations
  if (key.includes('mongo') || key.includes('mongodb')) {
    return <MongodbLogo size={size} className={className} {...props} />;
  }

  // 11. SQL / MySQL variations
  if (key.includes('sql') || key.includes('mysql')) {
    return <MysqlLogo size={size} className={className} {...props} />;
  }

  // 12. Python variations
  if (key.includes('python')) {
    return <PythonLogo size={size} className={className} {...props} />;
  }

  // 13. Git & GitHub
  if (key.includes('git & github')) {
    return <GitLogo size={size} className={className} {...props} />;
  }
  if (key === 'github' || key.includes('github')) {
    return <GithubLogo size={size} className={className} {...props} />;
  }
  if (key === 'git' || key.includes('git')) {
    return <GitLogo size={size} className={className} {...props} />;
  }

  // 14. Docker
  if (key.includes('docker')) {
    return <DockerLogo size={size} className={className} {...props} />;
  }

  // 15. Postman
  if (key.includes('postman')) {
    return <PostmanLogo size={size} className={className} {...props} />;
  }

  // 16. Linux CLI
  if (key.includes('linux')) {
    return <LinuxLogo size={size} className={className} {...props} />;
  }

  // 17. Vite
  if (key.includes('vite')) {
    return <ViteLogo size={size} className={className} {...props} />;
  }

  // 18. Vercel
  if (key.includes('vercel')) {
    return <VercelLogo size={size} className={className} {...props} />;
  }

  // 19. Chrome DevTools
  if (key.includes('chrome') || key.includes('devtools')) {
    return <ChromeLogo size={size} className={className} {...props} />;
  }

  // 20. VS Code
  if (key.includes('vs code') || key.includes('vscode')) {
    return <VsCodeLogo size={size} className={className} {...props} />;
  }

  // 21. Chart.js & Data Viz
  if (key.includes('chart') || key.includes('data viz')) {
    return <ChartjsLogo size={size} className={className} {...props} />;
  }

  // 22. State Management
  if (key.includes('state management') || key.includes('redux') || key.includes('zustand')) {
    return <StateManagementLogo size={size} className={className} {...props} />;
  }

  // 23. Responsive UI/UX
  if (key.includes('responsive') || key.includes('ui/ux') || key.includes('ux')) {
    return <ResponsiveLogo size={size} className={className} {...props} />;
  }

  // 24. RESTful APIs
  if (key.includes('rest') || key.includes('restful') || key.includes('api')) {
    if (key.includes('integration')) {
      return <ApiIntegrationLogo size={size} className={className} {...props} />;
    }
    return <RestApiLogo size={size} className={className} {...props} />;
  }

  // 25. Authentication / JWT
  if (key.includes('auth') || key.includes('jwt') || key.includes('token')) {
    return <JwtLogo size={size} className={className} {...props} />;
  }

  // 26. Custom Hooks
  if (key.includes('hook')) {
    return <CustomHooksLogo size={size} className={className} {...props} />;
  }

  // 27. Machine Learning / AI
  if (key.includes('learning') || key.includes('ai') || key.includes('nasa') || key.includes('noaa')) {
    return <MlLogo size={size} className={className} {...props} />;
  }

  // 28. Java
  if (key === 'java') {
    return <JavaLogo size={size} className={className} {...props} />;
  }

  // 29. C / C++
  if (key === 'c' || key === 'c++' || key === 'cpp') {
    return <CppLogo size={size} className={className} {...props} />;
  }

  // 30. Shell / Bash
  if (key.includes('shell') || key.includes('bash')) {
    return <ShellLogo size={size} className={className} {...props} />;
  }

  // Fallback generic code logo
  return <GenericCodeLogo size={size} className={className} {...props} />;
}
