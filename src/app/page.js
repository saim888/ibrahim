import Hero from "./components/Hero";
import About from "./components/About";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import HowWeDoIt from "./components/HowWeDoIt";
import Why from "./components/Why";
import {Contact} from "./components/Contact";

export default function Home() {
  return (
      <main className="font-sans overflow-hidden">
        <Hero />
        <About />
        <WhoWeAre />
        <WhatWeDo />
        <HowWeDoIt />
        <Why />
        <Contact />
      </main>
  )
}
