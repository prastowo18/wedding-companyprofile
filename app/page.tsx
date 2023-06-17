"use client";
import {
  Hero,
  WhyChooseMe,
  MyFeature,
  LangkahPembuatan,
  ChooseDesign,
  Price,
  Navbar,
  PertanyaanUmum,
  Footer,
  Contact,
} from "./components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseMe />
      <LangkahPembuatan />
      <MyFeature />
      <ChooseDesign />
      <Price />
      <PertanyaanUmum />
      <Contact />
      <Footer />
    </main>
  );
}
