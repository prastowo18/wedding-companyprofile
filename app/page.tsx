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

import { data } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseMe data={data.whychooseme} />
      <LangkahPembuatan data={data.langkahpembuatan} />
      <MyFeature data={data.myfeature} />
      <ChooseDesign />
      <Price />
      <PertanyaanUmum />
      <Contact />
      <Footer />
    </main>
  );
}
