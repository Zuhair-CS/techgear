import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header/>
      <Hero />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  );
}
