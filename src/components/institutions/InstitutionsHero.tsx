"use client";

import { GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";

export default function InstitutionsHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5FD] pt-36 pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          {/* Badge */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#4C1D95]">
            <GraduationCap size={16} />
            For Institutions
          </div>

          {/* Heading */}

          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl">
            Language{" "}
            <GradientText>
              Skilling Solutions
            </GradientText>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            We prepare students to thrive in a global, AI-driven workplace
            through industry-aligned programs in Business English and foreign
            languages.
          </p>

          {/* Button */}

          <button
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#2D1457]
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#3A1D70]
            "
          >
            Partner With Us

            <ArrowRight size={20} />
          </button>
        </motion.div>
      </Container>
    </section>
  );
}