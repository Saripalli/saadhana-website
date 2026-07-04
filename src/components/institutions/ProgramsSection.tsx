"use client";

import { motion } from "framer-motion";

import {
  institutionPrograms,
  programsBadge,
  programsDescription,
  programsTitle,
} from "@/constants/institutions";

import ProgramCard from "./ProgramCard";

export default function ProgramsSection() {
  return (
    <section className="bg-[#F8F7FC] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-violet-200
              bg-white
              px-6
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-violet-700
            "
          >
            {programsBadge}
          </span>

          <h2 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 lg:text-7xl">
            {programsTitle}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            {programsDescription}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {institutionPrograms.map((program, index) => (
            <ProgramCard
              key={program.title}
              program={program}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}