"use client";

export default function Footer() {
  return (
    <footer className="pb-8 pt-4 absolute bottom-0 left-0 w-full flex justify-center z-10">
      <button className="opacity-60 hover:opacity-100 transition-opacity">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </footer>
  );
} 