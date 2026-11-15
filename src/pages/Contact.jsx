import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* 1. Hero Section */}
      <ContactHero />

      {/* 2. Main Content (Info & Form) */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

    </div>
  );
}