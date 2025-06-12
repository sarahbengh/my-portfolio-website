"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>À propos de moi</SectionHeading>
 <p className="mb-3">
  Après avoir obtenu mon <span className="font-medium">baccalauréat</span>, j’ai rejoint l’
  <span className="font-medium">ESTIN</span>, où j’ai découvert ma passion pour la programmation, en particulier pour la
  <span className="italic"> résolution de problèmes</span>. J’ai ensuite suivi une formation en{" "}
  <span className="font-medium">développement web full-stack</span> chez <span className="font-medium">Amis de Java School</span>.

  Ma stack principale comprend <span className="font-medium">React, Next.js, Node.js et MongoDB</span>, avec une bonne maîtrise de{" "}
  <span className="font-medium">TypeScript</span> et <span className="font-medium">Prisma</span>. Je cherche un{" "}
  <span className="font-medium">poste à temps plein</span> en tant que développeuse web.
</p>
<p className="mb-3">
  Passionnée aussi par le <span className="font-medium">design</span>, je m’inspire de <span className="italic">la nature</span> pour créer des interfaces harmonieuses. En dehors du code, je m'intéresse à{" "}
  <span className="italic">la cuisine, la photographie, la lecture, les animaux</span> et <span className="italic">l’agriculture</span>.
</p>

    </motion.section>
  );
}