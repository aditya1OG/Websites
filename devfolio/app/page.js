import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
// import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className=" bg-black min-w-[100%]">
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Project />
      <Contact />
    </main>
  )
}
