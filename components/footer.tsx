import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
&copy; 2025 Sarah. Tous droits réservés.      </small>
      <p className="text-xs">
        <span className="font-semibold">À propos de ce site web:</span> 
Ce site a été conçu avec React et Next.js (en utilisant l'App Router et les Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email et Resend. Il est hébergé sur Vercel.
      </p>
    </footer>
  );
}
