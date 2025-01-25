import About from "@/sections/About";
import Facts from "@/sections/Facts";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";

export default function page() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
      </main>
    </>
  );
}
