"use client";
import {
  Hero,
  WhyChooseMe,
  MyFeature,
  LangkahPembuatan,
  ChooseDesign,
  Price,
  Navbar,
} from "./components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseMe />
      <MyFeature />
      <LangkahPembuatan />
      <ChooseDesign />
      <Price />
    </main>
  );
}
