"use client";
import {
  Hero,
  WhyChooseMe,
  MyFeature,
  LangkahPembuatan,
  ChooseDesign,
  Price,
} from "./components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseMe />
      <MyFeature />
      <LangkahPembuatan />
      <ChooseDesign />
      <Price />
    </main>
  );
}
