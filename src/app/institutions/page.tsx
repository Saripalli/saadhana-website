import InstitutionsHero from "@/components/institutions/InstitutionsHero";
import ProgramsSection from "@/components/institutions/ProgramsSection";
import EmployerCTA from "@/components/institutions/EmployerCTA";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function InstitutionsPage() {
  return (
    <main>

      <Navbar />
      
      <InstitutionsHero />

      <ProgramsSection />

      <EmployerCTA />

      <Footer />

    </main>
  );
}