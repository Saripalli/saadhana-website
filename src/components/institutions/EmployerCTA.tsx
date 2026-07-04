"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { employerSection } from "@/constants/institutions";

export default function EmployerCTA() {
  return (
    <section className="bg-[#F7F5FD] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="
            rounded-[36px]
            border
            border-violet-100
            bg-white
            px-10
            py-20
            text-center
            shadow-[0_20px_70px_rgba(109,40,217,0.08)]
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-violet-200
              bg-violet-50
              px-5
              py-2
              text-sm
              font-semibold
              tracking-[0.22em]
              text-violet-700
            "
          >
            {employerSection.badge}
          </span>

          <h2 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
            {employerSection.title}{" "}
            <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent">
              {employerSection.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            {employerSection.description}
          </p>

          <button
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#2D1457]
              px-9
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-violet-800
            "
          >
            {employerSection.button}

            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}