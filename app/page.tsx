"use client";
import { Hero, WhyChooseMe, MyFeature } from "./components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseMe />
      <MyFeature />
    </main>
  );
}
