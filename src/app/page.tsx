import { CTASection } from "@/components/CTA";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Features />
      <CTASection />
      <Footer />
    </main>
  );
}
