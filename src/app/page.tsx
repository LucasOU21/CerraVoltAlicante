import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileDock } from "@/components/MobileDock";
import { Services } from "@/components/Services";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="pb-24 md:pb-0">
        <Hero />
        <Services />
        <Trust />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
